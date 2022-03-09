import "./App.css";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import BottomCard from "./pages/bottomCard/bottomCard";
import ConsultWithWellnessExperts from "./pages/consultWithWellnessExperts/consultWithWellnessExperts";
import GetYourPersonalizedPeriodBox from "./pages/getYourPersonalizedPeriodBox/getYourPersonalizedPeriodBox";
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
      <ConsultWithWellnessExperts />
      <GetYourPersonalizedPeriodBox />
      <Footer />
      <BottomCard />
    </div>
  );
}

export default App;
