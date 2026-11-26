
/* ==========================================
   H대학교병원 - 의료진 데이터
   H University Hospital

   ★ 모든 의료진은 창작용 가상 인물입니다.
   ★ departmentId: departments.js의 id와 일치
   ★ id: 의료진 고유값 (중복 금지)
   ★ fields: 전문 진료 분야
   ★ clinics: 전문 클리닉
   ★ schedule: 오전 / 오후 진료 일정
     0 = 월요일, 1 = 화요일, 2 = 수요일
     3 = 목요일, 4 = 금요일
   ★ reservable: 인터넷 예약 가능 여부
   ★ career: 학력 및 경력
   ★ papers: 연구 논문
   ★ news: 관련 병원 소식
   ========================================== */


/* ==========================================
   의료진 데이터 공통 생성 함수
   ========================================== */

function createDoctor(
  id,
  name,
  departmentId,
  fields,
  am,
  pm,
  options = {}
) {
  return {
    id: id,
    name: name,
    departmentId: departmentId,

    // 의료진 프로필 사진
    photo: `../images/doctors/${id}.jpg`,

    // 의료진 직위
    position: "교수",

    // 일반 의료진 목록에서 숨김 여부
    hidden: false,

    // 전문 진료 분야
    fields: fields,

    // 전문 클리닉 및 특이사항
    clinics: [],
    specialNotes: [],

    // 진료 일정
    schedule: {
      am: am,
      pm: pm
    },

    // 인터넷 예약 가능 여부
    reservable: true,

    // 기본 학력 및 경력
    career: [
      "H대학교 의과대학 졸업",
      "H대학교병원 전공의 수료",
      "현 H대학교병원 교수"
    ],

    // 연구 논문 및 관련 소식
    papers: [],
    news: [],

    // 의료진별 개별 설정
    ...options
  };
}


/* ==========================================
   의료진 전체 목록
   ========================================== */

const doctors = [

  /* ========================================
     1. 내과계
     ======================================== */


  /* ===== 감염내과 ===== */

  createDoctor(
    "infectious-01",
    "김태원",
    "infectious",
    ["감염질환", "불명열", "항생제 내성균 감염"],
    [0, 2],
    [1, 3],
    {
      career: [
        "H대학교 의과대학 졸업",
        "H대학교 의학박사",
        "H대학교병원 감염내과 전임의",
        "현 H대학교병원 감염내과 교수"
      ]
    }
  ),

  createDoctor(
    "infectious-02",
    "정유진",
    "infectious",
    ["해외유입 감염병", "말라리아", "여행자 감염질환"],
    [1, 4],
    [0, 2],
    {
      clinics: [
        { name: "여행의학 클리닉" }
      ]
    }
  ),

  createDoctor(
    "infectious-03",
    "이승현",
    "infectious",
    ["신우신염", "균혈증", "면역저하 환자의 감염"],
    [2, 3],
    [1, 4]
  ),


  /* ===== 내분비내과 ===== */

  createDoctor(
    "endocrinology-01",
    "송성문",
    "endocrinology",
    ["당뇨병", "이상지질혈증", "대사증후군"],
    [0, 2, 4],
    [1],
    {
      photo: "../images/doctors/ssm.jpg",
      clinics: [
        { name: "당뇨병 클리닉" }
         ],
      career: [
        "H대학교 의과대학 졸업",
        "H대학교 의학박사",
        "H대학교병원 내분비내과 전임의",
        "현 H대학교병원 내분비내과 조교수"
         ]
    }
  ),

  createDoctor(
    "endocrinology-02",
    "한지혜",
    "endocrinology",
    ["갑상선질환", "갑상선결절", "골다공증"],
    [1, 3],
    [0, 4]
  ),

  createDoctor(
    "endocrinology-03",
    "윤재호",
    "endocrinology",
    ["뇌하수체 질환", "부신 질환", "내분비성 고혈압"],
    [0, 4],
    [2, 3]
  ),


  /* ===== 소화기내과 ===== */

  createDoctor(
    "gastroenterology-01",
    "최현석",
    "gastroenterology",
    ["위장관 질환", "위암", "치료내시경"],
    [0, 2],
    [3, 4],
    {
      clinics: [
        { name: "위장관 질환 클리닉" }
      ]
    }
  ),

  createDoctor(
    "gastroenterology-02",
    "서민정",
    "gastroenterology",
    ["염증성 장질환", "대장질환", "대장내시경"],
    [1, 3],
    [0, 2],
    {
      clinics: [
        { name: "염증성 장질환 클리닉" }
      ]
    }
  ),

  createDoctor(
    "gastroenterology-03",
    "강준혁",
    "gastroenterology",
    ["췌장질환", "담도질환", "췌담도 내시경"],
    [2, 4],
    [1, 3]
  ),


  /* ===== 신장내과 ===== */

  createDoctor(
    "nephrology-01",
    "오정훈",
    "nephrology",
    ["만성 신부전", "혈액투석", "당뇨병성 신증"],
    [0, 2, 4],
    [1],
    {
      clinics: [
        { name: "만성콩팥병 클리닉" }
      ]
    }
  ),

  createDoctor(
    "nephrology-02",
    "문소연",
    "nephrology",
    ["사구체신염", "혈뇨 및 단백뇨", "복막투석"],
    [1, 3],
    [0, 4]
  ),


  /* ===== 심장내과 ===== */

  createDoctor(
    "cardiology-01",
    "권도현",
    "cardiology",
    ["협심증", "심근경색", "관상동맥 중재시술"],
    [0, 3],
    [1, 4]
  ),

  createDoctor(
    "cardiology-02",
    "임수진",
    "cardiology",
    ["부정맥", "심방세동", "심장 전기생리학"],
    [1, 4],
    [0, 2],
    {
      clinics: [
        { name: "부정맥 클리닉" }
      ]
    }
  ),

  createDoctor(
    "cardiology-03",
    "장민석",
    "cardiology",
    ["심부전", "심근병증", "심장초음파"],
    [2, 3],
    [1, 4]
  ),


  /* ===== 알레르기내과 ===== */

  createDoctor(
    "allergy-01",
    "배은영",
    "allergy",
    ["기관지천식", "알레르기 비염", "만성기침"],
    [0, 2],
    [1, 3],
    {
      clinics: [
        { name: "천식 클리닉" }
      ]
    }
  ),

  createDoctor(
    "allergy-02",
    "신유진",
    "allergy",
    ["만성 두드러기", "약물알레르기", "아나필락시스"],
    [1, 4],
    [2, 3]
  ),


  /* ===== 호흡기내과 ===== */

  createDoctor(
    "pulmonology-01",
    "조성환",
    "pulmonology",
    ["만성폐쇄성폐질환", "폐렴", "호흡부전"],
    [0, 2, 4],
    [1]
  ),

  createDoctor(
    "pulmonology-02",
    "유혜원",
    "pulmonology",
    ["간질성 폐질환", "폐결핵", "기관지내시경"],
    [1, 3],
    [0, 4]
  ),


  /* ========================================
     2. 외과계
     ======================================== */

  /* ===== 간담췌외과 ===== */

  createDoctor(
    "hepatobiliary-surgery-01",
    "김영준",
    "hepatobiliary-surgery",
    ["간암", "간 종양", "복강경 간절제술"],
    [0, 3],
    [2]
  ),

  createDoctor(
    "hepatobiliary-surgery-02",
    "이동욱",
    "hepatobiliary-surgery",
    ["췌장암", "담도암", "췌담도 수술"],
    [1, 4],
    [3]
  ),

  createDoctor(
    "hepatobiliary-surgery-03",
    "정하윤",
    "hepatobiliary-surgery",
    ["담석증", "담낭염", "복강경 담낭절제술"],
    [2, 4],
    [0]
  ),


  /* ===== 대장항문외과 ===== */

  createDoctor(
    "proctology-01",
    "박재윤",
    "proctology",
    ["대장암", "직장암", "로봇 대장수술"],
    [0, 2],
    [4]
  ),

  createDoctor(
    "proctology-02",
    "김건희",
    "proctology",
    ["항문질환", "직장탈출증"],
    [1, 3],
    [2, 4],
     {
        career: [
        "H대학교 의과대학 졸업",
        "H대학교 석사",
        "현 H대학교병원 대장항문외과 전임의"
           ]
     }
  ),


  /* ===== 위장관외과 ===== */

  createDoctor(
    "gastrointestinal-surgery-01",
    "최경훈",
    "gastrointestinal-surgery",
    ["위암", "위 종양", "복강경 위절제술"],
    [0, 3],
    [1]
  ),

  createDoctor(
    "gastrointestinal-surgery-02",
    "송현우",
    "gastrointestinal-surgery",
    ["소장 종양", "탈장", "위식도역류질환 수술"],
    [1, 4],
    [2]
  ),


  /* ===== 유방갑상선외과 ===== */

  createDoctor(
    "breast-surgery-01",
    "김은채",
    "breast-surgery",
    ["유방암", "유방 양성종양", "유방보존술"],
    [0, 2, 4],
    [1],
    {
      clinics: [
        { name: "유방암 클리닉" }
      ]
    }
  ),

  createDoctor(
    "breast-surgery-02",
    "남지훈",
    "breast-surgery",
    ["갑상선암", "갑상선결절", "부갑상선질환"],
    [1, 3],
    [0, 4],
    {
      clinics: [
        { name: "갑상선 클리닉" }
      ]
    }
  ),


  /* ===== 심장혈관흉부외과 ===== */

  createDoctor(
    "cardiac-surgery-01",
    "이정후",
    "cardiac-surgery",
    ["심장판막질환", "관상동맥우회술", "대동맥 질환"],
    [0, 3],
    [2],
     {
      photo: "../images/doctors/ljh.jpg",
      career: [
        "H대학교 의과대학 졸업",
        "H대학교 의학박사",
        "H대학교병원 흉부외과 전임의",
        "현 H대학교병원 심장혈관흉부외과 조교수"
      ],
     }
  ),

  createDoctor(
    "cardiac-surgery-02",
    "이건호",
    "cardiac-surgery",
    ["폐암", "폐 종양", "흉강경 수술"],
    [1, 4],
    [3]
  ),

  createDoctor(
    "cardiac-surgery-03",
    "안우진",
    "cardiac-surgery",
    ["심장판막", "심부전", "흉부외상", "중환자"],
    [2, 4],
    [0],
     {
        photo: "../images/doctors/awj.jpg",
        career: [
        "H대학교 의과대학 졸업",
        "H대학교병원 심장혈관흉부외과 전임의",
        "H대학교 의학박사",
        "현 H대학교병원 심장혈관흉부외과 조교수"
           ],
        reservable: false,
        specialNotes: ["외상환자 외래진료는 전화문의 바랍니다"],
           }
     ),
   
    createDoctor(
       "cardiac-surgery-04",
       "권혁빈",
       "cardiac-surgery",
       [""],
       [0],
       [2],
        {
         position: "인턴",
         hidden: true,
         photo: "../images/doctors/khb.jpg",
         career: [
           "H대학교 의과대학 졸업",
           "H대학교병원 흉부외과 인턴"
         ],
        }
     ),


  /* ===== 정형외과 ===== */

  createDoctor(
    "orthopedics-01",
    "한승우",
    "orthopedics",
    ["척추질환", "척추관협착증", "척추외상"],
    [0, 2],
    [3],
    {
      clinics: [
        { name: "척추 클리닉" }
      ]
    }
  ),

  createDoctor(
    "orthopedics-02",
    "서준영",
    "orthopedics",
    ["슬관절질환", "고관절질환", "인공관절수술"],
    [1, 3],
    [0, 4]
  ),

  createDoctor(
    "orthopedics-03",
    "추재현",
    "orthopedics",
    ["견관절질환", "스포츠 손상", "관절경 수술"],
    [2, 4],
    [1, 3],
    {
      photo: "../images/doctors/cjh.jpg",
      clinics: [
        { name: "스포츠의학 클리닉" }
      ],
       career: [
        "H대학교 의과대학 졸업",
        "D대학교병원 전공의",
        "G대학교 사직병원 정형외과 전임의",
        "현 H대학교병원 정형외과 조교수"
          ],
    }
  ),


  /* ===== 신경외과 ===== */

  createDoctor(
    "neurosurgery-01",
    "서건창",
    "neurosurgery",
    ["뇌동맥류", "뇌혈관질환", "뇌출혈"],
    [0, 3],
    [2],
     {
        photo: "../images/doctors/sgc.jpg",
        career: [
        "H대학교 의과대학 졸업",
        "H대학교 의학박사",
        "K대학교 광주병원 신경외과 전임의",
        "현 H대학교병원 신경외과 부교수"
           ],
     }
  ),

  createDoctor(
    "neurosurgery-02",
    "류지환",
    "neurosurgery",
    ["뇌종양", "척추질환", "척추종양"],
    [1, 4],
    [0, 3]
  ),


  /* ========================================
     3. 진료과
     ======================================== */


  /* ===== 마취통증의학과 ===== */

  createDoctor(
    "anesthesiology-01",
    "배동현",
    "anesthesiology",
    ["수술마취", "심폐마취", "중환자 관리"],
    [],
    [],
    {
      photo: "../images/doctors/bdh.jpg",
      career: [
        "S대학교 의과대학 졸업",
        "H대학교 의학박사",
        "E대학교 서산병원 마취통증의학과 전임의",
        "현 H대학교병원 마취통증의학과 조교수"
         ],
      reservable: false
    }
  ),

  createDoctor(
    "anesthesiology-02",
    "양서현",
    "anesthesiology",
    ["척추 수술 후 통증", "신경병증성 통증", "삼차신경통"],
    [0, 2],
    [1, 4],
    {
      clinics: [
        { name: "통증 클리닉" }
      ]
    }
  ),

  createDoctor(
    "anesthesiology-03",
    "허준석",
    "anesthesiology",
    ["암성 통증", "복합부위통증증후군", "만성통증"],
    [1, 3],
    [2, 4]
  ),


  /* ===== 병리과 ===== */

  createDoctor(
    "pathology-01",
    "이선영",
    "pathology",
    ["조직병리", "소화기병리", "종양병리"],
    [],
    [],
    {
      reservable: false
    }
  ),

  createDoctor(
    "pathology-02",
    "정재원",
    "pathology",
    ["세포병리", "분자병리", "유방병리"],
    [],
    [],
    {
      reservable: false
    }
  ),


  /* ===== 산부인과 ===== */

  createDoctor(
    "obgyn-01",
    "박병호",
    "obgyn",
    ["고위험 임신", "산전관리", "태아의학"],
    [0, 2, 4],
    [1],
    {
      photo: "../images/doctors/pbh.jpg",
      clinics: [
        { name: "고위험 임신 클리닉" }
      ],
      career: [
        "L대학교 의과대학 졸업",
        "H대학교 의학박사",
        "H대학교병원 산부인과 전임의",
        "S대학교병원 산부인과 조교수",
        "현 H대학교병원 산부인과 부교수"
         ],
    }
  ),

  createDoctor(
    "obgyn-02",
    "김도윤",
    "obgyn",
    ["난소암", "자궁암", "부인종양 수술"],
    [1, 3],
    [0, 4]
  ),

  createDoctor(
    "obgyn-03",
    "김하성",
    "obgyn",
    ["자궁근종", "자궁내막증", "생식내분비 및 불임"],
    [2, 4],
    [1, 3]
     {
photo: "../images/doctors/khs2.jpg",
      clinics: [
        { name: "고위험 임신 클리닉" }
      ],
      career: [
        "H대학교 의과대학 졸업",
        "H대학교 의학박사",
        "H대학교병원 산부인과 전임의",
        "H대학교병원 산부인과 조교수",
         ],
}

  ),


  /* ===== 소아청소년과 ===== */

  createDoctor(
    "pediatrics-01",
    "김지훈",
    "pediatrics",
    ["소아 성장장애", "성조숙증", "소아내분비질환"],
    [0, 2, 4],
    [1, 3],
    {
      clinics: [
        { name: "성장발달 클리닉" }
      ],
      career: [
        "H대학교 의과대학 졸업",
        "H대학교 의학석사",
        "H대학교병원 소아청소년과 전공의",
        "H대학교병원 소아내분비 전임의",
        "현 H대학교병원 소아청소년과 교수"
      ]
    }
  ),

  createDoctor(
    "pediatrics-02",
    "임병욱",
    "pediatrics",
    ["소아 호흡기질환", "소아 알레르기", "소아 일반진료"],
    [1, 3],
    [0, 2, 4],
    {
      photo: "../images/doctors/lbw.jpg",
      clinics: [
        { name: "소아 알레르기 클리닉" }
         ],
      career: [
        "H대학교 의과대학 졸업",
        "H대학교 의학박사",
        "H대학교병원 소아청소년과 전임의",
        "현 H대학교병원 소아청소년과 조교수"
      ]
    }
  ),

  createDoctor(
    "pediatrics-03",
    "김혜성",
    "pediatrics",
    ["소아뇌전증", "발달지연", "소아 희귀질환"],
    [0, 4],
    [2, 3],
    {
      photo: "../images/doctors/khs.jpg",
      clinics: [
        { name: "소아신경 클리닉" }
      ],
      career: [
        "H대학교 의과대학 졸업",
        "H대학교 의학박사",
        "H대학교병원 소아청소년과 전임의",
        "현 H대학교병원 소아청소년과 조교수"
         ]
    }
  ),


  /* ===== 응급의학과 ===== */

  createDoctor(
    "emergency-medicine-01",
    "이주형",
    "emergency-medicine",
    ["응급의학", "중증외상", "소생의학"],
    [],
    [],
    {
      photo: "../images/doctors/ljh2.jpg",
      career: [
        "L대학교 의과대학 졸업",
        "H대학교 의학박사",
        "H대학교병원 응급의학과 전임의",
         ],
      reservable: false
    }
  ),

  createDoctor(
    "emergency-medicine-02",
    "문지은",
    "emergency-medicine",
    ["중환자의학", "응급중독", "응급초음파"],
    [],
    [],
    {
      reservable: false
    }
  ),


  /* ===== 신경과 ===== */

  createDoctor(
    "neurology-01",
    "박진우",
    "neurology",
    ["뇌졸중", "뇌혈관질환", "일과성 허혈발작"],
    [0, 2],
    [1, 4]
  ),

  createDoctor(
    "neurology-02",
    "신혜림",
    "neurology",
    ["치매", "인지기능장애", "파킨슨병"],
    [1, 3],
    [0, 4],
    {
      clinics: [
        { name: "기억장애 클리닉" }
      ]
    }
  ),

  createDoctor(
    "neurology-03",
    "오민규",
    "neurology",
    ["두통", "어지럼증", "말초신경질환"],
    [2, 4],
    [1, 3],
    {
      clinics: [
        { name: "두통 클리닉" }
      ]
    }
  ),


  /* ===== 안과 ===== */

  createDoctor(
    "ophthalmology-01",
    "정유석",
    "ophthalmology",
    ["백내장", "각막질환", "안구건조증"],
    [0, 2, 4],
    [1]
  ),

  createDoctor(
    "ophthalmology-02",
    "한예진",
    "ophthalmology",
    ["망막질환", "당뇨망막병증", "녹내장"],
    [1, 3],
    [0, 4]
  ),


  /* ===== 이비인후과 ===== */

  createDoctor(
    "otorhinolaryngology-01",
    "이상윤",
    "otorhinolaryngology",
    ["난청", "이명", "중이염", "어지럼증"],
    [0, 2],
    [1, 4],
    {
      clinics: [
        { name: "난청 및 이명 클리닉" }
      ]
    }
  ),

  createDoctor(
    "otorhinolaryngology-02",
    "김채원",
    "otorhinolaryngology",
    ["알레르기 비염", "부비동염", "비중격질환"],
    [1, 3],
    [0, 2]
  ),

  createDoctor(
    "otorhinolaryngology-03",
    "정우석",
    "otorhinolaryngology",
    ["인후두질환", "음성질환", "수면무호흡"],
    [2, 4],
    [1, 3],
    {
      clinics: [
        { name: "수면무호흡 클리닉" }
      ]
    }
  ),


  /* ===== 정신건강의학과 ===== */

  createDoctor(
    "psychiatry-01",
    "서지연",
    "psychiatry",
    ["우울증", "불안장애", "공황장애"],
    [0, 2, 4],
    [1],
    {
      clinics: [
        { name: "기분장애 클리닉" }
      ]
    }
  ),

  createDoctor(
    "psychiatry-02",
    "김윤하",
    "psychiatry",
    ["조현병", "양극성장애", "망상장애"],
    [1, 3],
    [0, 4],
     {
        photo: "../images/doctors/kyh.jpg",
        career: [
        "H대학교 의과대학 졸업",
        "H대학교 의학박사",
        "H대학교병원 정신건강의학과 전임의",
        "현 H대학교병원 정신건강의학과 조교수"
           ]
     }
  )


  /* ========================================
     ★ 새로운 의료진은 이 위에 추가하세요.
     ★ 기존 마지막 항목 뒤에 쉼표를 추가한 후
       createDoctor() 형식으로 작성하면 됩니다.
     ======================================== */

];
    
