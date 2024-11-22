import Course from "./Course";

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="card__header">강의 목록</div>
        <div className="card__body">
          <div className="courses">
            <Course />
            <Course />
            <Course />
          </div>
        </div>
      </div>
    </>
  );
}
