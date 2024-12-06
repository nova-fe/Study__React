import { Fragment } from "react";
import Card from "../Card";
import CourseItem from "./CourseItem";

export default function CourseListCard({ title, items, onToggleFavorite }) {
  // items: 객체를 구조분해할당으로 가져옴

  // items.length - 1 : 배열의 마지막 index
  const lastIndex = items.length - 1;
  return (
    <Card title={title}>
      <div className="courses">
        {/* map 사용해서 여러개 출력하기
            => map을 통해서 리스트를 렌더링 할 때에는 꼭 'key' 값이 있어야 함
         */}
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <CourseItem {...item} onToggleFavorite={onToggleFavorite} />
            {/* 마지막 index가 아닌 경우만 hr 구분선 표시 */}
            {index !== lastIndex && <hr className="divider" />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
}
