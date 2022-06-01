import ConnectedMemeSVG from "./components/ui/ConnectedMemeSVGViewer/ConnectedMemeSVG";
import React, { useEffect } from "react";
import FlexLayout from "./components/layout/FlexLayout/FlexLayout";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { ConnectedMemeForm } from "./components/ui/MemeForm/MemeForm";
import Navbar from "./components/ui/Navbar/Navbar";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { MemeInterface, MemeSVGThumbnail } from "orsys-tjs-meme";
import _store, { ACTIONS_CURRENT } from "./store/store";
import { useDispatch, useSelector, useStore } from "react-redux";

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
        <Route path="/editor" element={<MemeEditor />} />
        <Route path="/editor/:id" element={<MemeEditor />} />
      </Routes>
      <Footer />
    </div>
  );
};

const MemeEditor = (props: any) => {
  const dispatch = useDispatch();
  const params = useParams();
  const memes = useSelector((state:any) => state.ressources.memes)
  useEffect(() => {
    console.log(memes)
    if (undefined !== params.id) {
      dispatch({
        type: ACTIONS_CURRENT.UPDATE_CURRENT,
        value: memes.find(
            (m: MemeInterface) => m.id === Number(params.id)
          ),
      });
    } else {
      dispatch({ type: ACTIONS_CURRENT.CLEAR_CURRENT });
    }
  }, [params, dispatch,memes]);
  console.log(useParams(), useLocation());
  return (
    <FlexLayout>
      <ConnectedMemeSVG />
      <ConnectedMemeForm />
    </FlexLayout>
  );
};

export default App;
