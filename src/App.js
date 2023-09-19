import "./App.css";
import SignUpPage from "./Components/Pages/SignUpPage";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./Components/Pages/WelcomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUpPage />}></Route>
        <Route path="/welcome" element={<WelcomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
