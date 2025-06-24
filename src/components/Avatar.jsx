const Avatar = ({ outfit }) => {
  return (
    <div className="avatar-container"> {/* 아바타 이미지 정렬 컨테이너 */}
      <div> {/* 이미지 감싸주는 태그 */}
        <img src="/images/man.png" alt="아바타" className="avatar-base" /> {/* 기본 아바타 이미지 */}
        <img src={`/images/socks${outfit.socks}.png`} alt="양말" className="clothing socks" /> {/* 양말 이미지 - outfit.socks 값에 따라 변경 */}
        <img src={`/images/shoe${outfit.shoe}.png`} alt="신발" className="clothing shoe" /> {/* 신발 이미지 - outfit.shoe 값에 따라 변경 */}
        <img src={`/images/bottom${outfit.bottom}.png`} alt="하의" className="clothing bottom" /> {/* 하의 이미지 - outfit.bottom 값에 따라 변경 */}
        <img src={`/images/top${outfit.top}.png`} alt="상의" className="clothing top" /> {/* 상의 이미지 - outfit.top 값에 따라 변경 */}
        <img src={`/images/hair${outfit.hair}.png`} alt="머리카락" className="clothing hair" /> {/* 머리카락 이미지 - outfit.hair 값에 따라 변경 */}
      </div>
    </div>
  );
};

export default Avatar;