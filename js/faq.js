
/*
 * FAQ 데이터 관리
 * answer가 빈 문자열("")이면 상세 페이지로 이동하지 않습니다.
 * 게시물 추가 시 id는 중복되지 않게 지정하세요.
 */

const FAQ_DATA = [
  {
    id: 100,
    title: "인터넷으로 진료 예약을 하려면 어떻게 해야 하나요?",
    answer: `H대학교 병원 홈페이지의 진료예약 메뉴를 통해 예약하실 수 있습니다.

※ 본 내용은 창작용 가상 병원 홈페이지의 예시입니다.`,
    keywords: ["예약", "온라인"]
  },
  {
    id: 99,
    title: "진료 예약을 변경하거나 취소하려면 어떻게 해야 하나요?",
    answer: `진료예약 메뉴에서 예약 내역을 확인한 후 변경 또는 취소할 수 있습니다.

※ 본 내용은 창작용 가상 병원 홈페이지의 예시입니다.`,
    keywords: ["예약취소", "예약변경"]
  },
  {
    id: 98,
    title: "초진 환자는 어떤 서류를 준비해야 하나요?",
    answer: "",
    keywords: ["초진", "신분증"]
  },
  {
    id: 97,
    title: "진료비와 검사비는 어떻게 수납하나요?",
    answer: "",
    keywords: ["수납", "결제"]
  },
  {
    id: 96,
    title: "진료비 영수증과 세부내역서를 발급받을 수 있나요?",
    answer: "",
    keywords: ["영수증", "증명서"]
  },
  {
    id: 95,
    title: "입원 및 퇴원 절차는 어떻게 진행되나요?",
    answer: "",
    keywords: ["입원", "퇴원"]
  },
  {
    id: 94,
    title: "병원 주차장은 어떻게 이용하나요?",
    answer: "",
    keywords: ["주차", "주차요금"]
  },
  {
    id: 93,
    title: "다른 병원에서 받은 검사 결과를 가져가도 되나요?",
    answer: "",
    keywords: ["검사", "의무기록"]
  },
  {
    id: 92,
    title: "진료확인서나 진단서는 어떻게 발급받나요?",
    answer: "",
    keywords: ["제증명", "진단서"]
  },
  {
    id: 91,
    title: "병원 내 편의시설은 어디에 있나요?",
    answer: "",
    keywords: ["편의점", "식당", "편의시설"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const escapeHTML = value =>
    String(value).replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));

  const list = document.getElementById("faqList");
  const detail = document.getElementById("faqDetail");

  // ===== FAQ 목록 페이지 =====
  if (list) {
    const form = document.getElementById("faqSearchForm");
    const input = document.getElementById("faqSearchInput");
    const count = document.getElementById("faqCount");
    const pagination = document.getElementById("faqPagination");

    let filtered = [...FAQ_DATA];
    let page = 1;
    const pageSize = 10;

    function render() {
      const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
      page = Math.min(Math.max(page, 1), totalPages);

      const start = (page - 1) * pageSize;
      const items = filtered.slice(start, start + pageSize);

      count.textContent = `총 게시물 ${filtered.length}개, 페이지 ${page} / ${totalPages}`;

      list.innerHTML = items.length
        ? items.map(post => {
            const title = escapeHTML(post.title);
            const hasAnswer = String(post.answer || "").trim().length > 0;

            const content = hasAnswer
              ? `<a href="faq-detail.html?id=${encodeURIComponent(post.id)}">${title}</a>`
              : `<span class="faq-disabled" title="답변 준비 중">${title}</span>`;

            return `
              <div class="faq-item">
                <span class="faq-q">Q</span>
                <div class="faq-question">${content}</div>
              </div>
            `;
          }).join("")
        : `<p class="faq-empty">검색 결과가 없습니다.</p>`;

      pagination.innerHTML = totalPages > 1
        ? Array.from({length: totalPages}, (_, i) => `
            <button type="button"
              data-page="${i + 1}"
              class="${page === i + 1 ? 'active' : ''}"
              aria-label="${i + 1}페이지">
              ${i + 1}
            </button>
          `).join("")
        : "";
    }

    form.addEventListener("submit", event => {
      event.preventDefault();
      const q = input.value.trim().toLocaleLowerCase();

      filtered = FAQ_DATA.filter(post =>
        [
          post.title,
          post.answer,
          ...(Array.isArray(post.keywords) ? post.keywords : [])
        ].join(" ").toLocaleLowerCase().includes(q)
      );

      page = 1;
      render();
    });

    pagination.addEventListener("click", event => {
      const button = event.target.closest("[data-page]");
      if (!button) return;

      page = Number(button.dataset.page);
      render();
    });

    render();
  }

  // ===== FAQ 상세 페이지 =====
  if (detail) {
    const id = new URLSearchParams(location.search).get("id");
    const post = FAQ_DATA.find(item => String(item.id) === id);

    if (!post || !String(post.answer || "").trim()) {
      detail.innerHTML = `<p class="faq-empty">게시물이 없거나 답변이 아직 준비되지 않았습니다.</p>`;
      return;
    }

    document.title = `${post.title} | H대학교 병원`;

    detail.innerHTML = `
      <header class="faq-detail-header">
        <span class="faq-q">Q</span>
        <h2>${escapeHTML(post.title)}</h2>
      </header>
      <div class="faq-answer">
        <span class="faq-a">A</span>
        <div class="faq-answer-text"></div>
      </div>
    `;

    detail.querySelector(".faq-answer-text").textContent = post.answer;
  }
});
      
