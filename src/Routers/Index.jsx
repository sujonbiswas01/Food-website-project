import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Pages/HomePge/Home";
import MyNavbar from "../layouts/Navbar";
const Index = () => {
  return (
    <>
    <BrowserRouter>
    <MyNavbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>

    </>

  )
}

export default Index