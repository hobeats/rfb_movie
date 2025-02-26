import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("Bye :(");
  }
  function hyFn() {
    console.log("Hi~ :)");
    return byFn;
  }
  useEffect(hyFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "HIDE" : "SHOW"}</button>
    </div>
  );
}

export default App;
