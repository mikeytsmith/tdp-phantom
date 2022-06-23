import logo from './logo.svg';
import "./App.css";
import Heading from "./Heading";
import Artists from "./artistApi/Artists";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header>
      <Heading />
      </header>
      <body>
      <img src={logo} className="App-logo" alt="logo" />
      <img src="%PUBLIC_URL%/maskpic.png" className="mask-logo" alt="skull half hiding behind a masquerade mask" />
      <link rel="mask" href="%PUBLIC_URL%/maskpic.png" />
      <link rel="apple-touch-mask" href="%PUBLIC_URL%/maskpic.png" />
      <br />
      <Button>React button</Button>
      <br />
      <br />
      <br />
      <Trainers />
      </body>
    </div>
  );
}

export default App;
