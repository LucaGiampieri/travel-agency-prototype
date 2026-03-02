import DefaultLayout from "./layouts/DefaultLayout"

import HomePage from "./pages/HomePage"
import TravelPage from "./pages/TravelPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/travel/:id" element={<TravelPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
