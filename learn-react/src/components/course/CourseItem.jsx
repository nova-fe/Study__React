function FavoriteBtn({ onLikeClick, isFavorite }) {
  // 이벤트 핸들러 함수를 props로 전달할 때는 props명 앞에 on 프리픽스를 붙임
  return (
    // onClick에는 함수 형태로 넘겨줘야함(실행 X)
    // 화살표 함수로 넣는 것도 가능. 주의: 이벤트에 이벤트 핸들러 함수를 가져올 때엔 첫번째 매개변수로 event 객체를 받는다.
    // </button><button className="btn" onClick={(e) => onLikeClick(e)}> =>
    <button className="btn" onClick={onLikeClick}>
      <img className="btn__image" src={isFavorite ? "./img/heart-fill-icon.svg" : "./img/heart-icon.svg"} />
    </button>
  );
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__image" src="./img/link-icon.svg" alt="" />
    </a>
  );
}

export default function CourseItem({ title, description, thumbnail, isFavorite, link }) {
  function handleFavorite() {
    // 명명적으로 이벤트 핸들러 함수를 정의 할 때는 앞에 handle 프리픽스를 붙임
    alert(isFavorite ? "좋아요" : "모르겠어요");
  }

  function handleItemClick() {
    alert("Item Click!");
    window.open(link, "_blank");
  }

  return (
    <article className="course" onClick={handleItemClick}>
      <img className="course__img" src={thumbnail} alt="강의이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <FavoriteBtn isFavorite={isFavorite} onLikeClick={handleFavorite} />
        {
          // && 연산자: 앞의 것이 true 면 뒤의 값 반환, false 면 앞의 값 반환
          // 여기선 link의 값이 없으면 아무것도 보여주지 않고, 값이 있으면 뒤의 link를 보여줄 수 있도록 함.
          link && <LinkIconBtn link={link} />
        }
      </div>
    </article>
  );
}
