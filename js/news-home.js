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
  const more=document.getElementById('newsMoreLink');
  document.querySelectorAll('.news-tab').forEach(tab=>tab.addEventListener('click',()=>{if(more)more.href=`pages/${groups[tab.dataset.tab]||'notices'}.html`;}));
});
