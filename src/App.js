import { useState } from "react";
import Loader from "./components/Loader/Loader";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader ? (
        <Loader onFinish={() => setShowLoader(false)} />
      ) : (
        <LandingPage />
      )}
    </>
  );
}

export default App;

