import './App.css';
import Sidebar from './components/sidebar';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/home';
import TopMenu from './components/topMenu';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="main">
          <TopMenu />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
