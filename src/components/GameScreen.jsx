import React from "react";
import useGameStore from "../../store/useGameStore";
import Avatar from "./Avatar";

const GameScreen = () => {
  // 게임 상태를 Zustand에서 가져오기
  const { 
    gameCategory,    // 현재 게임 테마
    timeLeft,        // 남은 시간
    currentOutfit,   // 현재 착용한 옷 상태
    changeClothing,  // 옷 변경 함수
    endGame,         // 게임 종료 함수
    decreaseTime     // 타이머 함수
  } = useGameStore();
  
  // 타이머
  // 1초마다 decreaseTime 함수를 실행
  React.useEffect(() => {
    const timer = setInterval(() => {
      decreaseTime(); // 1초 감소
    }, 1000);
    
    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 초기화 및 종료
  }, [decreaseTime]);
  
  // 옷 종류별 한글 이름 객체
  const clothingNames = {
    hair: '머리카락',
    top: '상의',
    bottom: '하의',
    shoe: '신발',
    socks: '양말'
  };
  
  return (
    <div className="screen game-screen"> {/* 게임 메인 화면 컨테이너 */}
      <div className="game-header"> {/* 헤더 - 테마, 타이머, 종료 버튼 */}
        <p>테마: {gameCategory}</p> {/* 현재 게임 테마 표시 */}
        <div className="timer">
          남은 시간: {timeLeft}초 {/* 남은 시간 표시 */}
        </div>
        <button className="end-button" onClick={endGame}>
          게임 종료 {/* 종료 버튼 클릭 시 게임 종료 함수 호출 */}
        </button>
      </div>
      
      <div className="game-content"> {/* 게임 컨텐츠 영역 */}
        <div className="avatar-section"> {/* 아바타 표시 */}
          <Avatar outfit={currentOutfit} /> {/* 현재 옷 상태를 아바타로 전달 */}
        </div>
        
        <div className="clothing-selection"> {/* 옷장 영역 */}
          {Object.keys(clothingNames).map(type => (
            <div key={type} className="clothing-group"> {/* 옷 종류별 그룹 */}
              <p>{clothingNames[type]}</p> {/* 종류별 한글명 표시 */}
              <div className="clothing-options"> {/* 옷 옵션들 */}
                {[1, 2, 3].map(num => ( // 옷 종류별 렌더링
                  <button
                    key={num}
                    className={`clothing-option ${currentOutfit[type] === num ? 'selected' : ''}`} // 선택된 옷은 selected로 변경
                    onClick={() => changeClothing(type, num)} // 버튼 클릭 시 옷 변경 함수 호출
                  >
                    <img 
                      src={`/images/${type}${num}.png`} // 옵션에 맞는 옷 이미지 경로 전달
                      alt={`옷`}
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;