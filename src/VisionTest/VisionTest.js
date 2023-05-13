import optotypeH from "../optotypes/h.png";
import optotypeV from "../optotypes/v.png";
import optotypeZ from "../optotypes/z.png";
import optotypeD from "../optotypes/d.png";
import optotypeS from "../optotypes/s.png";
import "./VisionTest.css";

function VisionTest() {
  const optotypes = {
    H: optotypeH,
    V: optotypeV,
    Z: optotypeZ,
    D: optotypeD,
    S: optotypeS,
  };

  let generateRandom = function (obj) {
    let keys = Object.keys(obj);
    let randomIndex = Math.floor(Math.random() * keys.length);
    return Object.values(obj)[randomIndex];
  };

  function whichBtn(btnId) {
    switch (btnId) {
      case "h":
        console.log(`The ${btnId} was clicked.`);
        break;
      case "v":
        console.log(`The ${btnId} was clicked.`);
        break;
      case "z":
        console.log(`The ${btnId} was clicked.`);
        break;
      case "d":
        console.log(`The ${btnId} was clicked.`);
        break;
      case "s":
        console.log(`The ${btnId} was clicked.`);
        break;
      default:
        console.log(`Sorry, that's not an option.`);
    }
  }

  return (
    <div className="visionTestParent">
      <h1 className="visionTestTitle">Vision Test</h1>
      <img src={generateRandom(optotypes)} className="letter" />
      <div className="buttonsParent">
        <button className="btn h" onClick={() => whichBtn("h")}>
          {Object.keys(optotypes)[0]}
        </button>
        <button className="btn v" onClick={() => whichBtn("v")}>
          {Object.keys(optotypes)[1]}
        </button>
        <button className="btn z" onClick={() => whichBtn("z")}>
          {Object.keys(optotypes)[2]}
        </button>
        <button className="btn d" onClick={() => whichBtn("d")}>
          {Object.keys(optotypes)[3]}
        </button>
        <button className="btn s" onClick={() => whichBtn("s")}>
          {Object.keys(optotypes)[4]}
        </button>
      </div>
    </div>
  );
}

export default VisionTest;
