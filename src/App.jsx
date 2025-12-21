import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './layouts/Layouts';
import TrackingPage from './pages/TrackingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
        <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/tracker"  element={<TrackingPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App