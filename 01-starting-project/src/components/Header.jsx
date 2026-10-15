import reactImg from '../assets/react-core-concepts.png';
import './Header.css'
//kulon kulon nem lehet csst szetszedni, mindenre fog, csak atlathatosag szempontjabol jo
export default function Header(){
  let szam = Math.floor(Math.random()*10 + 10)
  return(
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
        <p>
          Az en kedvenc szamom: {szam}
        </p>
      </header>
  );
}

