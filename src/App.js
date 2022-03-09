import "./App.css";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import AboutDiana from "./pages/aboutDiana/aboutDiana";

import BottomCard from "./pages/bottomCard/bottomCard";
import ConsultWithWellnessExperts from "./pages/consultWithWellnessExperts/consultWithWellnessExperts";
import GetYourPersonalizedPeriodBox from "./pages/getYourPersonalizedPeriodBox/getYourPersonalizedPeriodBox";
import LiberateYourEverydayWellness from "./pages/liberateYourEverydayWellness/liberateYourEverydayWellness";
import LiberateYourEverydayWellnessBGImage from "./pages/liberateYourEverydayWellnessBGImage/liberateYourEverydayWellnessBGImage";
import TrackYourMood from "./pages/trackYourMood/trackYourMood";
import TrackYourPeriod from "./pages/trackYourPeriod/trackYourPeriod";
import WhatMakesUsDifferent from "./pages/whatMakesUsDifferent/whatMakesUsDifferent";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutDiana />
      <WhatMakesUsDifferent />
      <LiberateYourEverydayWellness />
      <LiberateYourEverydayWellnessBGImage />
      <TrackYourMood />
      <TrackYourPeriod />
      <ConsultWithWellnessExperts />
      <GetYourPersonalizedPeriodBox />
      <Footer />
      <BottomCard />
    </div>
  );
}

export default App;
