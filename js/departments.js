
/* ==========================================
   H대학교 병원 - 진료과 데이터 및 기능

   ★ 진료과 추가/수정/삭제: departments 배열
   ★ id: 영문 고유값, 중복 금지
   ★ category: 진료과 분류
   ★ icon: 픽토그램 이미지 경로
   ★ doctors: 추후 의료진 연결 예정
   ========================================== */

const departments = [

  /* ========== 1. 내과계 ========== */
   {
    id: "infectious",
    name: "감염내과",
    category: "내과계",
    summary: "미생물 감염 질환",
    icon: "../images/departments/infectious.png",
    description: "감염내과는 세균, 바이러스, 곰팡이균 등의 미생물에 의해 발생하는 모든 감염질환을 진단하고 치료하는 진료과입니다. H대학교병원 감염내과에서는 단순한 감기부터 에이즈에 이르기까지 다양한 감염질환에 대한 진료를 담당하고 있습니다. 또한 항생제의 남용을 막고 적절하게 사용하여 항생제 내성 증가를 예방하고 병원감염을 최소한으로 줄여 환자분들과 병원직원들을 보호하기 위해 노력하고 있습니다.",
    specialties: ["신우신염", "장티푸스", "말라리아", "유행성출열열", "신종 인플루엔자"],
    doctors: []
  },
   
   {
    id: "endocrinology",
    name: "내분비내과",
    category: "내과계",
    summary: "호르몬 기능 이상, 내분비 질환",
    icon: "../images/departments/endocrinology.png",
    description: "내분비내과는 호르몬 기능 이상에 의해 발생하는 내분비 질환을 전문적으로 진료합니다. 당뇨병, 내분비 기관에서 분비되는 호르몬 이상, 내분비 기관에서 발생하는 종양 등을 진단하고 치료합니다. H대학교병원 내분비내과에서는 정확한 진단과 치료에 전념하고 있으며, 당뇨병 환자의 전문적 진료를 위하여 당뇨병 클리닉 등 특수 클리닉을 운영하여 보다 전문적이고 체계적인 환자 중심의 진료가 되도록 최선을 다하고 있습니다.",
    specialties: ["당뇨병", "갑상선질환", "뇌하수체 질환", "부신 질환", "비만증, 고지혈증"],
    doctors: []
  },
   
  {
    id: "gastroenterology",
    name: "소화기내과",
    category: "내과계",
    summary: "식도·위·소장·대장 질환",
    icon: "../images/departments/gastroenterology.png",
    description: "소화기내과는 식도, 위, 소장, 대장, 간, 담도 및 췌장에 발생하는 소화기계 질내에 대해 예방, 조기진단과 치료 및 연구를 담당합니다. 확대내시경을 포함한 최첨단 고해상 내시경기기와 환자를 위해 최적화된 소화기병검사실 시설을 갖추고 있으며 숙련된 전문 의료진이 정확한 조기 진단과 수준 높은 양질의 치료를 제공하고자 열과 성의를 다하고 있습니다. 종합검진센터, 영상의학과, 흉부외과, 진단병리과 등 여러과와 유기적인 협조와 빠른 의사소통을 통해 환자들의 문제를 보다 빠르게 해결하고 있습니다.",
    specialties: ["식도 질환", "위, 십이지장 질환", "소장 및 대장암", "췌담도 질환"],
    doctors: []
  },

    {
    id: "nephrology",
    name: "신장내과",
    category: "내과계",
    summary: "신장 자체 및 전신 질환에 의한 신장질환",
    icon: "../images/departments/nephrology.png",
    description: "신장내과는 다양한 신장 질환 및 신장 기능이 저하된 환자의 건강과 생명을 지키는 과입니다. H대학교병원 신장내과는 급성 및 만성 신부전과 당뇨병성 신증, 고혈압성 신증, 사구체 신염, 낭창성 신염, 산 염기 전해질 장애 등 다양한 신장 질환 및 혈뇨, 단백뇨, 고혈압 등의 증상에 대한 정확한 진단과 치료를 위하여 최첨단 의료장비 및 최고의 의료진을 갖추고 있으며, 다양한 특수 클리닉을 통해 보다 나은 의료 서비스 제공에 만전을 기하고 있습니다.",
    specialties: ["사구체 신염", "혈뇨 및 단백뇨", "급성 및 만성 신부전증", "혈액 투석", "복막 투석", "고혈압"],
    doctors: []
  },

  {
    id: "cardiology",
    name: "심장내과",
    category: "내과계",
    summary: "심장 및 혈관 질환",
    icon: "../images/departments/cardiology.png",
    description: "심장내과는 인체에서 가장 중요한 기관의 하나인 심장 및 혈관에 관계된 질환을 보는 의학 분야입니다. 고혈압, 고지혈증 등과 같이 지속적인 관리를 요하는 질환부터 부정맥과 함께 급성심근 경색, 협심증 등과 같이 중증의 심장 혈관 질환을 진단하고 치료하는 분야입니다. H대학교병원 심장내과에서는 최신식 시설과 전문적 인력과 함께 심혈관 질환들을 정확하고 신속하게 진단하고 있습니다.",
    specialties: ["허혈성심질환", "고혈압 및 고지혈증", "심근질환", "부정맥"],
    doctors: []
  },
   
   
   {
    id: "allergy",
    name: "알레르기내과",
    category: "내과계",
    summary: "천식 및 알레르기 질환",
    icon: "../images/departments/allergy.png",
    description: "알레르기내과는 천식을 전문적으로 진료하고 있으며, 알레르기 비염 및 결막염, 두드러기 및 혈관부종, 호산구성 폐질환, 음식물 알레르기, 아나필락시스 등의 다양한 알레르기 질환을 다루고 있습니다. H대학교병원 알레르기 내과에서는 환자분들의 증상과 상태를 자세히 파악하고 그에 따른 체계적이고 효율적인 검사와 치료를 진행하고 있습니다.",
    specialties: ["천식", "만성폐쇄성폐질환", "만성기침", "약물알레르기", "만성 두드러기"],
    doctors: []
  },

  {
    id: "pulmonology",
    name: "호흡기내과",
    category: "내과계",
    summary: "폐·기관지 및 호흡기 질환",
    icon: "../images/departments/pulmonology.png",
    description: "호흡기내과는 폐와 기관지 등 호흡기계에 발생하는 질환을 진단하고 치료합니다. H대학교병원 호흡기내과에서는 흉부외과, 진단영상의학과, 병리과 등과의 협진을 통해서 최상의 진료서비스를 제공하고자 노력하고 있습니다.",
    specialties: ["호흡부전", "폐결핵", "만성폐쇄성 폐질환", "폐렴", "간질성 폐질환"],
    doctors: []
  },

  /* ========== 2. 외과계 ========== */

  {
    id: "hepatobiliary-surgery",
    name: "간담췌외과",
    category: "외과계",
    summary: "간, 담도 · 담낭 및 췌장 질환",
    icon: "../images/departments/hepato.png",
    description: "간담췌외과는 우리나라에서 가장 많은 악성 종양의 하나인 간암을 비롯하여, 담낭 및 담도암과 췌장암 등의 악성종양, 그리고 담석을 중심으로 여러 양성질환 환자를 대상으로 하고 있습니다. 아울러 최신 수술 기법을 적극적으로 활용하여 환자의 수술 부담과 합병증을 최소화하고 수술 후 삶의 질을 높이기 위해 최선을 다하고 있습니다.",
    specialties: ["간 종양", "담석증", "담낭염", "췌장암", "비장 및 부신 질환"],
    doctors: []
  },

   {
    id: "proctology",
    name: "대장항문외과",
    category: "외과계",
    summary: "대장 및 항문 질환",
    icon: "../images/departments/proctology.png",
    description: "H대학교병원 대장항문외과는 대장·직장·항문에 이르는 폭넓은 질환에 대하여 진단부터 수술, 추적 관리에 이르기까지 체계적이고 일관된 진료를 제공하고 있습니다. 또한 소화기내과, 종양내과, 방사선종양학과, 영상의학과 등 관련 진료과와의 긴밀한 다학제 협진 체계를 구축하여, 진단 단계부터 항암·방사선 치료 및 수술 후 관리에 이르기까지 환자에게 가장 적합한 통합 치료 방향을 제시하고 있습니다. ",
    specialties: ["대장암", "대장 용종", "충수염", "직장암", "직장탈충증", "크론병"],
    doctors: []
  },

   {
    id: "gastrointestinal-surgery",
    name: "위장관외과",
    category: "외과계",
    summary: "식도·위·십이지장 및 소장 질환",
    icon: "../images/departments/gastroidescripti.png",
    description: "H대학교병원 위장관외과는 식도, 위, 십이지장 및 소장에 발생하는 다양한 질환에 대해 진단부터 수술, 수술 후 관리까지 전문적인 진료를 제공하고 있습니다. 풍부한 임상경험과 최신 최소침습수술 기법을 바탕으로 환자 개인에게 가장 적합한 치료를 시행하며, 복강경 및 로봇수술을 적극적으로 적용하여 빠른 회복과 삶의 질 향상을 위해 노력하고 있습니다.",
    specialties: ["위암", "위 · 소장 종양", "위식도역류질환", "탈장"],
    doctors: []
  },

   {
    id: "breast-surgery",
    name: "유방갑상선외과",
    category: "외과계",
    summary: "유방 및 갑상선 질환",
    icon: "../images/departments/breast.png",
    description: "유방외과는 유선종, 낭종, 유선염 등의 양성 유방질환부터 유방암까지 유방에 발생하는 다양한 질환을 진단하고 치료하는 전문 진료 분야입니다. 또한 갑상선외과는 갑상선 기능 항진증을 포함한 양성 갑상선 결절, 갑상선암, 부갑상선 및 경부 질환 전반에 걸쳐 최고의 전문성을 발휘합니다. H대학교병원 유방갑상선외과는 정기 검진부터 진단, 수술, 항암치료, 방사선치료, 재건 및 치료 후 추적관찰에 이르기까지 모든 과정을 함께하는 동반자로서 환자 중심의 통합 진료를 실천하고 있습니다.",
    specialties: ["섬유선종", "유방암", "유방 양성종양", "갑상선결절", "갑상선암"],
    doctors: []
  },
   


  /* ========== 3. 진료과 ========== */
   {
    id: "anesthesiology",
    name: "마취통증의학과",
    category: "진료과",
    summary: "마취관리 및 급·만성통증의 관리",
    icon: "../images/departments/anesthesiology.png",
    description: "마취통증의학과는 일반적인 마취관리, 중환자 관리, 응급환자 소생술 및 급·만성통증의 관리를 통해 환자들에게 최상의 의료서비스를 제공하기 위해 노력하고 있습니다. 최신의 마취기와 모니터기기, 각종 관련기기가 구비되어 있으며, 입원환자 마취, 당일수술환자 마취, 중환자 마취 및 장기이식에 관련된 마취 등을 제공합니다.",
    specialties: ["척추 수술 후 통증", "복합부위통증증후군", "삼차신경통", "암성 통증"],
    doctors: []
  },

{
    id: "pathology",
    name: "병리과",
    category: "진료과",
    summary: "",
    icon: "../images/departments/pathology.png",
    description: "병리학은 임상의학과 기초의학을 연결하는 가교 역할을 하는 학문으로 질병의 원인과 발생기전, 질병으로 인한 장기와 세포의 구조적 변화 및 기능적 변화에 대하여 연구합니다. H대학교병원 병리과는 우수한 전문 의료진이 최신 의학 지식과 최첨단 검사 장비를 바탕으로 신속하고 정확한 진단을 위하여 최선을 다하고 있습니다.",
    specialties: ["조직병리", "세포병리", "분자병리"],
    doctors: []
  },

   {
    id: "obgyn",
    name: "산부인과",
    category: "진료과",
    summary: "여성 건강 및 임신·출산",
    icon: "../images/departments/obgyn.png",
    description: "산부인과는 여성 질환과 임신, 출산에 관한 진료를 담당합니다. 환자 편의를 위해 진료 당일 대부분의 검사를 시행하며 신속하고 적절한 치료를 제공합니다. 우리 H대학교병원 산부인과는 모든 여성이 출산부터 노년까지, 자신의 삶을 건강히 영위할 수 있도록 최고이자 최선의 치료를 제공하며 돕겠습니다.",
    specialties: ["난소암", "자궁암", "산전관리", "불임", "자궁근종", "고위험 임신"],
    doctors: []
  },
   
  {
    id: "pediatrics",
    name: "소아청소년과",
    category: "진료과",
    summary: "소아 및 청소년 건강관리",
    icon: "../images/departments/pediatrics.png",
    description: "소아청소년과는 어린이와 청소년을 대상으로 이 시기에서 발생할 수 있는 질병을 치료 또는 예방하여 정상적인 성장과 발달을 이루게 하여, 궁극적으로 각자가 속한 사회에서 정상적으로 활동하고 생활할 수 있게 하여 주는 것을 목표로 합니다. 소아청소년과에서는 외래 진료실, 입원실, 신생아실, 신생아 중환자실이 있습니다. 세부 전문 분야가 활성화되어 있어 각각의 질병에 대한 수준 높은 치료를 받을 수 있으며, 첨단 의료장비 및 넓고 위생적이고 시설을 통해 환자와 보호자를 위한 최적의 환경을 제공하고자 노력하고 있습니다.",
    specialties: ["성장·발달", "소아뇌전증", "소아 희귀질환", "소아 호흡기 질환", "소아 일반진료"],
    doctors: []
  },

   {
    id: "neurology",
    name: "신경과",
    category: "진료과",
    summary: "중추 신경 및 말초 신경 관련 질환",
    icon: "../images/departments/neurology.png",
    description: "신경과는 중추신경 및 말초신경과 근육에 생기는 모든 질병에 대하여 연구하고 치료하는 과입니다. H대학교병원 신경과는 외래 진료실, 입원실, 중환자실, 여러 신경계 특수검사실을 갖추고 있으며 각각의 질병에 대한 수준 높은 치료를 받을 수 있도록 노력하고 있습니다.",
    specialties: ["뇌졸중", "파킨슨병", "치매", "척수말초신경질환", "어지럼증"],
    doctors: []
  },

    {
    id: "neurosurgery",
    name: "신경외과",
    category: "진료과",
    summary: "뇌·척수 및 신경계 외과 질환",
    icon: "../images/departments/neurosurgery.png",
    description: "신경외과는 뇌와 척수, 말초신경 등 신경 계통에 발생하는 질환이나 외상 등을 진단하고 수술적으로 치료하는 진료과입니다. H대학교병원 신경외과는 감마나이프, 수술실 내 MRI 등 최신 장비를 적극적으로 도입하여 수술에 사용하고 있으며 환자가 좀 더 정확하고 안전한 치료를 받을 수 있도록 끊임 없이 노력하고 있습니다.",
    specialties: ["뇌동맥류", "뇌종양", "뇌졸증", "뇌출혈", "척추 질환", "척추외상"],
    doctors: []
  },

   { 
    id: "cardiac-surgery",
    name: "심장혈관흉부외과",
    category: "진료과",
    summary: "복부 및 일반 외과 질환",
    icon: "../images/departments/cardiac-surgery.png",
    description: "심장혈관흉부외과는 심장, 혈관 및 흉부의 질환을 담당하는 임상 진료과입니다. H대학교병원 흉부외과에서는 최신 심장조영 영상장치 및 초음파기기를 이용한 정확한 진단과 그에 따른 적절한 외과적 치료를 시행하고 있으며, 수술 전후의 집중 환자 관리로 수술의 위험을 줄이고 수술 후 회복기간을 단축시키기 위해 지속적으로 노력하고 있습니다.",
    specialties: ["심장판막질환", "관상동맥 · 대동맥질환", "부정맥 수술", "흉부 손상", "흉막질환", "폐암", "감염성 및 간질성 폐질환"],
    doctors: []
  },

   {
    id: "emergency-medicine",
    name: "응급의학과",
    category: "진료과",
    summary: "",
    icon: "../images/departments/emergency.png",
    description: "모든 응급 환자를 최일선에서 포괄적이고 효과적으로 치료하고 관리하는 응급의학과는 급성 질병이나 손상으로 발생한 응급 상황에서 환자에게 즉각적이고 신속한 처치와 정확한 진단을 제공하여 환자의 생명을 구하고, 환자 상태를 최단시간 내에 정상화시키는 일을 합니다. 본원 응급의료센터는 최신의 장비 및 기자재와 최고의 시설을 갖추고 체계적인 응급의료를 위하여 응급의학과 전문의와 소아청소년과 전문의가 365일 24시간 상주하며, 모든 진료과와 긴밀한 진료연계 체계를 확립하여 24시간 모든 응급 환자에게 양질의 진료를 제공하고 있습니다.",
    specialties: ["응급의학", "손상", "소생의학", "중환자의학"],
    doctors: []
  },

   
   {
    id: "ophthalmology",
    name: "안과",
    category: "진료과",
    summary: "각막 및 망막 질환",
    icon: "../images/departments/ophthalmology.png",
    description: "안과는 다양한 눈의 질병과 기능, 해부생리학을 연구하는 의학 분야의 한 분야로서, 안과의사는 안과적 질환의 치료, 안경 처방을 위한 시력 측정 (굴절검사), 실명 예방 및 실명환자의 관리를 담당합니다",
    specialties: ["안과 질환", "백내장", "녹내장", "망막병증"],
    doctors: []
  },
   
  {
    id: "otorhinolaryngology",
    name: "이비인후과",
    category: "진료과",
    summary: "귀, 코, 목 관련 질환",
    icon: "../images/departments/otorhinolaryngology.png",
    description: "이비인후과는 귀, 코, 목에 관련된 질환에 대한 진단과 치료를 담당하는 과입니다. 이비인후과는 이과학(귀), 비과학(코) 및 두경부외과학(목)의 세 분과로 구성되어 있으며, 각 분과별로 전문성을 가진 전문의가 세분화, 전문화된 진료를 하고 있습니다.",
    specialties: ["난청", "인후두질환", "비염", "수면무호흡"],
    doctors: []
  },

   {
    id: "orthopedics",
    name: "정형외과",
    category: "진료과",
    summary: "뼈·관절·근육 및 척추 질환",
    icon: "../images/departments/orthopedics.png",
    description: "정형외과는 사지와 척추에 발생하는 근골격계 질환과 외상을 진단하고 치료하는 진료과입니다. H대학교병원 정형외과에서는 삶의 질을 저해하는 근골격계 질환과 외상에 대한 정확한 진단과 수준 높은 의료를 제공하기 위해 최선을 다하고 있습니다.",
    specialties: ["고관절 질환 및 외상", "수부 질환 및 골절", "척추 질환", "소아 및 족부관절", "스포츠 손상"],
    doctors: []
  },
   
  {
    id: "psychiatry",
    name: "정신건강의학과",
    category: "진료과",
    summary: "정신건강 및 정서·행동 문제",
    icon: "../images/departments/psychiatry.png",
    description: "정신건강의학과는 다양한 정신건강 문제를 평가하고 치료하는 진료과입니다. H대학교병원 정신건강의학과에서는 인간의 고통을 해결하기 위해서는 마음과 몸, 그리고 둘러싼 환경을 따로따로 생각해서는 안 된다는 전제하에 현대 사회를 살아가면서 부딪히게 되는 많은 정신적 문제들을 해결해드리고자 노력하고 있습니다.",
    specialties: ["조현병", "우울증", "불안장애", "공황장애", "수면장애"],
    doctors: []
  }

  /* ★ 새 진료과는 이 위에 추가 ★ */
];


/* ==========================================
   공통 유틸리티
   ========================================== */

function makeElement(tag, className = "", content) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (content !== undefined) {
    element.textContent = content;
  }

  return element;
}


/* ==========================================
   진료과 픽토그램 생성
   ★ 목록과 상세 페이지에서 공통 사용
   ========================================== */

function createDepartmentIcon(dept, location = "card") {
  const wrapper = makeElement(
    "div",
    `department-icon department-icon--${location}`
  );

  // 이미지가 없더라도 영역은 유지
  if (!dept.icon) {
    wrapper.classList.add("is-empty");
    return wrapper;
  }

  const img = document.createElement("img");

  img.src = dept.icon;
  img.alt = "";
  img.loading = "lazy";
  img.decoding = "async";

  img.addEventListener("error", () => {
    img.remove();
    wrapper.classList.add("is-empty");
  });

  wrapper.appendChild(img);

  return wrapper;
}


/* ==========================================
   페이지 초기화
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

 
  // 공통 드롭다운과 준비 중 링크는 subpage-header.js에서 관리합니다.
  


  /* ========================================
     3. 진료과 목록 페이지
     ======================================== */

  const listContainer =
    document.getElementById("departmentList");

  if (listContainer) {
    const searchInput =
      document.getElementById("departmentSearch");

    const searchButton =
      document.getElementById("searchButton");

    const resetButton =
      document.getElementById("resetButton");

    const filterContainer =
      document.getElementById("categoryFilters");

    const emptyState =
      document.getElementById("emptyState");

    if (
      searchInput &&
      filterContainer &&
      emptyState
    ) {
      let selectedCategory = "전체";

      const categories = [
        "전체",
        ...new Set(departments.map(dept => dept.category))
      ];

      /* ===== 분류 필터 ===== */

      function renderFilters() {
        filterContainer.replaceChildren();

        categories.forEach(category => {
          const button = makeElement(
            "button",
            "filter-button",
            category
          );

          button.type = "button";

          const isActive = selectedCategory === category;

          button.classList.toggle("active", isActive);
          button.setAttribute(
            "aria-pressed",
            String(isActive)
          );

          button.addEventListener("click", () => {
            selectedCategory = category;

            renderFilters();
            renderDepartments();
          });

          filterContainer.appendChild(button);
        });
      }

      /* ===== 진료과 카드 생성 ===== */

      function renderDepartments() {
        const query = searchInput.value
          .trim()
          .toLocaleLowerCase("ko");

        listContainer.replaceChildren();

        const matched = departments.filter(dept => {
          const categoryMatch =
            selectedCategory === "전체" ||
            dept.category === selectedCategory;

          const searchText = [
            dept.name,
            dept.summary,
            dept.description,
            ...dept.specialties
          ].join(" ").toLocaleLowerCase("ko");

          return categoryMatch &&
            searchText.includes(query);
        });

        emptyState.hidden = matched.length > 0;

        const visibleCategories = [
          ...new Set(matched.map(dept => dept.category))
        ];

        visibleCategories.forEach(category => {
          const section = makeElement(
            "section",
            "department-section"
          );

          section.appendChild(
            makeElement("h2", "", category)
          );

          const grid = makeElement(
            "div",
            "department-grid"
          );

          matched
            .filter(dept => dept.category === category)
            .forEach(dept => {

              const card = makeElement(
                "a",
                "department-card"
              );

              card.href =
                `department-detail.html?id=${encodeURIComponent(dept.id)}`;

              // 픽토그램
              const icon = createDepartmentIcon(
                dept,
                "card"
              );

              // 진료과 이름
              const title = makeElement(
                "strong",
                "",
                dept.name
              );

              card.append(icon, title);
              grid.appendChild(card);
            });

          section.appendChild(grid);
          listContainer.appendChild(section);
        });
      }

      /* ===== 검색 및 초기화 ===== */

      searchInput.addEventListener(
        "input",
        renderDepartments
      );

      if (searchButton) {
        searchButton.addEventListener(
          "click",
          renderDepartments
        );
      }

      if (resetButton) {
        resetButton.addEventListener("click", () => {
          searchInput.value = "";
          selectedCategory = "전체";

          renderFilters();
          renderDepartments();
        });
      }

      renderFilters();
      renderDepartments();
    }
  }


  /* ========================================
     4. 진료과 상세 페이지
     ======================================== */

  const detailContainer =
    document.getElementById("departmentDetail");

  if (detailContainer) {
    const params = new URLSearchParams(
      window.location.search
    );

    const id = params.get("id");

    const dept = departments.find(
      item => item.id === id
    );

    if (!dept) {
      detailContainer.appendChild(
        makeElement(
          "h1",
          "",
          "진료과를 찾을 수 없습니다."
        )
      );

      detailContainer.appendChild(
        makeElement(
          "p",
          "",
          "진료과 목록에서 다시 선택해 주세요."
        )
      );

      return;
    }

    document.title = `${dept.name} | H대학교 병원`;

    const crumbName =
      document.getElementById("breadcrumbDepartment");

    if (crumbName) {
      crumbName.textContent = dept.name;
    }

    /* ===== 상단 진료과 제목 + 픽토그램 ===== */

    const hero = makeElement(
      "div",
      "detail-hero"
    );

    // 왼쪽: 진료과 정보
    const heroCopy = makeElement(
      "div",
      "detail-hero-copy"
    );

    heroCopy.appendChild(
      makeElement(
        "span",
        "eyebrow",
        "MEDICAL DEPARTMENT"
      )
    );

    heroCopy.appendChild(
      makeElement("h1", "", dept.name)
    );

    heroCopy.appendChild(
      makeElement("p", "", dept.summary)
    );

    // 오른쪽: 픽토그램
    const heroIcon = createDepartmentIcon(
      dept,
      "detail"
    );

    hero.append(heroCopy, heroIcon);
    detailContainer.appendChild(hero);


    /* ===== 진료과 소개 ===== */

    const intro = makeElement(
      "section",
      "detail-section"
    );

    intro.appendChild(
      makeElement("h2", "", "진료과 소개")
    );

    intro.appendChild(
      makeElement(
        "p",
        "detail-description",
        dept.description
      )
    );

    detailContainer.appendChild(intro);


    /* ===== 주요 진료 분야 ===== */

    const specialtiesSection = makeElement(
      "section",
      "detail-section"
    );

    specialtiesSection.appendChild(
      makeElement("h2", "", "주요 진료 분야")
    );

    const specialtyList = makeElement(
      "div",
      "specialty-list"
    );

    dept.specialties.forEach(specialty => {
      specialtyList.appendChild(
        makeElement(
          "span",
          "specialty-item",
          specialty
        )
      );
    });

    specialtiesSection.appendChild(specialtyList);
    detailContainer.appendChild(specialtiesSection);

     /* ===== 소속 의료진 ===== */
     
   const doctorsSection = makeElement("section", "detail-section");
   doctorsSection.appendChild(
     makeElement("h2", "", "소속 의료진")
   );
   
   const doctorBox = makeElement("div", "department-doctor-grid");
   
   // 현재 진료과에 소속된 의료진 검색
   const departmentDoctors =
     typeof doctors !== "undefined"
       ? doctors.filter(doctor =>
        doctor.departmentId === dept.id &&
        doctor.hidden !== true
      )
    : [];
   
   if (departmentDoctors.length > 0) {
   
     departmentDoctors.forEach(doctor => {
   
       const card = makeElement("a", "department-doctor-card");
   
       card.href =
         `doctor-detail.html?id=${encodeURIComponent(doctor.id)}`;
   
       // 의료진 사진
       const photo = makeElement("div", "department-doctor-photo");
   
       if (doctor.photo) {
         const img = document.createElement("img");
         img.src = doctor.photo;
         img.alt = `${doctor.name} 의료진 사진`;
         img.loading = "lazy";
   
         img.addEventListener("error", () => {
           img.remove();
         });
   
         photo.appendChild(img);
       }
   
       // 의료진 정보
       const info = makeElement("div", "department-doctor-info");
   
       info.appendChild(
         makeElement("strong", "", doctor.name)
       );
   
       info.appendChild(
         makeElement("span", "", doctor.fields.join(", "))
       );
   
       info.appendChild(
         makeElement("span", "department-doctor-more", "상세보기 →")
       );
   
       card.append(photo, info);
       doctorBox.appendChild(card);
   
     });
   
   } else {
   
     doctorBox.appendChild(
       makeElement(
         "p",
         "department-doctor-empty",
         "등록된 의료진이 없습니다."
       )
     );
   
   }
   
   doctorsSection.appendChild(doctorBox);
   
   // 해당 진료과의 의료진 전체보기
   const allDoctorsLink = makeElement(
     "a",
     "outline-button department-doctor-all",
     "의료진 전체보기 →"
   );
   
   allDoctorsLink.href =
     `doctors.html?department=${encodeURIComponent(dept.id)}`;
   
   doctorsSection.appendChild(allDoctorsLink);
   detailContainer.appendChild(doctorsSection);

  }
});

   
