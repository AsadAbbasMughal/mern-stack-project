import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import Home  from "./components/Home";
import Todo from "./components/Todo";
import PrivateRoute from "./components/PrivateRoute";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
         <Route
          path="/todo"
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
