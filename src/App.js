import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Posts from "./pages/Posts";
import SignIn from "./pages/SignIn";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navigation></Navigation>
        </div>
        <Container>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
