import { Container } from "react-bootstrap";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1> Welcome </h1>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
