import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <h1> Welcome </h1>
          <Routes>
            <Route path="/home" component={HomeScreen} exact />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
