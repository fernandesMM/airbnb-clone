import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
