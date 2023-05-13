import { useState } from "react";
import optotypeH from "../optotypes/h.png";
import optotypeV from "../optotypes/v.png";
import optotypeZ from "../optotypes/z.png";
import optotypeD from "../optotypes/d.png";
import optotypeS from "../optotypes/s.png";
import "./VisionTest.css";

function VisionTest() {
  let [track, setTrack] = useState(1);
  let [score, setScore] = useState(0);
  let randomIndex;

  const optotypes = {
    H: optotypeH,
    V: optotypeV,
    Z: optotypeZ,
    D: optotypeD,
    S: optotypeS,
  };

  const optoIndex = Object.keys(optotypes);

  let [source, setSource] = useState(generateRandom(optotypes));

  function generateRandom(obj) {
    let keys = Object.keys(obj);
    randomIndex = Math.floor(Math.random() * keys.length);
    return Object.values(obj)[randomIndex];
  }

  function whichBtn(btnId) {
    switch (btnId) {
      case "H":
        keepScore(btnId);
        setSource(generateRandom(optotypes));
        break;
      case "V":
        keepScore(btnId);
        setSource(generateRandom(optotypes));
        break;
      case "Z":
        keepScore(btnId);
        setSource(generateRandom(optotypes));
        break;
      case "D":
        keepScore(btnId);
        setSource(generateRandom(optotypes));
        break;
      case "S":
        keepScore(btnId);
        setSource(generateRandom(optotypes));
        break;
    }
  }

  function keepScore(btnId) {
    setTrack(track + 1);
    // console.log(`Question # ${track}. Score is ${score}.`);
    if (btnId == Object.keys(optotypes)[randomIndex]) {
      setScore(score + 1);
    }
  }

  if (track === 11) {
    console.log("game over.");
  }

  return (
    <div className="visionTestParent">
      <h1 className="visionTestTitle">Vision Test</h1>
      <p className="visionTestDescr">
        Click the button on the left that corresponds with the letter that
        appears in the middle of the screen. After the full set of selections is
        made, the test is completed and your final result will be displayed.
      </p>
      <img src={source} className="letter" alt="Randomized Letter" />
      <div className="buttonsParent">
        <button className="btn" onClick={() => whichBtn("H")}>
          {optoIndex[0]}
        </button>
        <button className="btn" onClick={() => whichBtn("V")}>
          {optoIndex[1]}
        </button>
        <button className="btn" onClick={() => whichBtn("Z")}>
          {optoIndex[2]}
        </button>
        <button className="btn" onClick={() => whichBtn("D")}>
          {optoIndex[3]}
        </button>
        <button className="btn" onClick={() => whichBtn("S")}>
          {optoIndex[4]}
        </button>
      </div>
    </div>
  );
}

export default VisionTest;
