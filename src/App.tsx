import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Skills from "./components/Skills/Skills";
// import { skills } from "./database/datas";
// import Counter from "./components/Counter/Counter";
import { AppProviders } from "./providers/app.provider";
import { MuiMode } from "./components/Mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Skills skills={skills}></Skills> */}
        {/* <Counter></Counter> */}
        <MuiMode></MuiMode>
      </div>
    </AppProviders>
  );
}

export default App;
