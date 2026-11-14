
/* ==========================================
   H대학교 병원 - 진료과 데이터 및 기능

   ★ 진료과 추가/수정/삭제는 아래 departments 배열!
   ★ id는 영문 고유값, 중복 금지
   ★ category는 분류명
   ★ doctors는 추후 의료진 데이터와 연결할 예정
   ========================================== */

const departments = [

  /* ========== 1. 내과계 ========== */
  {
    id: "gastroenterology",
    name: "소화기내과",
    category: "내과계",
    summary: "위·장·간·췌장 질환",
    description: "소화기내과는 식도, 위, 소장, 대장, 간, 담도 및 췌장에 발생하는 질환의 진단과 치료를 담당합니다.",
    specialties: ["위·식도 질환", "대장 질환", "간 질환", "췌담도 질환"],
    doctors: []
  },
  {
    id: "cardiology",
    name: "순환기내과",
    category: "내과계",
    summary: "심장 및 혈관 질환",
    description: "순환기내과는 심장과 혈관에 발생하는 다양한 질환을 진단하고 치료하는 진료과입니다.",
    specialties: ["고혈압", "협심증", "심부전", "부정맥"],
    doctors: []
  },
  {
    id: "pulmonology",
    name: "호흡기내과",
    category: "내과계",
    summary: "폐·기관지 및 호흡기 질환",
    description: "호흡기내과는 폐와 기관지 등 호흡기계에 발생하는 질환을 진단하고 치료합니다.",
    specialties: ["천식", "만성폐쇄성폐질환", "폐렴", "간질성 폐질환"],
    doctors: []
  },

  /* ========== 2. 외과계 ========== */
  {
    id: "general-surgery",
    name: "외과",
    category: "외과계",
    summary: "복부 및 일반 외과 질환",
    description: "외과는 수술적 치료가 필요한 다양한 질환을 진단하고 치료합니다.",
    specialties: ["복부 질환", "담낭 질환", "탈장", "외과적 수술 치료"],
    doctors: []
  },
  {
    id: "orthopedics",
    name: "정형외과",
    category: "외과계",
    summary: "뼈·관절·근육 및 척추 질환",
    description: "정형외과는 근골격계 질환과 외상을 진단하고 치료하는 진료과입니다.",
    specialties: ["관절 질환", "척추 질환", "골절", "스포츠 손상"],
    doctors: []
  },
  {
    id: "neurosurgery",
    name: "신경외과",
    category: "외과계",
    summary: "뇌·척수 및 신경계 외과 질환",
    description: "신경외과는 뇌와 척수, 말초신경에 발생하는 수술적 치료 대상 질환을 진료합니다.",
    specialties: ["뇌혈관 질환", "뇌종양", "척추 질환", "신경계 외상"],
    doctors: []
  },

  /* ========== 3. 기타 진료과 ========== */
  {
    id: "pediatrics",
    name: "소아청소년과",
    category: "기타 진료과",
    summary: "소아 및 청소년 건강관리",
    description: "소아청소년과는 신생아부터 청소년까지의 성장과 발달, 질병의 진단 및 치료를 담당합니다.",
    specialties: ["성장·발달", "소아 호흡기 질환", "예방접종", "소아 일반진료"],
    doctors: []
  },
  {
    id: "obgyn",
    name: "산부인과",
    category: "기타 진료과",
    summary: "여성 건강 및 임신·출산",
    description: "산부인과는 여성 생식기 질환과 임신, 출산에 관한 진료를 담당합니다.",
    specialties: ["산전관리", "부인과 질환", "여성 건강", "임신·출산"],
    doctors: []
  },
  {
    id: "dermatology",
    name: "피부과",
    category: "기타 진료과",
    summary: "피부·모발·손발톱 질환",
    description: "피부과는 피부와 모발, 손발톱에 발생하는 다양한 질환을 진단하고 치료합니다.",
    specialties: ["피부염", "여드름", "탈모", "피부 감염"],
    doctors: []
  },
  {
    id: "psychiatry",
    name: "정신건강의학과",
    category: "기타 진료과",
    summary: "정신건강 및 정서·행동 문제",
    description: "정신건강의학과는 다양한 정신건강 문제를 평가하고 치료하는 진료과입니다.",
    specialties: ["우울장애", "불안장애", "수면장애", "정신건강 평가"],
    doctors: []
  }

  /* ★ 새 진료과는 이 위에 쉼표와 함께 추가 ★ */
];

/* ==========================================
   아래부터는 화면 동작 코드
   일반적인 진료과 추가 시 수정할 필요 없음
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===== 공통 경로 드롭다운 ===== */
  const crumbs = [...document.querySelectorAll(".crumb")];

  function closeCrumbs() {
    crumbs.forEach(crumb => {
      crumb.classList.remove("open");
      crumb.querySelector(".crumb-button")
        .setAttribute("aria-expanded", "false");
    });
  }

  crumbs.forEach(crumb => {
    const button = crumb.querySelector(".crumb-button");

    button.addEventListener("click", () => {
      const wasOpen = crumb.classList.contains("open");
      closeCrumbs();
      if (!wasOpen) {
        crumb.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("pointerdown", event => {
    if (!event.target.closest(".crumb")) closeCrumbs();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeCrumbs();
  });

  /* ===== 임시 안내 ===== */
  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
  }

  document.querySelectorAll("a[data-pending]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      closeCrumbs();
      showToast("해당 페이지는 현재 준비 중입니다.");
    });
  });

  /* ===== 안전한 텍스트 삽입 ===== */
  function makeElement(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined) element.textContent = content;
    return element;
  }

  /* ===== 진료과 목록 페이지 ===== */
  const listContainer = document.getElementById("departmentList");

  if (listContainer) {
    const searchInput = document.getElementById("departmentSearch");
    const searchButton = document.getElementById("searchButton");
    const resetButton = document.getElementById("resetButton");
    const filterContainer = document.getElementById("categoryFilters");
    const emptyState = document.getElementById("emptyState");

    let selectedCategory = "전체";
    const categories = ["전체", ...new Set(departments.map(d => d.category))];

    function renderFilters() {
      filterContainer.replaceChildren();

      categories.forEach(category => {
        const button = makeElement("button", "filter-button", category);
        button.type = "button";
        button.classList.toggle("active", selectedCategory === category);
        button.setAttribute("aria-pressed", String(selectedCategory === category));

        button.addEventListener("click", () => {
          selectedCategory = category;
          renderFilters();
          renderDepartments();
        });

        filterContainer.appendChild(button);
      });
    }

    function renderDepartments() {
      const query = searchInput.value.trim().toLocaleLowerCase("ko");
      listContainer.replaceChildren();

      const matched = departments.filter(dept => {
        const categoryMatch =
          selectedCategory === "전체" ||
          dept.category === selectedCategory;

        const searchText = [
          dept.name, dept.summary, dept.description,
          ...dept.specialties
        ].join(" ").toLocaleLowerCase("ko");

        return categoryMatch && searchText.includes(query);
      });

      emptyState.hidden = matched.length > 0;

      const visibleCategories = [...new Set(matched.map(d => d.category))];

      visibleCategories.forEach(category => {
        const section = makeElement("section", "department-section");
        section.appendChild(makeElement("h2", "", category));

        const grid = makeElement("div", "department-grid");

        matched.filter(d => d.category === category).forEach(dept => {
          const card = makeElement("a", "department-card");
          card.href = `department-detail.html?id=${encodeURIComponent(dept.id)}`;

          // 진료과 카드: 이름만 표시
         const title = makeElement("strong", "", dept.name);

         card.appendChild(title);
         grid.appendChild(card);
        });

        section.appendChild(grid);
        listContainer.appendChild(section);
      });
    }

    searchInput.addEventListener("input", renderDepartments);
    searchButton.addEventListener("click", renderDepartments);

    resetButton.addEventListener("click", () => {
      searchInput.value = "";
      selectedCategory = "전체";
      renderFilters();
      renderDepartments();
    });

    renderFilters();
    renderDepartments();
  }

  /* ===== 진료과 상세 페이지 ===== */
  const detailContainer = document.getElementById("departmentDetail");

  if (detailContainer) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const dept = departments.find(item => item.id === id);

    if (!dept) {
      detailContainer.appendChild(
        makeElement("h1", "", "진료과를 찾을 수 없습니다.")
      );
      detailContainer.appendChild(
        makeElement("p", "", "진료과 목록에서 다시 선택해 주세요.")
      );
      return;
    }

    document.title = `${dept.name} | H대학교 병원`;

    const crumbName = document.getElementById("breadcrumbDepartment");
    if (crumbName) crumbName.textContent = dept.name;

    // 진료과 제목
    const hero = makeElement("div", "detail-hero");
    hero.appendChild(makeElement("span", "eyebrow", "MEDICAL DEPARTMENT"));
    hero.appendChild(makeElement("h1", "", dept.name));
    hero.appendChild(makeElement("p", "", dept.summary));
    detailContainer.appendChild(hero);

    // 진료과 소개
    const intro = makeElement("section", "detail-section");
    intro.appendChild(makeElement("h2", "", "진료과 소개"));
    intro.appendChild(
      makeElement("p", "detail-description", dept.description)
    );
    detailContainer.appendChild(intro);

    // 주요 진료 분야
    const specialtiesSection = makeElement("section", "detail-section");
    specialtiesSection.appendChild(makeElement("h2", "", "주요 진료 분야"));

    const specialtyList = makeElement("div", "specialty-list");
    dept.specialties.forEach(specialty => {
      specialtyList.appendChild(
        makeElement("span", "specialty-item", specialty)
      );
    });
    specialtiesSection.appendChild(specialtyList);
    detailContainer.appendChild(specialtiesSection);

    // 의료진 연동 예정 영역
    const doctorsSection = makeElement("section", "detail-section");
    doctorsSection.appendChild(makeElement("h2", "", "소속 의료진"));

    const doctorBox = makeElement("div", "doctor-placeholder");
    doctorBox.appendChild(
      makeElement("p", "", "소속 의료진 정보는 추후 등록될 예정입니다.")
    );

    const doctorLink = makeElement("a", "outline-button", "의료진 찾기 →");
    doctorLink.href = `doctors.html?department=${encodeURIComponent(dept.id)}`;
    doctorLink.addEventListener("click", event => {
      event.preventDefault();
      showToast("의료진 찾기 페이지는 현재 제작 중입니다.");
    });

    doctorBox.appendChild(doctorLink);
    doctorsSection.appendChild(doctorBox);
    detailContainer.appendChild(doctorsSection);
  }
});
      
