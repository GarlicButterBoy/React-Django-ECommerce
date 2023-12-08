import { Container } from "react-bootstrap";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <h1> Welcome </h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
