import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // useState Hook: allow to add the state to the function components
  // example will have the value of 'data'
  const [example, myExample] = useState(data);
  return <main><section>
    <h3>
      0 Birthday today
      <List />
    </h3>
    </section></main>;
}

export default App;
