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

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { currentMeme: emptyMeme, images: [] };
  }
  render() {
    return (
      <div className="App" data-testid="App">
        <Header />
        <Navbar />
        <FlexLayout>
          <MemeSVGViewer image={undefined} meme={this.state.currentMeme} />
          <MemeForm
            meme={this.state.currentMeme}
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
