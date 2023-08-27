import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import EventPage from "../pages/EventPage";
import LoginPage from "../pages/LoginPage";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.authReducer);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={<EventPage />} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/event" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<LoginPage />} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
