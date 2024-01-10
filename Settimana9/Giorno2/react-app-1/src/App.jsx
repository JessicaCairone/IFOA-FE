//import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import {Container, Row} from "react-bootstrap";
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <MyNav />
    <Welcome/>
      <Container fluid>
        <Row>
    <AllTheBooks />
    </Row>
      </Container>
    <MyFooter />
       
    </>
  )
}

export default App;
