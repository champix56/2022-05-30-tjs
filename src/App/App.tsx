import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
const buttonContent = "Hello";
function App() {
  //comment js
  /*comment multilignes js*/
  return (
    <div className="App">
      {/*comment dans XML*/}
      DEMAT BREIZH
      <hr />
      <Button
        action={() => {
          alert("Le button est clické");
        }}
        type="button"
      >Hello</Button>
      <Button ><div>Hello</div></Button>
      <Button >hello<hr/>De lu</Button>
      <Button >With child</Button>
    </div>
  );
}

export default App;
