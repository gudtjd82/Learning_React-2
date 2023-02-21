import React from "react";

const MyComponent = (props) => {
  return (
    <div>
      <h1>안녕하세요 제 이름은 {props.children}입니다.</h1>
    </div>
  );
};
MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
