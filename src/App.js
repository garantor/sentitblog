import Headers from "./Components/Headers";
import Article from "./Components/Article";
import { CardGroup }  from "react-bootstrap";
import LoginForm from './Components/Login';
import SignupForm from "./Components/Signup";
import { BrowserRouter as MainRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import BlogHome from "./Components/BlogHome";
import Dashboard from "./Components/Dashboard";


function App() {

  return (
    <MainRouter>
      <div className="App">
        <Headers login_title={"Login"} signup_title={"Signup"} />
        <Routes>
          <Route path="/" element={<BlogHome />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/postcontent" element={<Dashboard />} />
        </Routes>
      </div>
    </MainRouter>
  );
}

export default App;
