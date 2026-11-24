
/* ==========================================
   H대학교 병원 - 진료과 데이터 및 기능

   ★ 진료과 추가/수정/삭제: departments 배열
   ★ id: 영문 고유값, 중복 금지
   ★ category: 진료과 분류
   ★ icon: 픽토그램 이미지 경로
   ★ doctors: 추후 의료진 연결 예정
   ========================================== */

const departments = [

  /* ========== 1. 내과계 ========== */
   {
    id: "endocrinology",
    name: "내분비내과",
    category: "내과계",
    summary: "호르몬 기능 이상, 내분비 질환",
    icon: "",
    description: "내분비내과는 호르몬 기능 이상에 의해 발생하는 내분비 질환을 전문적으로 진료합니다. 당뇨병, 내분비 기관에서 분비되는 호르몬 이상, 내분비 기관에서 발생하는 종양 등을 진단하고 치료합니다. H대학교병원 내분비내과에서는 정확한 진단과 치료에 전념하고 있으며, 당뇨병 환자의 전문적 진료를 위하여 당뇨병 클리닉 등 특수 클리닉을 운영하여 보다 전문적이고 체계적인 환자 중심의 진료가 되도록 최선을 다하고 있습니다.",
    specialties: ["당뇨병", "갑상선질환", "뇌하수체 질환", "부신 질환", "비만증, 고지혈증"],
    doctors: []
  },
   
  {
    id: "gastroenterology",
    name: "소화기내과",
    category: "내과계",
    summary: "식도·위·소장·대장 질환",
    icon: "",
    description: "소화기내과는 식도, 위, 소장, 대장, 간, 담도 및 췌장에 발생하는 소화기계 질내에 대해 예방, 조기진단과 치료 및 연구를 담당합니다. 확대내시경을 포함한 최첨단 고해상 내시경기기와 환자를 위해 최적화된 소화기병검사실 시설을 갖추고 있으며 숙련된 전문 의료진이 정확한 조기 진단과 수준 높은 양질의 치료를 제공하고자 열과 성의를 다하고 있습니다. 종합검진센터, 영상의학과, 흉부외과, 진단병리과 등 여러과와 유기적인 협조와 빠른 의사소통을 통해 환자들의 문제를 보다 빠르게 해결하고 있습니다.",
    specialties: ["식도 질환", "위, 십이지장 질환", "소장 및 대장암", "췌담도 질환"],
    doctors: []
  },

    {
    id: "",
    name: "신장내과",
    category: "내과계",
    summary: "신장 자체 및 전신 질환에 의한 신장질환",
    icon: "",
    description: "신장내과는 다양한 신장 질환 및 신장 기능이 저하된 환자의 건강과 생명을 지키는 과입니다. H대학교병원 신장내과는 급성 및 만성 신부전과 당뇨병성 신증, 고혈압성 신증, 사구체 신염, 낭창성 신염, 산 염기 전해질 장애 등 다양한 신장 질환 및 혈뇨, 단백뇨, 고혈압 등의 증상에 대한 정확한 진단과 치료를 위하여 최첨단 의료장비 및 최고의 의료진을 갖추고 있으며, 다양한 특수 클리닉을 통해 보다 나은 의료 서비스 제공에 만전을 기하고 있습니다.",
    specialties: ["사구체 신염", "혈뇨 및 단백뇨", "급성 및 만성 신부전증", "혈액 투석", "복막 투석", "고혈압"],
    doctors: []
  },

  {
    id: "cardiology",
    name: "심장내과",
    category: "내과계",
    summary: "심장 및 혈관 질환",
    icon: "../images/departments/cardiology.png",
    description: "심장내과는 인체에서 가장 중요한 기관의 하나인 심장 및 혈관에 관계된 질환을 보는 의학 분야입니다. 고혈압, 고지혈증 등과 같이 지속적인 관리를 요하는 질환부터 부정맥과 함께 급성심근 경색, 협심증 등과 같이 중증의 심장 혈관 질환을 진단하고 치료하는 분야입니다. H대학교병원 심장내과에서는 최신식 시설과 전문적 인력과 함께 심혈관 질환들을 정확하고 신속하게 진단하고 있습니다.",
    specialties: ["허혈성심질환", "고혈압 및 고지혈증", "심근질환", "부정맥"],
    doctors: []
  },
   
   
   {
    id: "",
    name: "알레르기내과",
    category: "내과계",
    summary: "복부 및 일반 외과 질환",
    icon: "",
    description: "알레르기내과는 천식을 전문적으로 진료하고 있으며, 알레르기 비염 및 결막염, 두드러기 및 혈관부종, 과민성 폐장염, 호산구성 폐질환, 음식물 알레르기, 약물 알레르기, 곤충독 알레르기, 아나필락시스 등의 다양한 알레르기 질환을 다루고 있습니다. H대학교병원 알레르기 내과에서는 환자분들의 증상과 상태를 자세히 파악하고 그에 따른 체계적이고 효율적인 검사와 치료를 진행하고 있습니다.",
    specialties: ["복부 질환", "담낭 질환", "탈장", "외과적 수술 치료"],
    doctors: []
  },

  {
    id: "pulmonology",
    name: "호흡기내과",
    category: "내과계",
    summary: "폐·기관지 및 호흡기 질환",
    icon: "",
    description: "호흡기내과는 폐와 기관지 등 호흡기계에 발생하는 질환을 진단하고 치료합니다.",
    specialties: ["천식", "만성폐쇄성폐질환", "폐렴", "간질성 폐질환"],
    doctors: []
  },

  /* ========== 2. 외과계 ========== */

  {
    id: "general-surgery",
    name: "간담췌외과",
    category: "외과계",
    summary: "복부 및 일반 외과 질환",
    icon: "",
    description: "외과는 수술적 치료가 필요한 다양한 질환을 진단하고 치료합니다.",
    specialties: ["복부 질환", "담낭 질환", "탈장", "외과적 수술 치료"],
    doctors: []
  },

   {
    id: "",
    name: "대장항문외과",
    category: "외과계",
    summary: "복부 및 일반 외과 질환",
    icon: "",
    description: "",
    specialties: ["복부 질환", "담낭 질환", "탈장", "외과적 수술 치료"],
    doctors: []
  },

   {
    id: "",
    name: "위장관외과",
    category: "외과계",
    summary: "복부 및 일반 외과 질환",
    icon: "",
    description: "",
    specialties: ["복부 질환", "담낭 질환", "탈장", "외과적 수술 치료"],
    doctors: []
  },

   {
    id: "",
    name: "이식혈관외과",
    category: "외과계",
    summary: "복부 및 일반 외과 질환",
    icon: "",
    description: "",
    specialties: ["복부 질환", "담낭 질환", "탈장", "외과적 수술 치료"],
    doctors: []
  },
   
   { 
    id: "cardiac-surgery",
    name: "심장혈관흉부외과",
    category: "외과계",
    summary: "복부 및 일반 외과 질환",
    icon: "../images/departments/cardiac-surgery.png",
    description: "심장혈관흉부외과는 심장, 혈관 및 흉부의 질환을 담당하는 임상 진료과입니다. H대학교병원에서는 최신 심장조영 영상장치 및 초음파기기를 이용한 정확한 진단과 그에 따른 적절한 외과적 치료에 노력하고 있습니다.",
    specialties: ["심장판막질환", "관상동맥 · 대동맥질환", "부정맥", "흉부 손상", "흉막질환", "폐암", "감염성 및 간질성 폐질환"],
    doctors: []
  },
   
  {
    id: "orthopedics",
    name: "정형외과",
    category: "외과계",
    summary: "뼈·관절·근육 및 척추 질환",
    icon: "",
    description: "정형외과는 근골격계 질환과 외상을 진단하고 치료하는 진료과입니다.",
    specialties: ["관절 질환", "척추 질환", "골절", "스포츠 손상"],
    doctors: []
  },

  {
    id: "neurosurgery",
    name: "신경외과",
    category: "외과계",
    summary: "뇌·척수 및 신경계 외과 질환",
    icon: "../images/departments/neurosurgery.png",
    description: "신경외과는 뇌와 척수, 말초신경에 발생하는 수술적 치료 대상 질환을 진료합니다.",
    specialties: ["뇌혈관 질환", "뇌종양", "척추 질환", "신경계 외상"],
    doctors: []
  },

  /* ========== 3. 기타 진료과 ========== */
   {
    id: "anesthesiology",
    name: "마취통증의학과",
    category: "외과계",
    summary: "복부 및 일반 외과 질환",
    icon: "",
    description: "",
    specialties: ["복부 질환", "담낭 질환", "탈장", "외과적 수술 치료"],
    doctors: []
  },

{
    id: "",
    name: "병리과",
    category: "외과계",
    summary: "복부 및 일반 외과 질환",
    icon: "",
    description: "",
    specialties: ["복부 질환", "담낭 질환", "탈장", "외과적 수술 치료"],
    doctors: []
  },
   
  {
    id: "pediatrics",
    name: "소아청소년과",
    category: "기타 진료과",
    summary: "소아 및 청소년 건강관리",
    icon: "",
    description: "소아청소년과는 신생아부터 청소년까지의 성장과 발달, 질병의 진단 및 치료를 담당합니다.",
    specialties: ["성장·발달", "소아 호흡기 질환", "예방접종", "소아 일반진료"],
    doctors: []
  },

  {
    id: "obgyn",
    name: "산부인과",
    category: "기타 진료과",
    summary: "여성 건강 및 임신·출산",
    icon: "",
    description: "산부인과는 여성 생식기 질환과 임신, 출산에 관한 진료를 담당합니다.",
    specialties: ["산전관리", "부인과 질환", "여성 건강", "임신·출산"],
    doctors: []
  },

   {
    id: "",
    name: "응급의학과",
    category: "외과계",
    summary: "복부 및 일반 외과 질환",
    icon: "",
    description: "",
    specialties: ["복부 질환", "담낭 질환", "탈장", "외과적 수술 치료"],
    doctors: []
  },

   {
    id: "",
    name: "재활의학과",
    category: "외과계",
    summary: "복부 및 일반 외과 질환",
    icon: "",
    description: "",
    specialties: ["복부 질환", "담낭 질환", "탈장", "외과적 수술 치료"],
    doctors: []
  },
   
  {
    id: "dermatology",
    name: "피부과",
    category: "기타 진료과",
    summary: "피부·모발·손발톱 질환",
    icon: "",
    description: "피부과는 피부와 모발, 손발톱에 발생하는 다양한 질환을 진단하고 치료합니다.",
    specialties: ["피부염", "여드름", "탈모", "피부 감염"],
    doctors: []
  },

  {
    id: "psychiatry",
    name: "정신건강의학과",
    category: "기타 진료과",
    summary: "정신건강 및 정서·행동 문제",
    icon: "",
    description: "정신건강의학과는 다양한 정신건강 문제를 평가하고 치료하는 진료과입니다.",
    specialties: ["우울장애", "불안장애", "수면장애", "정신건강 평가"],
    doctors: []
  }

  /* ★ 새 진료과는 이 위에 추가 ★ */
];


/* ==========================================
   공통 유틸리티
   ========================================== */

function makeElement(tag, className = "", content) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (content !== undefined) {
    element.textContent = content;
  }

  return element;
}


/* ==========================================
   진료과 픽토그램 생성
   ★ 목록과 상세 페이지에서 공통 사용
   ========================================== */

function createDepartmentIcon(dept, location = "card") {
  const wrapper = makeElement(
    "div",
    `department-icon department-icon--${location}`
  );

  // 이미지가 없더라도 영역은 유지
  if (!dept.icon) {
    wrapper.classList.add("is-empty");
    return wrapper;
  }

  const img = document.createElement("img");

  img.src = dept.icon;
  img.alt = "";
  img.loading = "lazy";
  img.decoding = "async";

  img.addEventListener("error", () => {
    img.remove();
    wrapper.classList.add("is-empty");
  });

  wrapper.appendChild(img);

  return wrapper;
}


/* ==========================================
   페이지 초기화
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

 
  // 공통 드롭다운과 준비 중 링크는 subpage-header.js에서 관리합니다.
  


  /* ========================================
     3. 진료과 목록 페이지
     ======================================== */

  const listContainer =
    document.getElementById("departmentList");

  if (listContainer) {
    const searchInput =
      document.getElementById("departmentSearch");

    const searchButton =
      document.getElementById("searchButton");

    const resetButton =
      document.getElementById("resetButton");

    const filterContainer =
      document.getElementById("categoryFilters");

    const emptyState =
      document.getElementById("emptyState");

    if (
      searchInput &&
      filterContainer &&
      emptyState
    ) {
      let selectedCategory = "전체";

      const categories = [
        "전체",
        ...new Set(departments.map(dept => dept.category))
      ];

      /* ===== 분류 필터 ===== */

      function renderFilters() {
        filterContainer.replaceChildren();

        categories.forEach(category => {
          const button = makeElement(
            "button",
            "filter-button",
            category
          );

          button.type = "button";

          const isActive = selectedCategory === category;

          button.classList.toggle("active", isActive);
          button.setAttribute(
            "aria-pressed",
            String(isActive)
          );

          button.addEventListener("click", () => {
            selectedCategory = category;

            renderFilters();
            renderDepartments();
          });

          filterContainer.appendChild(button);
        });
      }

      /* ===== 진료과 카드 생성 ===== */

      function renderDepartments() {
        const query = searchInput.value
          .trim()
          .toLocaleLowerCase("ko");

        listContainer.replaceChildren();

        const matched = departments.filter(dept => {
          const categoryMatch =
            selectedCategory === "전체" ||
            dept.category === selectedCategory;

          const searchText = [
            dept.name,
            dept.summary,
            dept.description,
            ...dept.specialties
          ].join(" ").toLocaleLowerCase("ko");

          return categoryMatch &&
            searchText.includes(query);
        });

        emptyState.hidden = matched.length > 0;

        const visibleCategories = [
          ...new Set(matched.map(dept => dept.category))
        ];

        visibleCategories.forEach(category => {
          const section = makeElement(
            "section",
            "department-section"
          );

          section.appendChild(
            makeElement("h2", "", category)
          );

          const grid = makeElement(
            "div",
            "department-grid"
          );

          matched
            .filter(dept => dept.category === category)
            .forEach(dept => {

              const card = makeElement(
                "a",
                "department-card"
              );

              card.href =
                `department-detail.html?id=${encodeURIComponent(dept.id)}`;

              // 픽토그램
              const icon = createDepartmentIcon(
                dept,
                "card"
              );

              // 진료과 이름
              const title = makeElement(
                "strong",
                "",
                dept.name
              );

              card.append(icon, title);
              grid.appendChild(card);
            });

          section.appendChild(grid);
          listContainer.appendChild(section);
        });
      }

      /* ===== 검색 및 초기화 ===== */

      searchInput.addEventListener(
        "input",
        renderDepartments
      );

      if (searchButton) {
        searchButton.addEventListener(
          "click",
          renderDepartments
        );
      }

      if (resetButton) {
        resetButton.addEventListener("click", () => {
          searchInput.value = "";
          selectedCategory = "전체";

          renderFilters();
          renderDepartments();
        });
      }

      renderFilters();
      renderDepartments();
    }
  }


  /* ========================================
     4. 진료과 상세 페이지
     ======================================== */

  const detailContainer =
    document.getElementById("departmentDetail");

  if (detailContainer) {
    const params = new URLSearchParams(
      window.location.search
    );

    const id = params.get("id");

    const dept = departments.find(
      item => item.id === id
    );

    if (!dept) {
      detailContainer.appendChild(
        makeElement(
          "h1",
          "",
          "진료과를 찾을 수 없습니다."
        )
      );

      detailContainer.appendChild(
        makeElement(
          "p",
          "",
          "진료과 목록에서 다시 선택해 주세요."
        )
      );

      return;
    }

    document.title = `${dept.name} | H대학교 병원`;

    const crumbName =
      document.getElementById("breadcrumbDepartment");

    if (crumbName) {
      crumbName.textContent = dept.name;
    }

    /* ===== 상단 진료과 제목 + 픽토그램 ===== */

    const hero = makeElement(
      "div",
      "detail-hero"
    );

    // 왼쪽: 진료과 정보
    const heroCopy = makeElement(
      "div",
      "detail-hero-copy"
    );

    heroCopy.appendChild(
      makeElement(
        "span",
        "eyebrow",
        "MEDICAL DEPARTMENT"
      )
    );

    heroCopy.appendChild(
      makeElement("h1", "", dept.name)
    );

    heroCopy.appendChild(
      makeElement("p", "", dept.summary)
    );

    // 오른쪽: 픽토그램
    const heroIcon = createDepartmentIcon(
      dept,
      "detail"
    );

    hero.append(heroCopy, heroIcon);
    detailContainer.appendChild(hero);


    /* ===== 진료과 소개 ===== */

    const intro = makeElement(
      "section",
      "detail-section"
    );

    intro.appendChild(
      makeElement("h2", "", "진료과 소개")
    );

    intro.appendChild(
      makeElement(
        "p",
        "detail-description",
        dept.description
      )
    );

    detailContainer.appendChild(intro);


    /* ===== 주요 진료 분야 ===== */

    const specialtiesSection = makeElement(
      "section",
      "detail-section"
    );

    specialtiesSection.appendChild(
      makeElement("h2", "", "주요 진료 분야")
    );

    const specialtyList = makeElement(
      "div",
      "specialty-list"
    );

    dept.specialties.forEach(specialty => {
      specialtyList.appendChild(
        makeElement(
          "span",
          "specialty-item",
          specialty
        )
      );
    });

    specialtiesSection.appendChild(specialtyList);
    detailContainer.appendChild(specialtiesSection);

     /* ===== 소속 의료진 ===== */
     
   const doctorsSection = makeElement("section", "detail-section");
   doctorsSection.appendChild(
     makeElement("h2", "", "소속 의료진")
   );
   
   const doctorBox = makeElement("div", "department-doctor-grid");
   
   // 현재 진료과에 소속된 의료진 검색
   const departmentDoctors =
     typeof doctors !== "undefined"
       ? doctors.filter(doctor => doctor.departmentId === dept.id)
       : [];
   
   if (departmentDoctors.length > 0) {
   
     departmentDoctors.forEach(doctor => {
   
       const card = makeElement("a", "department-doctor-card");
   
       card.href =
         `doctor-detail.html?id=${encodeURIComponent(doctor.id)}`;
   
       // 의료진 사진
       const photo = makeElement("div", "department-doctor-photo");
   
       if (doctor.photo) {
         const img = document.createElement("img");
         img.src = doctor.photo;
         img.alt = `${doctor.name} 의료진 사진`;
         img.loading = "lazy";
   
         img.addEventListener("error", () => {
           img.remove();
         });
   
         photo.appendChild(img);
       }
   
       // 의료진 정보
       const info = makeElement("div", "department-doctor-info");
   
       info.appendChild(
         makeElement("strong", "", doctor.name)
       );
   
       info.appendChild(
         makeElement("span", "", doctor.fields.join(", "))
       );
   
       info.appendChild(
         makeElement("span", "department-doctor-more", "상세보기 →")
       );
   
       card.append(photo, info);
       doctorBox.appendChild(card);
   
     });
   
   } else {
   
     doctorBox.appendChild(
       makeElement(
         "p",
         "department-doctor-empty",
         "등록된 의료진이 없습니다."
       )
     );
   
   }
   
   doctorsSection.appendChild(doctorBox);
   
   // 해당 진료과의 의료진 전체보기
   const allDoctorsLink = makeElement(
     "a",
     "outline-button department-doctor-all",
     "의료진 전체보기 →"
   );
   
   allDoctorsLink.href =
     `doctors.html?department=${encodeURIComponent(dept.id)}`;
   
   doctorsSection.appendChild(allDoctorsLink);
   detailContainer.appendChild(doctorsSection);

  }
});

   
