import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNav () {
    return (
        <>
<Navbar expand="lg" className="bg-body-secondary">
      <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Browse">Browse</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </>
    );
}

export default MyNav;