import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./component/Form";
import Home from "./component/Home";
import Prectice from "./component/Prectice";
import Header from "./component/Header";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/prectice" element={<Prectice />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
