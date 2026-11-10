
/* ========================================
   H UNIVERSITY HOSPITAL v2
   MAIN JAVASCRIPT
======================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ==============================
     1. 메인 배너 슬라이드
  ============================== */

  const slides = Array.from(
    document.querySelectorAll(".hero-slide")
  );

  const dots = Array.from(
    document.querySelectorAll(".slide-dot")
  );

  const slideCounter = document.getElementById("slideCounter");
  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");
  const pauseButton = document.getElementById("pauseSlide");

  let currentSlide = 0;
  let slideTimer = null;
  let isPlaying = true;

  // ★ 자동 전환 간격: 5000ms = 5초
  const SLIDE_INTERVAL = 5000;

  function showSlide(index) {
    if (slides.length === 0) return;

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      const active = i === currentSlide;

      slide.classList.toggle("active", active);
      slide.setAttribute("aria-hidden", String(!active));

      // 숨겨진 슬라이드 링크는 키보드 탭 이동에서 제외
      slide.querySelectorAll("a").forEach(link => {
        link.tabIndex = active ? 0 : -1;
      });
    });

    dots.forEach((dot, i) => {
      const active = i === currentSlide;

      dot.classList.toggle("active", active);
      dot.setAttribute(
        "aria-current",
        active ? "true" : "false"
      );
    });

    if (slideCounter) {
      const current = String(currentSlide + 1).padStart(2, "0");
      const total = String(slides.length).padStart(2, "0");

      slideCounter.textContent = `${current} / ${total}`;
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
      showSlide(currentSlide + 1);
    }, SLIDE_INTERVAL);
  }

  function moveSlide(direction) {
    showSlide(currentSlide + direction);
    startAutoSlide();
  }

  // 이전 / 다음 버튼
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      moveSlide(-1);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      moveSlide(1);
    });
  }

  // 하단 슬라이드 인디케이터
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.slide);

      if (Number.isInteger(index)) {
        showSlide(index);
        startAutoSlide();
      }
    });
  });

  function updatePauseButton() {
    if (!pauseButton) return;

    pauseButton.textContent = isPlaying ? "Ⅱ" : "▶";
    pauseButton.setAttribute(
      "aria-label",
      isPlaying ? "슬라이드 일시정지" : "슬라이드 재생"
    );
  }

  // 재생 / 일시정지
  if (pauseButton) {
    pauseButton.addEventListener("click", () => {
      isPlaying = !isPlaying;
      updatePauseButton();
      startAutoSlide();
    });
  }

  // 움직임 최소화 설정 존중
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    isPlaying = false;
  }

  // 초기 실행
  showSlide(0);
  updatePauseButton();
  startAutoSlide();


  /* ==============================
     2. 병원 소식 탭 전환
  ============================== */

  const newsTabs = document.querySelectorAll(".news-tab");
  const newsPanels = document.querySelectorAll(".news-panel");

  newsTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.tab;

      newsTabs.forEach(item => {
        const active = item === tab;

        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });

      newsPanels.forEach(panel => {
        const active = panel.id === targetId;

        panel.classList.toggle("active", active);
        panel.hidden = !active;
      });
    });
  });


  /* ==============================
     3. 모바일 메뉴
  ============================== */

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "메뉴 닫기" : "메뉴 열기"
      );
    });

    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "메뉴 열기");
      });
    });
  }


  /* ==============================
     4. 검색창 열기 / 닫기
  ============================== */

  const searchToggle = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");

  if (searchToggle && searchPanel) {
    searchToggle.addEventListener("click", () => {
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
        searchPanel.querySelector("input")?.focus();
      }
    });
  }


  /* ==============================
     5. 시연용 알림 메시지
  ============================== */

  const toast = document.getElementById("toast");
  let toastTimeout = null;

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    if (toastTimeout !== null) {
      clearTimeout(toastTimeout);
    }

    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }

  // 아직 제작되지 않은 상세 페이지
  document.querySelectorAll(".demo-link").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      showToast("해당 상세 페이지는 아직 제작되지 않았습니다.");
    });
  });

  // 시연용 검색 폼
  document.querySelectorAll(".demo-form").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const input = form.querySelector("input");

      if (!input || !input.value.trim()) {
        showToast("검색어를 입력해 주세요.");
        input?.focus();
        return;
      }

      showToast("검색 기능은 현재 시연용입니다.");
    });
  });


  /* ==============================
     6. ESC 키로 메뉴 닫기
  ============================== */

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    if (mainNav) {
      mainNav.classList.remove("open");
    }

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "메뉴 열기");
    }

    if (searchPanel) {
      searchPanel.hidden = true;
    }

    if (searchToggle) {
      searchToggle.setAttribute("aria-expanded", "false");
      searchToggle.setAttribute("aria-label", "검색 열기");
    }
  });

});
