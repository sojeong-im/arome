export interface Product {
  id: string
  name: string
  englishName?: string
  technicalName: string
  flowerMeaning: string
  memoryTheme: string
  storyCopy: string
  description: string
  price: number
  image: string
  notes: {
    top: string[]
    middle: string[]
    base: string[]
  }
  volume: string
  category: string
}

export interface Event {
  id: string
  title: string
  description: string
  flowerMeaning: string
  story: string
  image: string
  formUrl: string
  status: "ongoing" | "upcoming" | "ended"
  startDate: string
  endDate: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "머무는 시선",
    englishName: "Silent Amber",
    technicalName: "로즈 드 메이 50ml",
    flowerMeaning: "사랑, 열정, 아름다움",
    memoryTheme: "오래 기억되는 사람의 온기",
    storyCopy: "말없이 오래 기억되는 사람의 온기. 장미는 수천 년 동안 사랑의 상징으로 여겨져 왔습니다.",
    description: "우아하고 클래식한 장미 향",
    price: 89000,
    image: "/rom_rose_fixed.jpg",
    notes: {
      top: ["베르가못", "핑크 페퍼"],
      middle: ["다마스크 로즈", "제라늄"],
      base: ["머스크", "앰버"],
    },
    volume: "50ml",
    category: "floral",
  },
  {
    id: "2",
    name: "고요한 안식",
    englishName: "Quiet Sanctuary",
    technicalName: "라벤더 뮤즈 50ml",
    flowerMeaning: "평온, 치유, 헌신",
    memoryTheme: "마음의 평화와 안정",
    storyCopy: "일상의 소란 속에서 찾은 고요한 쉼터. 라벤더는 고대부터 치유와 평온을 상징해왔습니다.",
    description: "평온함을 선사하는 라벤더 향",
    price: 79000,
    image: "/rom_round_fixed.jpg",
    notes: {
      top: ["라벤더", "레몬"],
      middle: ["아이리스", "바이올렛"],
      base: ["시더우드", "바닐라"],
    },
    volume: "50ml",
    category: "aromatic",
  },
  {
    id: "3",
    name: "달빛의 고백",
    englishName: "Moonlit Confession",
    technicalName: "자스민 누아 50ml",
    flowerMeaning: "신비, 관능, 우아함",
    memoryTheme: "밤에 피어나는 비밀스러운 감정",
    storyCopy: "달빛 아래 피어나는 은밀한 고백. 자스민은 밤에 가장 강렬한 향을 내뿜으며 신비로움을 간직합니다.",
    description: "신비롭고 관능적인 자스민 향",
    price: 95000,
    image: "",
    notes: {
      top: ["만다린", "그린 티"],
      middle: ["자스민", "일랑일랑"],
      base: ["샌달우드", "파촐리"],
    },
    volume: "50ml",
    category: "oriental",
  },
  {
    id: "4",
    name: "첫 시작의 이름",
    englishName: "Prelude of You",
    technicalName: "피오니 블룸 50ml",
    flowerMeaning: "행운, 번영, 새로운 시작",
    memoryTheme: "당신의 첫 장면을 응원하는 꽃말",
    storyCopy: "당신의 첫 장면을 응원하는 꽃말. 작약은 봄을 대표하는 꽃으로 새로운 시작과 풍요를 상징합니다.",
    description: "생기 넘치는 작약 향",
    price: 85000,
    image: "/rom_R.jpg",
    notes: {
      top: ["시트러스", "프리지아"],
      middle: ["피오니", "로즈"],
      base: ["화이트 머스크", "앰버"],
    },
    volume: "50ml",
    category: "floral",
  },
  {
    id: "5",
    name: "편지에 남은 향",
    englishName: "Letters in Bloom",
    technicalName: "아이리스 세레나 50ml",
    flowerMeaning: "희망, 지혜, 신뢰",
    memoryTheme: "말하지 못한 마음",
    storyCopy: "말하지 못한 마음이 향으로 남는 순간. 아이리스는 우아하고 파우더리한 향으로 은은한 감정을 전합니다.",
    description: "우아하고 파우더리한 아이리스 향",
    price: 92000,
    image: "",
    notes: {
      top: ["네롤리", "알데하이드"],
      middle: ["아이리스", "미모사"],
      base: ["베티버", "통카빈"],
    },
    volume: "50ml",
    category: "powdery",
  },
  {
    id: "6",
    name: "잊지 못한 오후",
    englishName: "Tea After Memory",
    technicalName: "가드니아 문 50ml",
    flowerMeaning: "순수한 기쁨, 은밀한 사랑",
    memoryTheme: "문득 떠오르는 얼굴",
    storyCopy: "문득 떠오르는 얼굴 같은 따뜻한 노트. 치자꽃은 달빛 아래 피어나며 순수하고 깊은 감정을 담습니다.",
    description: "달빛 아래 피어나는 치자꽃 향",
    price: 88000,
    image: "",
    notes: {
      top: ["베르가못", "카다몬"],
      middle: ["가드니아", "튜베로즈"],
      base: ["샌달우드", "바닐라"],
    },
    volume: "50ml",
    category: "floral",
  },
]

export const events: Event[] = [
  {
    id: "1",
    title: "꽃으로 남기는 목소리",
    description: "수만 가지 감정 중 당신의 오늘을 닮은 꽃 한 송이를 골라보세요. 화이트 월(White Wall) 위, 당신의 짧은 고백이 꽃과 함께 하나의 전시가 됩니다.",
    flowerMeaning: "표현하지 못한 감정, 꽃말로 전하는 마음",
    story:
      "전하지 못한 마음은 머릿속을 맴돌다 결국 향기로만 남곤 합니다. AROM의 '꽃으로 남기는 목소리' 이벤트는 그 실체 없는 감정에 꽃의 얼굴을 빌려주는 시간입니다. 전시장 한쪽에 마련된 12가지 꽃 중, 당신의 마음을 가장 잘 대변하는 꽃 한 송이를 골라보세요. 함께 제공되는 태그 카드에 대상과 짧은 문장을 적어 메시지 월에 직접 꽂아주시면, 그 순간 당신의 감정은 향기로운 기록으로 완성됩니다. 누군가에게는 위로가, 누군가에게는 용기가 될 이 꽃의 벽에 당신의 목소리를 보태주세요.",
    image: "/event-message-wall.png",
    formUrl: "https://forms.google.com/flower-message",
    status: "ongoing",
    startDate: "2025-08-10",
    endDate: "2025-12-24",
  },
  {
    id: "2",
    title: "기억의 시향실",
    description: "당신의 생에서 가장 빛나던 찰나, 혹은 가장 아련했던 기억을 '향기'로 조제해 드립니다. 조향사와의 심도 깊은 1:1 인터뷰를 통해 잊고 있던 당신만의 계절을 찾아보세요.",
    flowerMeaning: "기억, 계절, 감정의 향기화",
    story:
      "모든 향에는 저마다의 서사가 담겨 있습니다. '기억의 시향실'은 텍스트나 이름이 아닌, 오직 당신의 기억을 바탕으로 향을 찾아가는 여정입니다. 프라이빗한 상담석에서 조향사가 묻는 질문들에 답하며 마음속에 묻어두었던 계절의 온도, 공기의 질감, 당시의 습도를 떠올려보세요. 당신의 답변을 통해 분석된 감정 차트를 기반으로 가장 어울리는 세 가지 향을 추천해 드립니다. 상담이 끝난 후에는 당신의 기억이 담긴 시향지와 함께, 그날의 인터뷰 결과를 기록한 아카이브 카드를 선물로 드립니다.",
    image: "/scent-interview-new.png",
    formUrl: "https://forms.google.com/scent-memory",
    status: "ongoing",
    startDate: "2025-08-10",
    endDate: "2025-12-24",
  },
  {
    id: "3",
    title: "편지 대신, 향을 보냅니다",
    description: "글자보다 먼저 코끝에 닿는 진심. 사랑하는 이에게 잊지 못할 향기와 함께 당신의 마음을 우편으로 보내보세요. 익명 발송으로 신비로운 설렘을 선물할 수도 있습니다.",
    flowerMeaning: "전하지 못한 마음, 향기로 전달되는 편지",
    story:
      "우리가 누군가를 떠올릴 때, 가장 먼저 기억되는 것은 그 사람의 향기일지도 모릅니다. 이번 이벤트는 뻔한 편지 대신, 당신의 진심이 담긴 향기를 직접 배달해 드리는 특별한 프로그램입니다. AROM의 시그니처 향 6종 중 상대방에게 전하고 싶은 분위기를 선택하고, 정성스럽게 준비된 실링 왁스 봉투에 짧은 메시지를 동봉하세요. 당신이 고른 향기는 전용 센티드 페이퍼(Scented Paper)에 깊게 베어든 채, 정성스러운 패키지에 담겨 그 사람의 문 앞까지 전달됩니다. 직접 말하기 쑥스러운 고백이나 고마움을 향기에 빌려 전해보는 건 어떨까요?",
    image: "/event-scented-letter.png",
    formUrl: "https://forms.google.com/scented-letter",
    status: "upcoming",
    startDate: "2025-03-01",
    endDate: "2025-04-30",
  },
  {
    id: "4",
    title: "성수의 향기: 꽃말이 머무는 전시",
    description: "성수동의 붉은 벽돌 골목 끝, 낡은 건물을 따스한 조명과 꽃으로 가득 채운 AROM의 팝업 전시가 열립니다. 오감을 자극하는 향기 도슨트를 체험해 보세요.",
    flowerMeaning: "그리움, 고백, 그리고 당신을 향한 진심",
    story:
      "이번 전시는 단순히 향을 맡는 것을 넘어, 꽃이 가진 고유한 '삶의 태도(꽃말)'를 오감으로 느끼는 공간입니다. 전시장 곳곳에 숨겨진 QR 코드를 통해 각 꽃의 비하인드 스토리와 조향 노트의 정체성을 도슨트의 음성처럼 들을 수 있습니다. 마지막 섹션인 '선택의 방'에서는 시향한 향 중 '내가 아닌 누군가'를 떠올리게 하는 향을 골라, 그를 향한 꽃말 쪽지를 남겨주세요. 전시 기간 중 매주 3명을 선정하여, 당신이 적은 쪽지와 함께 해당 실물 향수를 작성하신 주소로 직접 배송해 드리는 깜짝 이벤트도 진행됩니다.",
    image: "/seongsu-scent-exhibition-main.png",
    formUrl: "https://forms.google.com/seongsu-exhibition",

    status: "ongoing",
    startDate: "2026-03-01",
    endDate: "2026-06-30",
  },
]

