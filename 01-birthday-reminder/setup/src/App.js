import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  // useState Hook: allow to add the state to the function components
  // example will have the value of 'data'
  const [example, myExample] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{example.length} Birthday today</h3>
        {/* props for List */}
        <List example = {example}/>
        <button onClick={() => console.log("Press me")}>
          Clear information
        </button>
      </section>
    </main>
  );
}

export default App;
