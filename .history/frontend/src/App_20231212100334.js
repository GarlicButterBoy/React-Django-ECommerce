import { Container } from "react-bootstrap";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { useImperativeHandle } from "react";
useImperativeHandle
function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1> Welcome </h1>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
