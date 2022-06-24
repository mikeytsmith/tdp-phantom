// import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Navi = () => {
  return (
    <>
      {/* <Link to="/">List of Trainers</Link>
      <br />
      <Link to="/EditList">Add or Update Trainer</Link>
      <br />
      <Link to="/DeleteTrainer">Delete a Trainer</Link>
      <br />
      <Link to="/FindTrainer">Find a Trainer</Link> */}
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">List of Artists</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/EditList">Add or Update Artist</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/DeleteArtist">Delete an Artist</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/FindArtist">Find an Artist</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navi;
