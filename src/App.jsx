import React from 'react';
import HomeScreen from './components/HomeScreen.jsx';
import GameScreen from './components/GameScreen.jsx'; 
import ResultScreen from './components/ResultScreen.jsx';
import useGameStore from '../store/useGameStore.js';
import './App.css'; 

const App = () => {
  const currentScreen = useGameStore(state => state.currentScreen); // 현재 보여질 화면 상태 가져오기
  
  return (
    <div className="app"> {/* 앱 전체 최상위 태그 */}
      {currentScreen === 'home' && <HomeScreen />} {/* 현재 화면이 home이면 홈 컴포넌트 렌더링 */}
      {currentScreen === 'game' && <GameScreen />} {/* 현재 화면이 game이면 게임 컴포넌트 렌더링 */}
      {currentScreen === 'result' && <ResultScreen />} {/* 현재 화면이 result면 결과 컴포넌트 렌더링 */}
    </div>
  );
};

export default App;

