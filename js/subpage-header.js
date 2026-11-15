
/* ============================================
   H대학교 병원 - 세부 페이지 공통 헤더
   ============================================ */

/* ============================================
   1. 메뉴 데이터
   ★ 앞으로 메뉴를 추가하거나 삭제할 때 수정
   ★ 아직 없는 페이지는 pending: true
   ★ 실제 페이지가 완성되면 pending 삭제
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
          { name: "의료진 찾기", href: "doctors.html", pending: true }
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
   2. 공통 헤더 생성
   ★ 아래 코드는 일반적인 메뉴 추가 시 수정 불필요
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("subpageHeader");
  if (!mount) return;

  const header = document.createElement("header");
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
  const nav = document.createElement("nav");
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
    trigger.setAttribute("aria-controls", `sub-dropdown-${index}`);

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
  const menuButton = document.createElement("button");
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

  /* ============================================
     3. 드롭다운 동작
     ============================================ */

  const items = [...nav.querySelectorAll(".shared-nav-item")];
  const desktopQuery = window.matchMedia("(min-width: 901px)");

  let closeTimer = null;

  function closeDropdowns() {
    clearTimeout(closeTimer);

    items.forEach(item => {
      item.classList.remove("open");
      item.querySelector(".shared-nav-trigger")
        .setAttribute("aria-expanded", "false");
    });
  }

  function openDropdown(item) {
    clearTimeout(closeTimer);

    items.forEach(other => {
      const active = other === item;
      other.classList.toggle("open", active);

      other.querySelector(".shared-nav-trigger")
        .setAttribute("aria-expanded", String(active));
    });
  }

  function closeMobileMenu() {
    nav.classList.remove("mobile-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "전체 메뉴 열기");
    closeDropdowns();
  }

  // PC: 마우스 호버 / 클릭
  // 모바일: 버튼 터치
  items.forEach(item => {
    const trigger = item.querySelector(".shared-nav-trigger");

    item.addEventListener("mouseenter", () => {
      if (desktopQuery.matches) openDropdown(item);
    });

    item.addEventListener("mouseleave", () => {
      if (!desktopQuery.matches) return;

      clearTimeout(closeTimer);
      closeTimer = setTimeout(closeDropdowns, 150);
    });

    trigger.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");

      if (wasOpen) {
        closeDropdowns();
      } else {
        openDropdown(item);
      }
    });

    // 키보드로 메뉴에 진입할 때도 열기
    trigger.addEventListener("focus", () => {
      if (desktopQuery.matches) openDropdown(item);
    });
  });

  // 모바일 메뉴 열기 / 닫기
  menuButton.addEventListener("click", () => {
    const willOpen = !nav.classList.contains("mobile-open");

    closeDropdowns();
    nav.classList.toggle("mobile-open", willOpen);

    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.setAttribute(
      "aria-label",
      willOpen ? "전체 메뉴 닫기" : "전체 메뉴 열기"
    );
  });

  // 메뉴 밖 클릭 시 닫기
  document.addEventListener("pointerdown", event => {
    if (!header.contains(event.target)) {
      closeDropdowns();
      if (!desktopQuery.matches) closeMobileMenu();
    }
  });

  // ESC 키로 닫기
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    const wasInside = header.contains(document.activeElement);
    closeDropdowns();
    closeMobileMenu();

    if (wasInside) menuButton.focus();
  });

  // 키보드 포커스가 헤더 밖으로 이동하면 닫기
  header.addEventListener("focusout", event => {
    if (!header.contains(event.relatedTarget)) {
      closeDropdowns();
    }
  });

  // PC / 모바일 전환 시 상태 초기화
  window.addEventListener("resize", () => {
    if (desktopQuery.matches) {
      closeMobileMenu();
    }
  });

  /* ============================================
     4. 준비 중인 페이지 안내
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

  let toastTimer;

  // 기존 departments.js도 준비 중 링크를 처리하므로
  // 중복 알림을 방지하기 위해 여기서는 헤더 안만 처리
  header.querySelectorAll("a[data-pending]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      event.stopImmediatePropagation();

      closeDropdowns();
      if (!desktopQuery.matches) closeMobileMenu();

      toast.textContent = "해당 페이지는 현재 준비 중입니다.";
      toast.classList.add("show");

      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove("show");
      }, 2500);
    });
  });
});
    
