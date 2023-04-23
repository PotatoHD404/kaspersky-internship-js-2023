import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import UsersList from "./components/UsersList";

function App() {
  return (
      <Router>
        <div>
            <h1>React Router</h1>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/users" element={<UsersList />} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;