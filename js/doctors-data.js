
/* ==========================================
   H대학교 병원 - 가상 의료진 데이터

   ★ 의료진 추가/삭제/수정: doctors 배열
   ★ departmentId: departments.js의 id와 동일
   ★ photo: 사진 경로, 없으면 ""
   ★ clinics: 클리닉 목록, 없으면 []
   ★ reservable: true / false
   ★ schedule: 오전/오후 요일 배열
     0=월, 1=화, 2=수, 3=목, 4=금
   ★ career, papers, news: 상세 페이지 탭
   ========================================== */

const doctors = [

  /* ===== 1. 소화기내과 ===== */
  {
    id: "kim-doyun",
    name: "김도윤",
    departmentId: "gastroenterology",
    photo: "",
    fields: ["위·식도 질환", "소화성 궤양", "위장관 내시경"],
    clinics: [
      { name: "위장관 클리닉", url: "" },
      { name: "내시경 클리닉", url: "" }
    ],
    specialNotes: "",
    schedule: { am: [0, 2, 4], pm: [1, 3] },
    reservable: true,
    career: [],
    papers: [],
    news: []
  },
  {
    id: "lee-seoyeon",
    name: "이서연",
    departmentId: "gastroenterology",
    photo: "",
    fields: ["간 질환", "지방간", "바이러스성 간염", "간경변"],
    clinics: [
      { name: "간질환 클리닉", url: "" }
    ],
    specialNotes: "",
    schedule: { am: [1, 3], pm: [0, 2] },
    reservable: true,
    career: [],
    papers: [],
    news: []
  },

  /* ===== 2. 순환기내과 ===== */
  {
    id: "park-junseo",
    name: "박준서",
    departmentId: "cardiology",
    photo: "",
    fields: ["고혈압", "협심증", "관상동맥질환", "심부전"],
    clinics: [
      { name: "심혈관 클리닉", url: "" },
      { name: "고혈압 클리닉", url: "" }
    ],
    specialNotes: "",
    schedule: { am: [0, 3], pm: [1, 4] },
    reservable: true,
    career: [],
    papers: [],
    news: []
  },
  {
    id: "choi-yuna",
    name: "최유나",
    departmentId: "cardiology",
    photo: "",
    fields: ["부정맥", "심방세동", "심전도 검사", "심장초음파"],
    clinics: [
      { name: "부정맥 클리닉", url: "" }
    ],
    specialNotes: "",
    schedule: { am: [1, 4], pm: [2] },
    reservable: false,
    career: [],
    papers: [],
    news: []
  },

  /* ===== 3. 호흡기내과 ===== */
  {
    id: "jung-hyunjin",
    name: "정현진",
    departmentId: "pulmonology",
    photo: "",
    fields: ["천식", "만성폐쇄성폐질환", "폐렴", "만성기침"],
    clinics: [
      { name: "천식·알레르기 클리닉", url: "" }
    ],
    specialNotes: "",
    schedule: { am: [0, 2], pm: [1, 3] },
    reservable: true,
    career: [],
    papers: [],
    news: []
  },

  /* ===== 4. 외과 ===== */
  {
    id: "kang-minjae",
    name: "강민재",
    departmentId: "general-surgery",
    photo: "",
    fields: ["담낭 질환", "탈장", "복강경 수술", "복부 외과질환"],
    clinics: [
      { name: "담낭 클리닉", url: "" }
    ],
    specialNotes: "",
    schedule: { am: [0, 3], pm: [2] },
    reservable: true,
    career: [],
    papers: [],
    news: []
  },

  /* ===== 5. 정형외과 ===== */
  {
    id: "yoon-taeho",
    name: "윤태호",
    departmentId: "orthopedics",
    photo: "",
    fields: ["무릎관절 질환", "퇴행성관절염", "스포츠 손상"],
    clinics: [
      { name: "관절 클리닉", url: "" },
      { name: "스포츠의학 클리닉", url: "" }
    ],
    specialNotes: "",
    schedule: { am: [1, 3], pm: [0, 4] },
    reservable: true,
    career: [],
    papers: [],
    news: []
  },

  /* ===== 6. 신경외과 ===== */
  {
    id: "han-jihoon",
    name: "한지훈",
    departmentId: "neurosurgery",
    photo: "",
    fields: ["뇌종양", "뇌혈관 질환", "두부 외상", "뇌수술"],
    clinics: [
      { name: "뇌종양 클리닉", url: "" }
    ],
    specialNotes: "",
    schedule: { am: [0, 4], pm: [2] },
    reservable: false,
    career: [],
    papers: [],
    news: []
  },

  /* ===== 7. 소아청소년과 ===== */
  {
    id: "seo-harin",
    name: "서하린",
    departmentId: "pediatrics",
    photo: "",
    fields: ["소아 호흡기 질환", "성장·발달", "소아 감염질환", "예방접종"],
    clinics: [
      { name: "성장발달 클리닉", url: "" }
    ],
    specialNotes: "",
    schedule: { am: [0, 1, 3], pm: [2, 4] },
    reservable: true,
    career: [],
    papers: [],
    news: []
  },

  /* ===== 8. 산부인과 ===== */
  {
    id: "oh-jieun",
    name: "오지은",
    departmentId: "obgyn",
    photo: "",
    fields: ["산전관리", "고위험 임신", "여성 건강", "일반 부인과"],
    clinics: [
      { name: "고위험임신 클리닉", url: "" }
    ],
    specialNotes: "",
    schedule: { am: [0, 2], pm: [1, 3] },
    reservable: true,
    career: [],
    papers: [],
    news: []
  },

  /* ===== 9. 피부과 ===== */
  {
    id: "baek-sujin",
    name: "백수진",
    departmentId: "dermatology",
    photo: "",
    fields: ["아토피피부염", "건선", "여드름", "피부 알레르기"],
    clinics: [
      { name: "아토피 클리닉", url: "" },
      { name: "건선 클리닉", url: "" }
    ],
    specialNotes: "",
    schedule: { am: [1, 2, 4], pm: [0, 3] },
    reservable: true,
    career: [],
    papers: [],
    news: []
  },

  /* ===== 10. 정신건강의학과 ===== */
  {
    id: "lim-eunwoo",
    name: "임은우",
    departmentId: "psychiatry",
    photo: "",
    fields: ["우울장애", "불안장애", "수면장애", "스트레스 관련 질환"],
    // ★ 클리닉이 없는 경우: 빈 배열 사용
    clinics: [],
    specialNotes: "",
    schedule: { am: [0, 3], pm: [1, 4] },
    reservable: true,
    career: [],
    papers: [],
    news: []
  }

  /* ★ 새 의료진은 이 위에 쉼표와 함께 추가 ★ */
];
    
