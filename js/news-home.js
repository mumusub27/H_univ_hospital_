
document.addEventListener("DOMContentLoaded", () => {
  const groups = {
    notice: "notices",
    lecture: "lectures",
    press: "press"
  };

  const boardLinks = {
    notice: "pages/notices.html",
    lecture: "pages/lectures.html",
    press: "pages/press.html"
  };

  const escapeHTML = value =>
    String(value).replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c]));

  // ★ 각 게시판의 최신 게시물 4개 출력
  Object.entries(groups).forEach(([panelId, type]) => {
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const posts = [...(window.NEWS_DATA?.[type] || [])]
      .sort((a, b) =>
        b.date.localeCompare(a.date) || b.id - a.id
      )
      .slice(0, 4);

    panel.innerHTML = posts.map(post => {
      const hasContent = String(post.content || "").trim();

      const url = hasContent
        ? `pages/news-detail.html?type=${encodeURIComponent(type)}&id=${encodeURIComponent(post.id)}`
        : null;

      const tag =
        type === "notices" ? "공지" :
        type === "lectures" ? "강좌" : "보도";

      const inner = `
        <span class="news-tag">${tag}</span>
        <span class="news-title">${escapeHTML(post.title)}</span>
        <time>${escapeHTML(post.date.replace(/-/g, "."))}</time>
      `;

      return url
        ? `<a href="${url}" class="news-row">${inner}</a>`
        : `<div class="news-row" style="cursor:default">${inner}</div>`;
    }).join("");
  });

  // ★ 현재 선택한 탭에 맞춰 전체 소식 보기 링크 변경
  const more = document.getElementById("newsMoreLink");

  function updateMoreLink(tabName) {
    if (!more) return;
    more.href = boardLinks[tabName] || boardLinks.notice;
  }

  const initialTab = document.querySelector(".news-tab.active");
  updateMoreLink(initialTab?.dataset.tab || "notice");

  document.querySelectorAll(".news-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      updateMoreLink(tab.dataset.tab);
    });
  });
});
