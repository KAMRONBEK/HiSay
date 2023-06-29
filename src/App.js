import React, { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import UserScreen from "./screens/UserScreen";
import ServiceScreen from "./screens/ServiceScreen";
import Login from "./screens/Login";
import Container from "./container";
import UserRegister from "./screens/UserRegister";
import ChatScreen from "./screens/ChatScreen";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  if (isAuth)
    return (
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<UserScreen />} />
            <Route path="/service" element={<ServiceScreen />} />
            <Route path="/chat" element={<ChatScreen />} />
          </Routes>
        </Container>
      </Router>
    );
  else
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login setAuth={setIsAuth} />} />
          <Route
            path="/register"
            element={<UserRegister setAuth={setIsAuth} />}
          />
          <Route path="*" element={<Navigate to={"/login"} replace />} />
        </Routes>
      </Router>
    );
};

export default App;
