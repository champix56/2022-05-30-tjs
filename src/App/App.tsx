import ConnectedMemeSVG from "./components/ui/ConnectedMemeSVGViewer/ConnectedMemeSVG";
import React from "react";
import FlexLayout from "./components/layout/FlexLayout/FlexLayout";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { ConnectedMemeForm } from "./components/ui/MemeForm/MemeForm";
import Navbar from "./components/ui/Navbar/Navbar";

interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
    <div className="App" data-testid="App">
      <Header />
      <Navbar />
      <FlexLayout>
        <ConnectedMemeSVG image={undefined} />
        <ConnectedMemeForm />
      </FlexLayout>
      <Footer />
    </div>
  );
};

export default App;
