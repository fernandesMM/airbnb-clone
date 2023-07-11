import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<p>Hello World!</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
