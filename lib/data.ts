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
    image: "/arome-rose-silent-amber-perfume.jpg",
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
    image: "/arome-lavender-quiet-sanctuary-perfume.jpg",
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
    image: "/arome-jasmine-moonlit-confession-perfume.jpg",
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
    image: "/arome-peony-prelude-perfume.jpg",
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
    image: "/arome-iris-letters-bloom-perfume.jpg",
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
    image: "/arome-gardenia-tea-memory-perfume.jpg",
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
    description: "말 대신 꽃을 고르고, 벽에 꽂으며 감정을 남기는 참여형 이벤트",
    flowerMeaning: "표현하지 못한 감정, 꽃말로 전하는 마음",
    story:
      "당신이 전하지 못한 말이 있다면, 이제는 꽃으로 남겨주세요. 글이 아닌 꽃과 향으로 고백하는 시간입니다. 현장에서 꽃을 선택하고, 태그 카드에 짧은 마음을 적어 메시지 월에 꽂아주세요. 당신의 감정이 향기로 기록됩니다.",
    image: "/flower-message-wall.jpg",
    formUrl: "https://forms.google.com/flower-message",
    status: "ongoing",
    startDate: "2025-08-10",
    endDate: "2025-12-24",
  },
  {
    id: "2",
    title: "기억의 시향실",
    description: "당신의 기억과 감정을 듣고, 어울리는 향을 제안하는 1:1 경험형 이벤트",
    flowerMeaning: "기억, 계절, 감정의 향기화",
    story:
      "당신의 어느 순간을 향으로 남긴다면, 어떤 계절인가요? 참가자의 기억과 감정을 듣고, 그에 어울리는 향을 시향과 인터뷰로 제안합니다. 인터뷰 테이블에서 당신만의 향을 발견하고, 결과 카드 또는 미니 향을 받아가세요.",
    image: "/scent-memory-interview.jpg",
    formUrl: "https://forms.google.com/scent-memory",
    status: "ongoing",
    startDate: "2025-08-10",
    endDate: "2025-12-24",
  },
  {
    id: "3",
    title: "편지 대신, 향을 보냅니다",
    description: "마음을 전하고 싶은 사람에게 향으로 편지를 보내는 이벤트",
    flowerMeaning: "전하지 못한 마음, 향기로 전달되는 편지",
    story:
      "이 향을 전합니다. 말로는 다 하지 못한 마음이니까요. 마음을 전하고 싶은 사람에게 향수나 고체향에 짧은 문장을 담아 전달하세요. 향 엽서, 꽃 스티커, QR 코드 또는 실제 배송으로 당신의 마음이 향기와 함께 전해집니다. 익명 발송도 가능합니다.",
    image: "/scented-letter-delivery.jpg",
    formUrl: "https://forms.google.com/scented-letter",
    status: "upcoming",
    startDate: "2025-03-01",
    endDate: "2025-04-30",
  },
]
