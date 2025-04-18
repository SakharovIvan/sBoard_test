import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./Pages/Main";
import UploadPage from "./Pages/Upload";
import GlobalContext from "./Context/Global";
import { Pages } from "./Context/Global";
import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [currentPage, setPage] = useState(Pages.Main);

  const sections = (page: Pages) => {
    console.log("sections");
    switch (page) {
      case Pages.Main:
        return <MainPage />;
      case Pages.Upload:
        return <UploadPage />;
    }
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={{ currentPage: Pages.Main, setPage }}>
        <Header></Header>
        <>{sections(currentPage)}</>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
