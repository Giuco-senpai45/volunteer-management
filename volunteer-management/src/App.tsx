import CandidatesList from "./components/candidate/CandidatesList.tsx";
import Navbar from "./components/Navbar.tsx";
import "./App.css";
import VolunteersList from "./components/volunteer/VolunteersList.tsx";
import { useState } from "react";

function App() {
  const [displayCandidates, setDisplayCandidates] = useState(true);
  const changeDisplayedList = (value: boolean) => {
    setDisplayCandidates(value);
  };

  return (
    <>
      <div className="top-0">
        <Navbar />
      </div>

      <div className="grid grid-cols-3">
        <div className="col-span-3 grid grid-cols-2 space-x-10 p-5">
          <p className="col-span-3 pb-2 text-center text-xl font-extrabold text-white">
            Choose the desired list
          </p>
          <button
            className="list-types-btn"
            onClick={() => {
              changeDisplayedList(true);
            }}
          >
            Candidates
          </button>
          <button
            className="list-types-btn"
            onClick={() => {
              changeDisplayedList(false);
            }}
          >
            Volunteers
          </button>
        </div>
        {displayCandidates ? <CandidatesList /> : <VolunteersList />}
      </div>
    </>
  );
}

export default App;
