import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ButtonStyle from "./components/Button/Button.module.css";

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
      <Button bgColor="tomato" color="blue" >hello<hr/>De lu</Button>
      <Button className={ButtonStyle.underline}>With child</Button>
    </div>
  );
}

export default App;
