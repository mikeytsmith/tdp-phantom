import mask from '../src/maskspic.png';
import doorway from '../src/doorway.png';
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
      <img src={mask} className="mask-logo" alt="skull half hiding behind a masquerade mask" />
      <br/>
      <img src={doorway} className="doorway-logo" alt="stone arch doorway with stairs leading up inside" />
      <br />
      <Button>React button</Button>
      <br />
      <br />
      <br />
      <Artists />
      </body>
    </div>
  );
}

export default App;
