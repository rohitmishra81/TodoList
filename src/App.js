import './App.css';
import Navbar from './Login/Navbar';
import Login from './Login/Login';
import TodoList from './Login/TodoList';
import Title from './Login/Title';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App(props) {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <Router>
          <Routes>
            <Route exact path="/" element={<Title />} />
          </Routes>
        </Router>
        <Router>
          <Routes>
            <Route exact path="/next" element={<Login />} />
          </Routes>
        </Router>
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
        <Router>
          <Routes>
            <Route exact path="/TodoList" element={<TodoList />} />
          </Routes>
        </Router>
        <Router>
          <Routes>
            <Route exact path="/home" element={<TodoList />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
