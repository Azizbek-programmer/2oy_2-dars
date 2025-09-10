import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index={true} element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
  );
};

export default App
