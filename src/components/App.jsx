import { lazy, Suspense } from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from '../redux/auth/auth-operations';

import '../styles/styles.css'

import Layout from "./Layout/Layout";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const MyPhonePage = lazy(() => import('../pages/MyPhonePage/MyPhonePage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current())
  }, [dispatch]);

  return (    
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MyPhonePage />} />          
            <Route
                path="/contacts"
                element={<PrivateRoute redirect="/login"><Contacts /></PrivateRoute>}>
            </Route>
            <Route
                path="/login"
                element={
                  <PublicRoute redirect="/contacts" restricted>
                    <LoginPage />
                  </PublicRoute>}/>
            <Route
                path="/register"
                element={
                  <PublicRoute redirect="/" restricted>
                    <RegisterPage />
                  </PublicRoute>}/>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
  );
}