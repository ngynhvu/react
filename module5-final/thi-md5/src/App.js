import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Create from "./components/Create";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<List/>}></Route>
                    <Route path="/create" element={<Create/>}></Route>
                </Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </BrowserRouter>
    </>
  );
}

export default App;
