import "./App.css";
import Header from "./components/header/header";
import LiberateYourEverydayWellness from "./pages/liberateYourEverydayWellness/liberateYourEverydayWellness";
import LiberateYourEverydayWellnessBGImage from "./pages/liberateYourEverydayWellnessBGImage/liberateYourEverydayWellnessBGImage";
import TrackYourPeriod from "./pages/trackYourPeriod/trackYourPeriod";
import WhatMakesUsDifferent from "./pages/whatMakesUsDifferent/whatMakesUsDifferent";

function App() {
  return (
    <div className="App">
      <Header />
      <WhatMakesUsDifferent />
      <LiberateYourEverydayWellness />
      <LiberateYourEverydayWellnessBGImage />
      <TrackYourPeriod />
    </div>
  );
}

export default App;
