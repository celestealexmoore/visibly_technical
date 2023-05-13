import optotypeH from '../optotypes/h.png';
import optotypeV from '../optotypes/v.png';
import optotypeZ from '../optotypes/z.png';
import optotypeD from '../optotypes/d.png';
import optotypeS from '../optotypes/s.png';
import './VisionTest.css';

const optotypes = {
  H: optotypeH,
  V: optotypeV,
  Z: optotypeZ,
  D: optotypeD,
  S: optotypeS,
};

/*
1. make 6 buttons with unique ids. 
2. On click, show the corresponding letter
3. when button is clicked, store what octotype was shown vs. what was selected.
*/

let randomProperty = function (obj) {
    let keys = Object.keys(obj);
    let answers = Math.floor(Math.random() * keys.length);
    return Object.values(obj)[answers];
};

function VisionTest() {
  return (
    <div className='visionTestParent'>
      <h1 className='vth1'>Vision Test</h1>
      <img src={randomProperty(optotypes)} className='letter' style={{ width: '25mm' }}/>
      <div className='buttonsParent'>
        <button className='btn'>{Object.keys(optotypes)[0]}</button>
        <button className='btn'>{Object.keys(optotypes)[1]}</button>
        <button className='btn'>{Object.keys(optotypes)[2]}</button>
        <button className='btn'>{Object.keys(optotypes)[3]}</button>
        <button className='btn'>{Object.keys(optotypes)[4]}</button>
      </div>
    </div>
  );
}

export default VisionTest;