import React from "react";
import "./App.css";
import Button, { DefaultButton, WarningButton } from "./components/Button/Button";
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
      <WarningButton style={{fontWeight:900,fontSize:'x-large'}} ><div>Hello</div></WarningButton>
      <DefaultButton bgColor="tomato" color="blue" >hello<hr/>De lu</DefaultButton>
      <Button className={ButtonStyle.underline}>With child</Button>
    </div>
  );
}

export default App;
