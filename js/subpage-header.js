
/* ============================================
   H대학교 병원 - 세부 페이지 공통 헤더
   상단 메뉴 / 경로 드롭다운 / 준비 중 안내 통합
   ============================================ */

/* ============================================
   1. 메뉴 데이터
   ★ 메뉴 추가/수정/삭제는 이 영역에서!
   ★ 미완성 페이지는 pending: true
   ============================================ */

const subpageMenus = [
  {
    title: "진료안내",
    english: "MEDICAL GUIDE",
    description: "진료에 필요한 정보를 안내합니다.",
    groups: [
      {
        title: "진료과 / 의료진",
        links: [
          { name: "진료과 안내", href: "departments.html" },
          { name: "의료진 찾기", href: "doctors.html" }
        ]
      },
      {
        title: "",
        links: [
          { name: "외래진료 안내", href: "outpatient.html", pending: true },
          { name: "입 · 퇴원 안내", href: "admission.html", pending: true }
        ]
      },
      {
        title: "진료예약 · 조회",
        links: [
          { name: "진료예약", href: "reservation.html", pending: true },
          { name: "진료예약 조회", href: "reservation-check.html", pending: true },
          { name: "진료내역 조회", href: "medical-history.html", pending: true }
        ]
      }
    ]
  },
  {
    title: "이용안내",
    english: "VISITOR GUIDE",
    description: "병원 이용에 필요한 정보를 확인하세요.",
    groups: [
      {
        title: "",
        links: [
          { name: "오시는 길", href: "directions.html", pending: true },
          { name: "원내배치도", href: "floor-guide.html", pending: true },
          { name: "편의시설", href: "facilities.html", pending: true },
          { name: "면회안내", href: "visiting.html", pending: true }
        ]
      }
    ]
  },
  {
    title: "고객참여",
    english: "CUSTOMER SERVICE",
    description: "여러분의 의견에 귀 기울이겠습니다.",
    groups: [
      {
        title: "",
        links: [
          { name: "고객의 소리", href: "feedback.html", pending: true },
          { name: "자주 묻는 질문 (FAQ)", href: "faq.html", pending: true }
        ]
      }
    ]
  },
  {
    title: "병원소식",
    english: "HOSPITAL NEWS",
    description: "H대학교 병원의 새로운 소식을 전합니다.",
    groups: [
      {
        title: "",
        links: [
          { name: "공지사항", href: "notices.html", pending: true },
          { name: "강좌안내", href: "lectures.html", pending: true },
          { name: "언론보도", href: "press.html", pending: true }
        ]
      }
    ]
  },
  {
    title: "병원소개",
    english: "ABOUT H HOSPITAL",
    description: "H대학교 병원을 소개합니다.",
    groups: [
      {
        title: "",
        links: [
          { name: "인사말", href: "greeting.html", pending: true },
          { name: "병원연혁", href: "history.html", pending: true },
          { name: "조직도", href: "organization.html", pending: true }
        ]
      }
    ]
  }
];

/* ============================================
   2. 공통 초기화
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("subpageHeader");
  const desktopQuery = window.matchMedia("(min-width: 901px)");

  let closeTimer = null;
  let toastTimer = null;

  /* ============================================
     3. 공통 토스트 안내
     ============================================ */

  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  function showPendingToast() {
    toast.textContent = "해당 페이지는 현재 준비 중입니다.";
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  /* ============================================
     4. 공통 헤더 생성
     ============================================ */

  let header = null;
  let nav = null;
  let menuButton = null;
  let items = [];

  if (mount) {
    header = document.createElement("header");
    header.className = "sub-header shared-header";

    const inner = document.createElement("div");
    inner.className = "sub-header-inner";

    // 로고
    const logo = document.createElement("a");
    logo.href = "../index.html";
    logo.className = "sub-logo";
    logo.innerHTML = `
      <span class="logo-mark">H<em>+</em></span>
      <span class="logo-text">
        <strong>H대학교 병원</strong>
        <small>H UNIVERSITY HOSPITAL</small>
      </span>
    `;

    // 상단 내비게이션
    nav = document.createElement("nav");
    nav.className = "sub-nav shared-nav";
    nav.id = "sharedSubNav";
    nav.setAttribute("aria-label", "주 메뉴");

    subpageMenus.forEach((menu, index) => {
      const item = document.createElement("div");
      item.className = "shared-nav-item";

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "shared-nav-trigger";
      trigger.textContent = menu.title;
      trigger.setAttribute("aria-expanded", "false");
      trigger.setAttribute(
        "aria-controls",
        `sub-dropdown-${index}`
      );

      const dropdown = document.createElement("div");
      dropdown.className = "shared-dropdown";
      dropdown.id = `sub-dropdown-${index}`;

      const dropdownInner = document.createElement("div");
      dropdownInner.className = "shared-dropdown-inner";

      const heading = document.createElement("div");
      heading.className = "shared-dropdown-heading";

      const english = document.createElement("span");
      english.textContent = menu.english;

      const title = document.createElement("h2");
      title.textContent = menu.title;

      const description = document.createElement("p");
      description.textContent = menu.description;

      heading.append(english, title, description);

      const linksArea = document.createElement("div");
      linksArea.className = "shared-dropdown-links";

      menu.groups.forEach(group => {
        const groupElement = document.createElement("div");
        groupElement.className = "shared-dropdown-group";

        if (group.title) {
          const groupTitle = document.createElement("span");
          groupTitle.className = "shared-group-title";
          groupTitle.textContent = group.title;
          groupElement.appendChild(groupTitle);
        }

        group.links.forEach(link => {
          const anchor = document.createElement("a");
          anchor.href = link.href;
          anchor.textContent = link.name;

          if (link.pending) {
            anchor.dataset.pending = "true";
          }

          groupElement.appendChild(anchor);
        });

        linksArea.appendChild(groupElement);
      });

      dropdownInner.append(heading, linksArea);
      dropdown.appendChild(dropdownInner);
      item.append(trigger, dropdown);
      nav.appendChild(item);
    });

    // 모바일 햄버거 버튼
    menuButton = document.createElement("button");
    menuButton.type = "button";
    menuButton.className = "shared-menu-toggle";
    menuButton.setAttribute("aria-label", "전체 메뉴 열기");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-controls", "sharedSubNav");

    const bars = document.createElement("span");
    bars.className = "shared-menu-bars";
    bars.setAttribute("aria-hidden", "true");
    menuButton.appendChild(bars);

    inner.append(logo, nav, menuButton);
    header.appendChild(inner);
    mount.appendChild(header);

    items = [...nav.querySelectorAll(".shared-nav-item")];
  }

  /* ============================================
     5. 상단 메뉴 드롭다운
     ============================================ */

  function closeDropdowns() {
    clearTimeout(closeTimer);

    items.forEach(item => {
      item.classList.remove("open");

      const trigger = item.querySelector(".shared-nav-trigger");
      trigger.setAttribute("aria-expanded", "false");
    });
  }

  function openDropdown(item) {
    clearTimeout(closeTimer);
    closeCrumbs();

    items.forEach(other => {
      const active = other === item;
      other.classList.toggle("open", active);

      const trigger = other.querySelector(".shared-nav-trigger");
      trigger.setAttribute("aria-expanded", String(active));
    });
  }

  function closeMobileMenu() {
    if (!nav || !menuButton) return;

    nav.classList.remove("mobile-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "전체 메뉴 열기");
    closeDropdowns();
  }

  items.forEach(item => {
    const trigger = item.querySelector(".shared-nav-trigger");

    // PC 마우스 호버
    item.addEventListener("mouseenter", () => {
      if (desktopQuery.matches) {
        openDropdown(item);
      }
    });

    item.addEventListener("mouseleave", () => {
      if (!desktopQuery.matches) return;

      clearTimeout(closeTimer);
      closeTimer = setTimeout(closeDropdowns, 150);
    });

    // PC 클릭 / 모바일 터치
    trigger.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");

      if (wasOpen) {
        closeDropdowns();
      } else {
        openDropdown(item);
      }
    });
  });

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      const willOpen = !nav.classList.contains("mobile-open");

      closeDropdowns();
      closeCrumbs();

      nav.classList.toggle("mobile-open", willOpen);

      menuButton.setAttribute("aria-expanded", String(willOpen));
      menuButton.setAttribute(
        "aria-label",
        willOpen ? "전체 메뉴 닫기" : "전체 메뉴 열기"
      );
    });
  }

  /* ============================================
     6. 페이지 경로 드롭다운
     ★ 모든 세부 페이지에서 공통 사용
     ★ HTML의 .crumb 구조는 그대로 유지
     ============================================ */

  const crumbs = [...document.querySelectorAll(".breadcrumb-bar .crumb")];

  function closeCrumbs() {
    crumbs.forEach(crumb => {
      crumb.classList.remove("open");

      const button = crumb.querySelector(".crumb-button");
      if (button) {
        button.setAttribute("aria-expanded", "false");
      }
    });
  }

  crumbs.forEach(crumb => {
    const button = crumb.querySelector(".crumb-button");
    if (!button) return;

    button.addEventListener("click", () => {
      const wasOpen = crumb.classList.contains("open");

      closeCrumbs();
      closeDropdowns();

      if (!wasOpen) {
        crumb.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ============================================
     7. 공통 외부 클릭 / ESC / 포커스 처리
     ============================================ */

  document.addEventListener("pointerdown", event => {
    const target = event.target;

    // 상단 메뉴 밖 클릭
    if (!header || !header.contains(target)) {
      closeDropdowns();

      if (!desktopQuery.matches) {
        closeMobileMenu();
      }
    }

    // 페이지 경로 드롭다운 밖 클릭
    if (!target.closest(".breadcrumb-bar .crumb")) {
      closeCrumbs();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    const activeElement = document.activeElement;
    const focusedCrumb = activeElement?.closest(".crumb");
    const focusedHeader = header?.contains(activeElement);

    closeCrumbs();
    closeMobileMenu();

    if (focusedCrumb) {
      focusedCrumb.querySelector(".crumb-button")?.focus();
    } else if (focusedHeader && menuButton) {
      menuButton.focus();
    }
  });

  if (header) {
    header.addEventListener("focusout", event => {
      if (!header.contains(event.relatedTarget)) {
        closeDropdowns();
      }
    });
  }

  // 경로 메뉴에서 Tab으로 벗어나면 닫기
  crumbs.forEach(crumb => {
    crumb.addEventListener("focusout", event => {
      if (!crumb.contains(event.relatedTarget)) {
        crumb.classList.remove("open");
        crumb.querySelector(".crumb-button")
          ?.setAttribute("aria-expanded", "false");
      }
    });
  });

  // PC/모바일 모드 변경 시 상태 초기화
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", () => {
      closeMobileMenu();
      closeCrumbs();
    });
  }

  /* ============================================
     8. 준비 중 링크 공통 처리
     ★ 상단 메뉴 / 경로 메뉴 / 본문 링크
     ★ 별도 JS에서 중복 등록하지 말 것
     ============================================ */

  document.addEventListener("click", event => {
    const link = event.target.closest("a[data-pending]");
    if (!link) return;

    event.preventDefault();

    closeDropdowns();
    closeCrumbs();

    if (!desktopQuery.matches) {
      closeMobileMenu();
    }

    showPendingToast();
  });
});
