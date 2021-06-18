import React from "react";

const List = ({ example }) => {
  // Destructuring the example
  const { id, name, age, image } = example;
  return (
    <>
      <h2>list component</h2>
      <h2>{example[0].id}</h2>
    </>
  );
};

export default List;
