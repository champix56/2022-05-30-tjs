import {
  emptyMeme,
  ImageInterface,
  MemeInterface,
  MemeSVGViewer,
} from "orsys-tjs-meme";

import React from "react";
import FlexLayout from "./components/layout/FlexLayout/FlexLayout";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import MemeForm, { ConnectedMemeForm } from "./components/ui/MemeForm/MemeForm";
import Navbar from "./components/ui/Navbar/Navbar";
import store, { currentMemeInitialState } from './store/store'
interface IAppState {
  images: Array<ImageInterface>;
  memes: Array<MemeInterface>;
}
interface IAppProps {}

const images: Array<ImageInterface> = [
  { id: 0, name: "goudig", w: 500, h: 500, url: "goudigFull_500x500.jpg" },
  { id: 1, name: "quimper", w: 418, h: 348, url: "quimper_418_348.gif" },
  { id: 2, name: "tabarly", w: 655, h: 437, url: "tabarly_655x437.jpg" },
];

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { images: [], memes: [] };
    console.log(store);
    
  }
  componentDidMount() {

    const timgs = fetch("http://localhost:5679/images").then((f) => f.json());

    const tmemes = fetch("http://localhost:5679/memes").then((f) => f.json());

    const tAll = Promise.all([timgs, tmemes]);

    const tout = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    Promise.race([tAll, tout]).then((arr_arr) => {
      if (!Array.isArray(arr_arr)) {
        console.log("timeOut declenché");
        return;
      }
      console.log(arr_arr);
      this.setState({ memes: arr_arr[1], images: arr_arr[0] });
    });
  }
  render() {
    return (
      <div className="App" data-testid="App">
        <Header />
        <Navbar />
        <FlexLayout>
          <MemeSVGViewer
            image={this.state.images.find(
              (e) => e.id === -1
            )}
            meme={emptyMeme}
            basePath="/media/"
          />
          <ConnectedMemeForm
            images={this.state.images}
          />
        </FlexLayout>
        <Footer />
      </div>
    );
  }
}

export default App;
