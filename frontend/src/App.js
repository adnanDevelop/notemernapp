import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import { useSelector } from "react-redux";

function App() {
  const userToken = useSelector((prevValue) => prevValue.userToken);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={userToken ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/register"
          element={userToken ? <Navigate to="/home" /> : <Register />}
        />
        <Route
          path="/home"
          element={userToken ? <Home /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
