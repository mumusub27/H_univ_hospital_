
document.addEventListener("DOMContentLoaded", () => {
  const type = document.body.dataset.newsType;
  
  const list = document.getElementById("newsList");
  const form = document.getElementById("newsSearchForm");
  const input = document.getElementById("newsSearchInput");
  const pages = document.getElementById("newsPagination");
  const count = document.getElementById("newsCount");

  const posts = [...(window.NEWS_DATA?.[type] || [])]
    .sort((a, b) =>
      b.date.localeCompare(a.date) || b.id - a.id
    );
  
  if (!list || !form || !input || !pages || !count) {
    console.error("게시판 HTML 요소를 찾을 수 없습니다.");
    return;
  }

  let filtered = posts;
  let page = 1;

  const pageSize = 10;

  const escapeHTML = value =>
    String(value).replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));

  // ★ 게시물 목록 출력
  function render() {
    count.textContent = `전체 ${filtered.length}건`;

    const start = (page - 1) * pageSize;
    const items = filtered.slice(start, start + pageSize);

    list.innerHTML = items.length
      ? items.map(post => {
          const title = escapeHTML(post.title);

          // 본문이 없는 게시물은 클릭 불가
          const link = String(post.content || "").trim()
            ? `<a href="news-detail.html?type=${encodeURIComponent(type)}&id=${encodeURIComponent(post.id)}">${title}</a>`
            : `<span class="news-disabled" title="상세 내용 준비 중">${title}</span>`;

          return `
            <article class="board-item">
              <span class="board-number">${post.id}</span>

              <div class="board-copy">
                <div class="board-title">${link}</div>

                <div class="board-meta">
                  <span>${escapeHTML(post.author)}</span>
                  <time datetime="${escapeHTML(post.date)}">
                    ${escapeHTML(post.date)}
                  </time>
                </div>
              </div>
            </article>
          `;
        }).join("")
      : '<p class="board-empty">검색 결과가 없습니다.</p>';

    // ★ 페이지당 10개, 페이지 번호 생성
    const totalPages = Math.ceil(filtered.length / pageSize);

    pages.innerHTML = totalPages > 1
      ? Array.from({ length: totalPages }, (_, i) => `
          <button
            type="button"
            class="page-button ${page === i + 1 ? "active" : ""}"
            data-page="${i + 1}"
            aria-label="${i + 1}페이지">
            ${i + 1}
          </button>
        `).join("")
      : "";
  }

  // ★ 제목 + 본문 + 숨겨진 키워드 검색
  form.addEventListener("submit", e => {
    e.preventDefault();

    const q = input.value.trim().toLocaleLowerCase();

    filtered = posts.filter(post => {
      const searchableText = [
        post.title || "",
        post.content || "",
        ...(Array.isArray(post.keywords) ? post.keywords : [])
      ].join(" ").toLocaleLowerCase();

      return searchableText.includes(q);
    });

    page = 1;
    render();
  });

  // ★ 페이지 번호 클릭
  pages.addEventListener("click", e => {
    const button = e.target.closest("[data-page]");
    if (!button) return;

    page = Number(button.dataset.page);
    render();
  });

  // ★ 최초 페이지 접속 시 게시물 출력
  render();
});
