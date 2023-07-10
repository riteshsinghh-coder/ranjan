import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contact from './pages/Contact'
import Home from './pages/Home'
function App() {
  return (
    <>
      <Routes>
        <Router>
        <Route path="/" element={<Home/>}/>
        <Route path="./pages/Contact" element={<Contact/>}/>
        </Router>
      </Routes>
    
    
    </>
  );
}

export default App;
