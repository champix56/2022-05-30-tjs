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
import MemeForm from "./components/ui/MemeForm/MemeForm";
import Navbar from "./components/ui/Navbar/Navbar";
interface IAppState {
  currentMeme: MemeInterface;
  images: Array<ImageInterface>;
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
    this.state = { currentMeme: emptyMeme, images: images };
  }
  render() {
    return (
      <div className="App" data-testid="App">
        <Header />
        <Navbar />
        <FlexLayout>
          <MemeSVGViewer image={
            this.state.images.find(e=>e.id===this.state.currentMeme.imageId)
          } meme={this.state.currentMeme} basePath='/media/' />
          <MemeForm 
            meme={this.state.currentMeme}
            images={this.state.images}
            onMemeChange={(meme: MemeInterface) => {
              this.setState({ currentMeme: meme });
            }}
          />
        </FlexLayout>
        <Footer />
      </div>
    );
  }
}

export default App;
