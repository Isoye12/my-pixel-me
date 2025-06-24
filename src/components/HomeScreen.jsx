import useGameStore from "../../store/useGameStore";

const HomeScreen = () => {
  const startGame = useGameStore(state => state.startGame); // 게임 시작하기 가져오기
  
  return (
    <div className="screen home-screen"> {/* 홈 화면 컨테이너 */}
      <div className="game-description"> {/* 게임 설명 */}
        <h1>미영이 꾸미기</h1> {/* 게임 제목 */}
        <h2>나만의 개성 만들기를 연습하세요</h2> {/* 부제 */}
        <div>
          <p>40초 안에 주어진 스타일에 맞게 옷을 입혀보세요</p> {/* 게임 방법 설명 */}
          <p>하나의 테마가 주어집니다. 최대 점수를 노리세요!</p>
        </div>
      </div>
      <button className="start-button" onClick={startGame}> {/* 시작 버튼 클릭 시 게임 시작 */}
        시작하기
      </button>
    </div>
  );
};

export default HomeScreen;