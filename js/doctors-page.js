
/* ==========================================
   H대학교 병원 - 의료진 페이지 동작
   doctors-data.js와 departments.js 필요
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const listRoot = document.getElementById("doctorList");
  const detailRoot = document.getElementById("doctorDetail");

  if (!listRoot && !detailRoot) return;

  const weekdays = ["월", "화", "수", "목", "금"];

  /* ===== 공통 함수 ===== */

  function el(tag, className = "", text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function getDepartment(doctor) {
    return departments.find(
      dept => dept.id === doctor.departmentId
    );
  }

  function departmentName(doctor) {
    return getDepartment(doctor)?.name || "진료과 미지정";
  }

  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }

  /* ===== 공통 경로 드롭다운 ===== */

  

  /* ===== 의료진 사진 ===== */

  function createPhoto(doctor) {
    const frame = el("div", "doctor-photo");

    if (doctor.photo) {
      const img = document.createElement("img");
      img.src = doctor.photo;
      img.alt = `${doctor.name} 의료진 사진`;
      img.loading = "lazy";

      img.addEventListener("error", () => {
        img.remove();
        frame.classList.add("doctor-photo--empty");
      });

      frame.appendChild(img);
    } else {
      frame.classList.add("doctor-photo--empty");
    }

    return frame;
  }

  /* ===== 클리닉 목록 ===== */

  function createClinics(doctor) {
    const wrap = el("div", "doctor-clinics");

    // ★ clinics: []이면 클리닉 항목 전체를 숨김
    if (!doctor.clinics?.length) return null;

    doctor.clinics.forEach(clinic => {
      let item;

      if (clinic.url) {
        item = el("a", "doctor-clinic", clinic.name);
        item.href = clinic.url;
      } else {
        // 링크가 없으면 클릭 불가능한 일반 배지
        item = el(
          "span",
          "doctor-clinic doctor-clinic--static",
          clinic.name
        );
      }

      wrap.appendChild(item);
    });

    return wrap;
  }

  /* ===== 진료시간표 ===== */

  function createSchedule(doctor) {
    const table = el("table", "doctor-schedule");
    table.setAttribute(
      "aria-label",
      `${doctor.name} 의료진 외래 진료시간표`
    );

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");

    headRow.appendChild(el("th", "", "구분"));

    weekdays.forEach(day => {
      headRow.appendChild(el("th", "", day));
    });

    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    [
      ["오전", doctor.schedule?.am || []],
      ["오후", doctor.schedule?.pm || []]
    ].forEach(([label, days]) => {
      const row = document.createElement("tr");
      row.appendChild(el("th", "", label));

      weekdays.forEach((day, index) => {
        const cell = document.createElement("td");

        if (days.includes(index)) {
          const dot = el("span", "schedule-dot", "●");
          dot.setAttribute("aria-label", `${day} ${label} 진료`);
          cell.appendChild(dot);
        } else {
          cell.textContent = "–";
          cell.classList.add("schedule-off");
        }

        row.appendChild(cell);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    return table;
  }

  /* ===== 예약 버튼 ===== */

  function createReservation(doctor) {
    if (!doctor.reservable) {
      const button = el(
        "button",
        "doctor-reserve doctor-reserve--disabled",
        "예약불가"
      );

      button.type = "button";
      button.disabled = true;
      return button;
    }

    const button = el(
      "button",
      "doctor-reserve",
      "진료예약"
    );

    button.type = "button";

    button.addEventListener("click", () => {
      // ★ 실제 예약 페이지 완성 시 이 부분 수정
      showToast("진료예약 페이지는 현재 준비 중입니다.");
    });

    return button;
  }

  /* ===== 의료진 기본 정보 ===== */

  function createProfile(doctor, isDetail = false) {
    const wrap = el(
      "div",
      isDetail
        ? "doctor-profile doctor-profile--detail"
        : "doctor-profile"
    );

    wrap.appendChild(createPhoto(doctor));

    const info = el("div", "doctor-profile-info");

    const heading = el("div", "doctor-profile-heading");

    heading.appendChild(
      el("h2", "", doctor.name)
    );

    heading.appendChild(
      el("span", "doctor-department-name", departmentName(doctor))
    );

    info.appendChild(heading);

    const fields = el("div", "doctor-info-row");
    fields.appendChild(el("h3", "", "진료분야"));
    fields.appendChild(
      el("p", "", doctor.fields.join(", "))
    );
    info.appendChild(fields);

    // ★ 클리닉이 없는 경우 제목도 생성하지 않음
    const clinics = createClinics(doctor);

    if (clinics) {
      const clinicRow = el("div", "doctor-info-row");
      clinicRow.appendChild(el("h3", "", "클리닉"));
      clinicRow.appendChild(clinics);
      info.appendChild(clinicRow);
    }

    // ★ 진료 특이사항: 제목은 항상 표시
    const notes = el("div", "doctor-info-row");
    notes.appendChild(el("h3", "", "진료 특이사항"));

    if (doctor.specialNotes) {
      notes.appendChild(
        el("p", "", doctor.specialNotes)
      );
    } else {
      notes.classList.add("doctor-info-row--empty");
    }

    info.appendChild(notes);
    wrap.appendChild(info);

    return wrap;
  }

  /* ===== 의료진 카드 ===== */

  function createDoctorCard(doctor) {
    const card = el("article", "doctor-card");

    card.appendChild(createProfile(doctor));

    const scheduleArea = el(
      "div",
      "doctor-card-schedule"
    );

    scheduleArea.appendChild(
      el("h3", "", "외래 진료시간")
    );

    scheduleArea.appendChild(
      createSchedule(doctor)
    );

    card.appendChild(scheduleArea);

    const actions = el("div", "doctor-actions");

    actions.appendChild(
      createReservation(doctor)
    );

    const detailLink = el(
      "a",
      "doctor-detail-button",
      "상세보기"
    );

    detailLink.href =
      `doctor-detail.html?id=${encodeURIComponent(doctor.id)}`;

    actions.appendChild(detailLink);
    card.appendChild(actions);

    return card;
  }

  /* ========================================
     의료진 찾기 페이지
     ======================================== */

  if (listRoot) {
    const select = document.getElementById(
      "doctorDepartment"
    );

    const search = document.getElementById(
      "doctorSearch"
    );

    const count = document.getElementById(
      "doctorResultCount"
    );

    const empty = document.getElementById(
      "doctorEmpty"
    );

    const searchButton = document.getElementById(
      "doctorSearchButton"
    );

    const resetButton = document.getElementById(
      "doctorResetButton"
    );

    // 진료과 옵션 자동 생성
    departments.forEach(dept => {
      const option = document.createElement("option");
      option.value = dept.id;
      option.textContent = dept.name;
      select.appendChild(option);
    });

    // 진료과 상세 페이지에서 넘어온 경우 자동 선택
    const params = new URLSearchParams(
      window.location.search
    );

    const requestedDepartment = params.get("department");

    if (
      requestedDepartment &&
      departments.some(d => d.id === requestedDepartment)
    ) {
      select.value = requestedDepartment;
    }

    function renderDoctors() {
      const keyword = search.value
        .trim()
        .toLocaleLowerCase("ko");

      const departmentId = select.value;

      const matched = doctors.filter(doctor => {
        const departmentMatch =
          !departmentId ||
          doctor.departmentId === departmentId;

        const searchableText = [
          doctor.name,
          departmentName(doctor),
          ...doctor.fields,
          ...(doctor.clinics || []).map(c => c.name)
        ].join(" ").toLocaleLowerCase("ko");

        return departmentMatch &&
          searchableText.includes(keyword);
      });

      listRoot.replaceChildren();

      matched.forEach(doctor => {
        listRoot.appendChild(
          createDoctorCard(doctor)
        );
      });

      count.textContent = `총 ${matched.length}명`;
      empty.hidden = matched.length > 0;
    }

    select.addEventListener("change", renderDoctors);
    search.addEventListener("input", renderDoctors);
    searchButton.addEventListener("click", renderDoctors);

    resetButton.addEventListener("click", () => {
      select.value = "";
      search.value = "";
      renderDoctors();
    });

    renderDoctors();
  }

  /* ========================================
     의료진 상세 페이지
     ======================================== */

  if (detailRoot) {
    const params = new URLSearchParams(
      window.location.search
    );

    const doctor = doctors.find(
      item => item.id === params.get("id")
    );

    if (!doctor) {
      detailRoot.appendChild(
        el("h1", "", "의료진을 찾을 수 없습니다.")
      );
      return;
    }

    document.title =
      `${doctor.name} | 의료진 소개 | H대학교 병원`;

    const breadcrumb = document.getElementById(
      "doctorBreadcrumb"
    );

    if (breadcrumb) breadcrumb.textContent = doctor.name;

    const title = el("div", "doctor-detail-title");
    title.appendChild(
      el("span", "eyebrow", "MEDICAL STAFF")
    );
    title.appendChild(
      el("h1", "", `${doctor.name} 의료진`)
    );

    detailRoot.appendChild(title);
    detailRoot.appendChild(
      createProfile(doctor, true)
    );

    const scheduleSection = el(
      "section",
      "doctor-detail-schedule"
    );

    scheduleSection.appendChild(
      el("h2", "", "외래 진료일정")
    );

    scheduleSection.appendChild(
      createSchedule(doctor)
    );

    scheduleSection.appendChild(
      el(
        "p",
        "doctor-schedule-note",
        "※ 표시된 진료일정은 창작용 예시이며 실제 진료정보가 아닙니다."
      )
    );

    detailRoot.appendChild(scheduleSection);

    const actions = el("div", "doctor-actions");
    actions.appendChild(createReservation(doctor));

    const backLink = el(
      "a",
      "doctor-detail-button",
      "의료진 목록보기"
    );

    backLink.href =
      `doctors.html?department=${encodeURIComponent(doctor.departmentId)}`;

    actions.appendChild(backLink);
    detailRoot.appendChild(actions);

    /* ===== 상세 정보 탭 ===== */

    const tabs = [
      {
        key: "career",
        label: "학력 및 경력 / 학회활동"
      },
      {
        key: "papers",
        label: "논문(연구실적)"
      },
      {
        key: "news",
        label: "건강뉴스"
      }
    ];

    const tabSection = el("section", "doctor-tabs-section");
    const tabBar = el("div", "doctor-tabs");
    const tabContent = el("div", "doctor-tab-content");

    tabBar.setAttribute("role", "tablist");

    function activateTab(key) {
      const tab = tabs.find(item => item.key === key);
      const entries = doctor[key] || [];

      [...tabBar.children].forEach(button => {
        const active = button.dataset.tab === key;
        button.classList.toggle("active", active);
        button.setAttribute("aria-selected", String(active));
        button.tabIndex = active ? 0 : -1;
      });

      tabContent.replaceChildren();

      if (!entries.length) {
        tabContent.appendChild(
          el(
            "p",
            "doctor-tab-empty",
            "등록된 정보가 없습니다."
          )
        );
        return;
      }

      const list = el("ul", "doctor-tab-list");

      entries.forEach(entry => {
        const li = document.createElement("li");

        // 문자열 또는 {title, url} 객체 지원
        if (typeof entry === "string") {
          li.textContent = entry;
        } else if (entry?.url) {
          const link = el("a", "", entry.title);
          link.href = entry.url;
          li.appendChild(link);
        } else {
          li.textContent = entry?.title || "";
        }

        list.appendChild(li);
      });

      tabContent.appendChild(list);
    }

    tabs.forEach(tab => {
      const button = el(
        "button",
        "doctor-tab",
        tab.label
      );

      button.type = "button";
      button.dataset.tab = tab.key;
      button.setAttribute("role", "tab");

      button.addEventListener("click", () => {
        activateTab(tab.key);
      });

      tabBar.appendChild(button);
    });

    tabSection.append(tabBar, tabContent);
    detailRoot.appendChild(tabSection);

    activateTab("career");
  }
});
    
