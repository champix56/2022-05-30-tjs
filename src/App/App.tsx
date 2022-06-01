import ConnectedMemeSVG from "./components/ui/ConnectedMemeSVGViewer/ConnectedMemeSVG";
import React from "react";
import FlexLayout from "./components/layout/FlexLayout/FlexLayout";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { ConnectedMemeForm } from "./components/ui/MemeForm/MemeForm";
import Navbar from "./components/ui/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
    <div className="App" data-testid="App">
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Home ..
              <br />
              Bienvenu sur cette page
            </div>
          }
        />
        <Route
          path="/editor"
          element={
            <FlexLayout>
              <ConnectedMemeSVG />
              <ConnectedMemeForm />
            </FlexLayout>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
