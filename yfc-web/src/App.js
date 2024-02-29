import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import ActivityPage from "./pages/activity/activity";
import RecruitPage from "./pages/recruit/recruit";
import LoginPage from "./pages/login/login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
