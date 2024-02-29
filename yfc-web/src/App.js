import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/home";
import IntroductionPage from "./pages/introduction/introduction";
import ActivityPage from "./pages/activity/activity";
import RecruitPage from "./pages/recruit/recruit";
import LoginPage from "./pages/login/login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
