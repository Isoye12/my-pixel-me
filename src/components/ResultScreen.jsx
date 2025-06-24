import useGameStore from "../../store/useGameStore";
import Avatar from "./Avatar";

const ResultScreen = () => {
  // 결과 화면에서 사용할 상태 및 함수 끌어오기
  const { finalScore, currentOutfit, gameCategory, goHome } = useGameStore();
  
  // 점수에 따른 피드백 문구 지정
  const getScoreMessage = (score) => {
    if (score >= 90) return "완벽해요! 당신은 스타일리스트 재능이 있어요! 🌟";
    if (score >= 80) return "정말 잘했어요! 센스가 뛰어나네요! 👏";
    if (score >= 70) return "좋아요! 조금만 더 신경쓰면 완벽할 거예요! 😊";
    if (score >= 60) return "나쁘지 않아요! 다음엔 더 잘할 수 있을 거예요! 💪";
    if (score >= 50) return "아쉬워요! 조금 더 테마에 맞게 입혀보세요! 🤔";
    return "다시 도전해보세요! 연습하면 늘어요! 🎯";
  };
  
  return (
    <div className="screen result-screen"> {/* 결과 화면 컨테이너 */}
      <h2>게임 결과</h2> {/* 제목 */}
      <div className="result-content"> {/* 결과 박스 */}
        <div className="final-avatar"> {/* 최종 아바타 표시 */}
          <Avatar outfit={currentOutfit} /> {/* 최종 착용 옷 상태 주기 */}
        </div>
        
        <div className="score-section"> {/* 점수 및 메시지 */}
          <div className="score-info">
            <p>테마: <span className="category">{gameCategory}</span></p> {/* 테마 표시 */}
            <p>점수: <span className="score">{finalScore}점</span></p> {/* 점수 표시 */}
          </div>
          <div className="score-message">
            {getScoreMessage(finalScore)} {/* 점수에 따라 피드백 문구 출력 */}
          </div>
        </div>
      </div>
      
      <button className="restart-button" onClick={goHome}> {/* 다시하기 버튼 클릭 시 홈 화면으로 이동 */}
        다시하기
      </button>
    </div>
  );
};

export default ResultScreen;