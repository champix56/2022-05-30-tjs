import React from "react";
import Button from "./components/Button/Button";

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        Valeur du compteur : 1
        <hr />
        <Button bgColor="tomato">decrem -1</Button>
        <Button bgColor="skyblue">increm +1</Button>
      </div>
    );
  }
}

export default App;
