
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const type = params.get('type');
  const id = params.get('id');

  const meta = window.NEWS_META?.[type];
  const post = window.NEWS_DATA?.[type]?.find(
    p => String(p.id) === id
  );

  const container = document.getElementById('articleMount');
  const listLink = document.getElementById('backToNews');

  listLink.href = ({
    notices: 'notices.html',
    lectures: 'lectures.html',
    press: 'press.html'
  })[type] || 'notices.html';

  if (!meta || !post || !String(post.content || '').trim()) {
    container.innerHTML =
      '<p class="board-empty">게시물이 없거나 상세 내용이 아직 준비되지 않았습니다.</p>';
    return;
  }

  const escapeHTML = value =>
    String(value).replace(/[&<>"']/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c]));

  // ★ 브라우저 탭 제목
  document.title = `${post.title} | H대학교 병원`;

  // ★ 게시판별 한글 제목 및 설명
  document.getElementById('detailHeading').textContent = meta.title;
  document.getElementById('newsCategoryName').textContent = meta.description;
  document.getElementById('newsCategoryName').href = listLink.href;

  // ★ 게시판별 영어 제목
  const englishHeading = document.querySelector('.page-heading .eyebrow');

  if (englishHeading) {
    englishHeading.textContent = meta.english;
  }

  // ★ 상단 버건디 경로 표시
  const categoryCrumb = document.querySelector(
    '.breadcrumb-bar .crumb:last-child .crumb-button'
  );

  if (categoryCrumb) {
    const categoryText = categoryCrumb.firstChild;

    if (categoryText) {
      categoryText.textContent = meta.title + ' ';
    }
  }

  // ★ 게시물 상세 내용 출력
  container.innerHTML = `
    <header class="article-header">
      <h2>${escapeHTML(post.title)}</h2>
      <div class="article-meta">
        <span>${escapeHTML(post.author)}</span>
        <time datetime="${escapeHTML(post.date)}">
          ${escapeHTML(post.date)}
        </time>
      </div>
    </header>
    <div class="article-content"></div>
  `;

  container.querySelector('.article-content').textContent = post.content;
});
