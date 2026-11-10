
/* ==========================================
   H대학교 병원 홈페이지 JavaScript
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  // ========== 메인 슬라이드 ==========

  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".slide-dot")];

  const currentSlideLabel = document.getElementById("currentSlide");
  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");
  const pauseButton = document.getElementById("pauseSlide");

  let currentIndex = 0;
  let slideTimer = null;
  let isPlaying = true;

  // 자동 전환 간격: 5초
  const SLIDE_INTERVAL = 5000;

  function showSlide(index) {
    if (slides.length === 0) return;

    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      const active = i === currentIndex;
      slide.classList.toggle("active", active);
      slide.setAttribute("aria-hidden", String(!active));

      // 보이지 않는 슬라이드의 링크는 탭 이동에서 제외
      slide.querySelectorAll("a").forEach(link => {
        link.tabIndex = active ? 0 : -1;
      });
    });

    dots.forEach((dot, i) => {
      const active = i === currentIndex;
      dot.classList.toggle("active", active);
      dot.setAttribute("aria-current", active ? "true" : "false");
    });

    if (currentSlideLabel) {
      currentSlideLabel.textContent =
        String(currentIndex + 1).padStart(2, "0");
    }
  }

  function stopAutoSlide() {
    if (slideTimer !== null) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  function startAutoSlide() {
    stopAutoSlide();

    if (!isPlaying || slides.length <= 1) return;

    slideTimer = setInterval(() => {
      showSlide(currentIndex + 1);
    }, SLIDE_INTERVAL);
  }

  function moveSlide(direction) {
    showSlide(currentIndex + direction);
    startAutoSlide();
  }

  prevButton?.addEventListener("click", () => moveSlide(-1));
  nextButton?.addEventListener("click", () => moveSlide(1));

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.slide);

      if (!Number.isNaN(index)) {
        showSlide(index);
        startAutoSlide();
      }
    });
  });

  pauseButton?.addEventListener("click", () => {
    isPlaying = !isPlaying;

    pauseButton.textContent = isPlaying ? "Ⅱ" : "▶";
    pauseButton.setAttribute(
      "aria-label",
      isPlaying ? "슬라이드 일시정지" : "슬라이드 재생"
    );

    if (isPlaying) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
  });

  showSlide(0);

  // 사용자가 움직임 최소화를 설정한 경우 자동 재생하지 않음
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    isPlaying = false;
    if (pauseButton) {
      pauseButton.textContent = "▶";
      pauseButton.setAttribute("aria-label", "슬라이드 재생");
    }
  } else {
    startAutoSlide();
  }

  // ========== 모바일 메뉴 ==========

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle?.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "메뉴 닫기" : "메뉴 열기"
    );
  });

  mainNav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
      menuToggle?.setAttribute("aria-label", "메뉴 열기");
    });
  });

  // ========== 검색창 열기 / 닫기 ==========

  const searchToggle = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  searchToggle?.addEventListener("click", () => {
    const willOpen = searchPanel.hidden;

    searchPanel.hidden = !willOpen;

    searchToggle.setAttribute(
      "aria-expanded",
      String(willOpen)
    );

    searchToggle.setAttribute(
      "aria-label",
      willOpen ? "검색 닫기" : "검색 열기"
    );

    if (willOpen) {
      searchInput?.focus();
    }
  });

  searchForm?.addEventListener("submit", event => {
    event.preventDefault();

    const keyword = searchInput.value.trim();

    if (!keyword) {
      showToast("검색어를 입력해 주세요.");
      searchInput.focus();
      return;
    }

    showToast("현재 검색 기능은 시연용입니다.");
  });

  // ========== 시연용 링크 안내 ==========

  document.querySelectorAll(".demo-link").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      showToast("해당 페이지는 아직 제작되지 않았습니다.");
    });
  });

  // ========== 알림 메시지 ==========

  const toast = document.getElementById("toast");
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    if (toastTimer !== null) {
      clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  // ========== ESC 키로 메뉴 / 검색창 닫기 ==========

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    if (searchPanel && !searchPanel.hidden) {
      searchPanel.hidden = true;
      searchToggle?.setAttribute("aria-expanded", "false");
      searchToggle?.setAttribute("aria-label", "검색 열기");
    }

    if (mainNav?.classList.contains("open")) {
      mainNav.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
      menuToggle?.setAttribute("aria-label", "메뉴 열기");
    }
  });

});
