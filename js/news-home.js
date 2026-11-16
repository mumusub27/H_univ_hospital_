document.addEventListener('DOMContentLoaded', () => {
  const groups = {notice:'notices',lecture:'lectures',press:'press'};
  const escapeHTML = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  Object.entries(groups).forEach(([panelId,type])=>{
    const panel=document.getElementById(panelId);if(!panel)return;
    const posts=[...(window.NEWS_DATA?.[type]||[])].sort((a,b)=>b.date.localeCompare(a.date)||b.id-a.id).slice(0,4);
    panel.innerHTML=posts.map(post=>{
      const url=String(post.content||'').trim()?`pages/news-detail.html?type=${encodeURIComponent(type)}&id=${encodeURIComponent(post.id)}`:null;
      const inner=`<span class="news-tag">${type==='notices'?'공지':type==='lectures'?'강좌':'보도'}</span><span class="news-title">${escapeHTML(post.title)}</span><time>${escapeHTML(post.date.replace(/-/g,'.'))}</time>`;
      return url?`<a href="${url}" class="news-row">${inner}</a>`:`<div class="news-row" style="cursor:default">${inner}</div>`;
    }).join('');
  });
  
/* ===== 전체 소식 보기: 현재 탭의 게시판으로 이동 ===== */
const more = document.getElementById("newsMoreLink");

const boardLinks = {
  notice: "pages/notices.html",
  lecture: "pages/lectures.html",
  press: "pages/press.html"
};

function updateMoreLink(tabName) {
  if (!more) return;
  more.href = boardLinks[tabName] || boardLinks.notice;
}

// 최초 화면에 선택된 탭 반영
const initialTab = document.querySelector(".news-tab.active");
updateMoreLink(initialTab?.dataset.tab || "notice");

// 탭을 클릭할 때 링크 변경
document.querySelectorAll(".news-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    updateMoreLink(tab.dataset.tab);
  });
});

