import { create } from 'zustand';

// Zustand 상태 관리
const useGameStore = create((set, get) => ({
  // 현재 화면 상태 - home, game, result 중 택 1
  currentScreen: 'home',

  // 게임 카테고리 초기화
  gameCategory: null,

  // 게임 시간을 40초로 지정
  timeLeft: 40,
  
  // 현재 착용중인 옷 초기화
  currentOutfit: {
    hair: 1,
    top: 1,
    bottom: 1,
    shoe: 1,
    socks: 1
  },
  
  // 최종 점수 초기화
  finalScore: 0,
  
  // 게임 시작 함수
  startGame: () => {
    const categories = ['시크', '큐트', '청순'];
    const randomCategory = categories[Math.floor(Math.random() * 3)];
    set({ 
      currentScreen: 'game', 
      gameCategory: randomCategory, 
      timeLeft: 40,
      currentOutfit: { hair: 1, top: 1, bottom: 1, shoe: 1, socks: 1 }
    });
  },
  
  // 옷 상태 변경 함수
  changeClothing: (type, number) => {
    const current = get().currentOutfit; // 현재 옷 상태를 가져옴
    set({ 
      currentOutfit: { ...current, [type]: number } // 해당 부위(type)만 number로 교체
    });
  },
  
  // 타이머 함수
  decreaseTime: () => {
    const currentTime = get().timeLeft;
    if (currentTime > 0) {
      set({ timeLeft: currentTime - 1 });
    }
    if (currentTime <= 1) {
      get().endGame();
    }
  },
  
  // 게임 종료 버튼 함수
  endGame: () => {
    const { currentOutfit, gameCategory } = get();
    const score = get().calculateScore(currentOutfit, gameCategory);
    set({ 
      currentScreen: 'result', 
      finalScore: score 
    });
  },
  
  // 점수 계산 로직
  calculateScore: (outfit, category) => {
    // 옷 각각의 테마별 점수 지정
    const scores = {
      hair: {
        1: { 시크: 20, 큐트: 5, 청순: 0 },
        2: { 시크: 0, 큐트: 20, 청순: 5 },
        3: { 시크: 5, 큐트: 0, 청순: 20 }
      },
      top: {
        1: { 시크: 20, 큐트: 5, 청순: 0 },
        2: { 시크: 0, 큐트: 20, 청순: 5 },
        3: { 시크: 5, 큐트: 0, 청순: 20 }
      },
      bottom: {
        1: { 시크: 20, 큐트: 5, 청순: 0 },
        2: { 시크: 0, 큐트: 20, 청순: 5 },
        3: { 시크: 5, 큐트: 0, 청순: 20 }
      },
      shoe: {
        1: { 시크: 20, 큐트: 5, 청순: 0 },
        2: { 시크: 0, 큐트: 20, 청순: 5 },
        3: { 시크: 5, 큐트: 0, 청순: 20 }
      },
      socks: {
        1: { 시크: 20, 큐트: 5, 청순: 0 },
        2: { 시크: 0, 큐트: 20, 청순: 5 },
        3: { 시크: 5, 큐트: 0, 청순: 20 }
      }
    };
    
    let totalScore = 0;
    Object.keys(outfit).forEach(type => {
      totalScore += scores[type][outfit[type]][category];
    });
    
    return totalScore;
  },
  
  // 홈으로 돌아가기
  goHome: () => {
    set({ 
      currentScreen: 'home', 
      gameCategory: null, 
      timeLeft: 40, 
      finalScore: 0 
    });
  }
}));

export default useGameStore