
document.addEventListener("DOMContentLoaded", () => {
  /* ===== MAIN NAVIGATION ===== */
  const nav = document.getElementById("mainNav");
  const menuToggle = document.getElementById("menuToggle");
  const navItems = [...document.querySelectorAll(".nav-item")];
  const mobileQuery = window.matchMedia("(max-width:800px)");
  let closeTimer = null;

  function closeDropdowns() {
    clearTimeout(closeTimer);
    navItems.forEach(item => {
      item.classList.remove("open");
      item.querySelector(".nav-trigger")
        .setAttribute("aria-expanded", "false");
    });
  }

  function openDropdown(item) {
    clearTimeout(closeTimer);
    navItems.forEach(other => {
      const active = other === item;
      other.classList.toggle("open", active);
      other.querySelector(".nav-trigger")
        .setAttribute("aria-expanded", String(active));
    });
  }

  navItems.forEach(item => {
    const trigger = item.querySelector(".nav-trigger");

    // PC: 마우스를 올리면 드롭다운 표시
    item.addEventListener("mouseenter", () => {
      if (!mobileQuery.matches) openDropdown(item);
    });

    // PC: 메뉴에서 마우스가 빠져나가면 닫기
    item.addEventListener("mouseleave", () => {
      if (!mobileQuery.matches) {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(closeDropdowns, 180);
      }
    });

    // PC 키보드 / 모바일 터치
    trigger.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      if (wasOpen) closeDropdowns();
      else openDropdown(item);
    });

    // 키보드 접근
    item.addEventListener("focusin", () => {
      if (!mobileQuery.matches) openDropdown(item);
    });
  });

  // 메뉴 바깥을 누르면 닫기
  document.addEventListener("pointerdown", event => {
    if (!nav.contains(event.target) &&
        !menuToggle.contains(event.target)) {
      closeDropdowns();
    }
  });

  // 모바일 햄버거 메뉴
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("mobile-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      open ? "전체 메뉴 닫기" : "전체 메뉴 열기"
    );
    if (!open) closeDropdowns();
  });

  // 화면 크기 변경 시 초기화
  mobileQuery.addEventListener("change", () => {
    closeDropdowns();
    nav.classList.remove("mobile-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });

  // PC에서 메뉴 영역을 완전히 벗어나면 닫기
  nav.addEventListener("mouseleave", () => {
    if (!mobileQuery.matches) {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(closeDropdowns, 180);
    }
  });

  /* ===== MAIN HERO SLIDER ===== */
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".slide-dot")];
  const counter = document.getElementById("slideCounter");
  const prev = document.getElementById("prevSlide");
  const next = document.getElementById("nextSlide");
  const pause = document.getElementById("pauseSlide");

  let current = 0;
  let playing = !window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  let slideTimer = null;
  const INTERVAL = 5000;

  function showSlide(index) {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle("active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.querySelectorAll("a").forEach(link => {
        link.tabIndex = active ? 0 : -1;
      });
    });

    dots.forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle("active", active);
      dot.setAttribute("aria-current", String(active));
    });

    if (counter) {
      counter.textContent =
        String(current + 1).padStart(2, "0") +
        " / " + String(slides.length).padStart(2, "0");
    }
  }

  function startSlider() {
    clearInterval(slideTimer);
    slideTimer = null;
    if (playing && slides.length > 1) {
      slideTimer = setInterval(() => {
        showSlide(current + 1);
      }, INTERVAL);
    }
  }

  function moveSlide(direction) {
    showSlide(current + direction);
    startSlider();
  }

  prev?.addEventListener("click", () => moveSlide(-1));
  next?.addEventListener("click", () => moveSlide(1));

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.slide));
      startSlider();
    });
  });

  function updatePause() {
    if (!pause) return;
    pause.textContent = playing ? "Ⅱ" : "▶";
    pause.setAttribute(
      "aria-label",
      playing ? "슬라이드 일시정지" : "슬라이드 재생"
    );
  }

  pause?.addEventListener("click", () => {
    playing = !playing;
    updatePause();
    startSlider();
  });

  showSlide(0);
  updatePause();
  startSlider();

  /* ===== NEWS TABS ===== */
  const newsTabs = [...document.querySelectorAll(".news-tab")];
  const newsPanels = [...document.querySelectorAll(".news-panel")];

  newsTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      newsTabs.forEach(t => {
        const active = t === tab;
        t.classList.toggle("active", active);
        t.setAttribute("aria-selected", String(active));
      });
      newsPanels.forEach(panel => {
        const active = panel.id === target;
        panel.classList.toggle("active", active);
        panel.hidden = !active;
      });
    });
  });

  
/* ===== SEARCH ===== */
const searchToggle = document.getElementById("searchToggle");
const searchPanel = document.getElementById("searchPanel");

function closeSearch() {
  if (!searchPanel) return;

  searchPanel.hidden = true;

  searchToggle?.setAttribute("aria-expanded", "false");
  searchToggle?.setAttribute("aria-label", "검색 열기");
}

function openSearch() {
  if (!searchPanel) return;

  // 검색창을 열 때 기존 드롭다운 닫기
  closeDropdowns();

  // 모바일 메뉴도 닫기
  nav.classList.remove("mobile-open");
  menuToggle.setAttribute("aria-expanded", "false");

  searchPanel.hidden = false;

  searchToggle?.setAttribute("aria-expanded", "true");
  searchToggle?.setAttribute("aria-label", "검색 닫기");

  searchPanel.querySelector("input")?.focus();
}

// 돋보기 클릭 시 열기 / 닫기
searchToggle?.addEventListener("click", () => {
  if (searchPanel.hidden) {
    openSearch();
  } else {
    closeSearch();
  }
});

// 검색창 바깥 영역 클릭 시 닫기
document.addEventListener("pointerdown", (event) => {
  if (!searchPanel || searchPanel.hidden) return;

  const clickedSearchPanel =
    searchPanel.contains(event.target);

  const clickedSearchButton =
    searchToggle.contains(event.target);

  if (!clickedSearchPanel && !clickedSearchButton) {
    closeSearch();
  }
});


  /* ===== TOAST & DEMO LINKS ===== */
  const toast = document.getElementById("toast");
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2700);
  }

  // 세부 페이지가 아직 없는 링크만 임시 안내
  document.querySelectorAll("a[data-pending]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      showToast("해당 세부 페이지는 현재 준비 중입니다.");
      if (mobileQuery.matches) {
        closeDropdowns();
        nav.classList.remove("mobile-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.querySelectorAll(".demo-link").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      showToast("해당 콘텐츠는 현재 준비 중입니다.");
    });
  });

  document.querySelectorAll(".demo-form").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const input = form.querySelector("input");
      if (!input?.value.trim()) {
        showToast("검색어를 입력해 주세요.");
        input?.focus();
      } else {
        showToast("검색 기능은 현재 시연용입니다.");
      }
    });
  });

  /* ===== ESC ===== */
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    closeDropdowns();
    nav.classList.remove("mobile-open");
    menuToggle.setAttribute("aria-expanded", "false");
    if (searchPanel) searchPanel.hidden = true;
    searchToggle?.setAttribute("aria-expanded", "false");
  });
});
      
