document.addEventListener("DOMContentLoaded", () => {
  const type = document.body.dataset.newsType;
  const posts = [...(window.NEWS_DATA?.[type] || [])].sort((a,b) => b.date.localeCompare(a.date) || b.id-a.id);
  const list = document.getElementById("newsList");
  const form = document.getElementById("newsSearchForm");
  const input = document.getElementById("newsSearchInput");
  const pages = document.getElementById("newsPagination");
  const count = document.getElementById("newsCount");
  let filtered = posts, page = 1;
  const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function render() {
    count.textContent = `전체 ${filtered.length}건`;
    const items = filtered.slice((page-1)*10, page*10);
    list.innerHTML = items.length ? items.map(post => {
      const title = escapeHTML(post.title);
      const link = String(post.content || '').trim()
        ? `<a href="news-detail.html?type=${encodeURIComponent(type)}&id=${encodeURIComponent(post.id)}">${title}</a>`
        : `<span class="news-disabled" title="상세 내용 준비 중">${title}</span>`;
      return `<article class="board-item"><span class="board-number">${post.id}</span><div class="board-copy"><div class="board-title">${link}</div><div class="board-meta"><span>${escapeHTML(post.author)}</span><time datetime="${escapeHTML(post.date)}">${escapeHTML(post.date)}</time></div></div></article>`;
    }).join('') : '<p class="board-empty">검색 결과가 없습니다.</p>';
    const totalPages = Math.ceil(filtered.length/10);
    pages.innerHTML = totalPages > 1 ? Array.from({length:totalPages},(_,i)=>`<button type="button" class="page-button ${page===i+1?'active':''}" data-page="${i+1}" aria-label="${i+1}페이지">${i+1}</button>`).join('') : '';
  }
  form.addEventListener('submit', e => {e.preventDefault(); const q=input.value.trim().toLocaleLowerCase(); filtered=posts.filter(post=>post.title.toLocaleLowerCase().includes(q));page=1;render();});
  pages.addEventListener('click',e=>{const button=e.target.closest('[data-page]');if(!button)return;page=Number(button.dataset.page);render();window.scrollTo({top:0,behavior:'smooth'});});
  render();
});
