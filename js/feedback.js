
const SUPABASE_URL = "https://hjmdvgydoiqhbqudeoxh.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_nuMN69BnMZSeRlV8ITo7SQ_u_TIbthk";

const API = `${SUPABASE_URL}/rest/v1/feedback_posts`;
const RPC = `${SUPABASE_URL}/rest/v1/rpc/`;

const headers = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`
};

const escapeHTML = value =>
  String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  }[c]));


async function request(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...options.headers
    }
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    
    console.error("Supabase 요청 실패:", response.status);

    throw new Error(
      errorData.message || `HTTP ${response.status}`
    );
  }

  return response.status === 204
    ? null
    : response.json();
}
    

function formatDate(value) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "" :
    d.toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul" });
}

document.addEventListener("DOMContentLoaded", () => {
  const $ = id => document.getElementById(id);
  const list = $("feedbackList");
  if (!list) return;

  const writeDialog = $("writeDialog");
  const deleteDialog = $("deleteDialog");
  const form = $("feedbackForm");
  const deleteForm = $("deleteForm");
  const count = $("feedbackCount");
  const pagination = $("feedbackPagination");
  const keyword = $("feedbackKeyword");

  let posts = [];
  let filtered = [];
  let page = 1;
  let openedId = null;
  let deletingId = null;
  const pageSize = 10;

  function render() {
    const totalPages = Math.max(
      1, Math.ceil(filtered.length / pageSize)
    );
    page = Math.min(Math.max(1, page), totalPages);

    count.textContent =
      `총 게시글 ${filtered.length}건, 페이지 ${page} / ${totalPages}`;

    const items = filtered.slice(
      (page - 1) * pageSize, page * pageSize
    );

    list.innerHTML = items.length
      ? items.map(post => {
        const open = openedId === post.id;
        return `
          <article class="feedback-item">
            <button type="button" class="feedback-question"
              data-open="${post.id}"
              aria-expanded="${open}">
              <span class="feedback-category">
                ${escapeHTML(post.category)}
              </span>
              <span class="feedback-item-main">
                <strong>${escapeHTML(post.title)}</strong>
                <span class="feedback-meta">
                  ${escapeHTML(post.nickname)}
                  · ${formatDate(post.created_at)}
                </span>
              </span>
              <span class="feedback-arrow">
                ${open ? "⌃" : "⌄"}
              </span>
            </button>
            ${open ? `
              <div class="feedback-answer">
                <div class="feedback-answer-body"></div>
                <button type="button" class="feedback-delete"
                  data-delete="${post.id}">삭제</button>
              </div>
            ` : ""}
          </article>
        `;
      }).join("")
      : '<p class="feedback-empty">게시글이 없습니다.</p>';

    // textContent 사용: 게시글 내용의 HTML 실행 방지
    if (openedId !== null) {
      const current = items.find(p => p.id === openedId);
      const body = list.querySelector(".feedback-answer-body");
      if (current && body) body.textContent = current.content;
    }

    pagination.innerHTML = totalPages > 1
      ? Array.from({ length: totalPages }, (_, i) => `
        <button type="button" data-page="${i + 1}"
          class="${page === i + 1 ? "active" : ""}">
          ${i + 1}
        </button>
      `).join("")
      : "";
  }

  async function loadPosts() {
    list.textContent = "게시글을 불러오는 중...";
    try {
      posts = await request(
        API + "?select=id,category,nickname,title,content,created_at" +
        "&order=created_at.desc,id.desc&limit=1000"
      );
      openedId = null;
      applySearch();
    
      } catch (error) {
        console.error("게시글 조회 오류:", error);
          count.textContent = "불러오기 실패";
          list.textContent = "게시글을 불러오지 못했습니다.";
    }
  }

  function applySearch() {
    const q = keyword.value.trim().toLocaleLowerCase();
    filtered = posts.filter(post =>
      [post.title, post.content, post.nickname, post.category]
        .join(" ").toLocaleLowerCase().includes(q)
    );
    page = 1;
    render();
  }

  $("feedbackSearch").addEventListener("submit", e => {
    e.preventDefault();
    openedId = null;
    applySearch();
  });

  list.addEventListener("click", e => {
    const openButton = e.target.closest("[data-open]");
    const deleteButton = e.target.closest("[data-delete]");

    if (openButton) {
      const id = Number(openButton.dataset.open);
      openedId = openedId === id ? null : id;
      render();
    }

    if (deleteButton) {
      deletingId = Number(deleteButton.dataset.delete);
      deleteForm.reset();
      $("deleteMessage").textContent = "";
      deleteDialog.showModal();
    }
  });

  pagination.addEventListener("click", e => {
    const button = e.target.closest("[data-page]");
    if (!button) return;
    page = Number(button.dataset.page);
    openedId = null;
    render();
  });

  $("writeToggle").addEventListener("click", () => {
    $("feedbackMessage").textContent = "";
    writeDialog.showModal();
  });

  document.querySelectorAll("[data-close-dialog]").forEach(button => {
    button.addEventListener("click", () => {
      button.closest("dialog").close();
    });
  });

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const submit = $("feedbackSubmit");
    if (submit.disabled) return;

    const payload = {
      p_category: $("feedbackCategory").value,
      p_nickname: $("feedbackNickname").value.trim(),
      p_title: $("feedbackTitle").value.trim(),
      p_content: $("feedbackContent").value.trim(),
      p_password: $("feedbackPassword").value
    };


const validCategories = ["문의", "건의", "칭찬", "불편", "기타"];

const checks = {
  "문의 유형": validCategories.includes(payload.p_category),
  "닉네임": payload.p_nickname.length >= 1 &&
              payload.p_nickname.length <= 20,
  "제목": payload.p_title.length >= 2 &&
          payload.p_title.length <= 100,
  "내용": payload.p_content.length >= 5 &&
          payload.p_content.length <= 5000,
  "비밀번호": payload.p_password.length >= 4 &&
              payload.p_password.length <= 10
};

const invalid = Object.entries(checks)
  .filter(([, valid]) => !valid)
  .map(([name]) => name);

if (invalid.length) {
  $("feedbackMessage").textContent =
    "입력 조건 불일치: " + invalid.join(", ");
  return;
}

    
    if (payload.p_title.length < 2 ||
        payload.p_content.length < 5 ||
        payload.p_password.length < 4 ||
        payload.p_password.length > 10) {
      $("feedbackMessage").textContent = "입력 내용을 확인해 주세요.";
      return;
    }

    submit.disabled = true;
    $("feedbackMessage").textContent = "등록 중...";

    try {
      await request(RPC + "create_feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      form.reset();
      writeDialog.close();
      keyword.value = "";
      await loadPosts();
    } catch (error) {
      console.error(error);
      $("feedbackMessage").textContent =
      "게시글 등록에 실패했습니다. 잠시 후 다시 시도해 주세요.";
    } finally {
      submit.disabled = false;
    }
  });

  deleteForm.addEventListener("submit", async e => {
    e.preventDefault();
    const submit = $("deleteSubmit");
    if (submit.disabled || deletingId === null) return;

    submit.disabled = true;
    $("deleteMessage").textContent = "확인 중...";

    try {
      const success = await request(RPC + "delete_feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          p_id: deletingId,
          p_password: $("deletePassword").value
        })
      });

      if (!success) {
        $("deleteMessage").textContent =
          "비밀번호가 일치하지 않거나 삭제할 수 없는 글입니다.";
        return;
      }

      deletingId = null;
      deleteForm.reset();
      deleteDialog.close();
      await loadPosts();
    } catch (error) {
      console.error(error);
      $("deleteMessage").textContent = "삭제 요청에 실패했습니다.";
    } finally {
      submit.disabled = false;
    }
  });

  loadPosts();
});
    
