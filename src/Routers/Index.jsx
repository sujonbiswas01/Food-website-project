import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Pages/HomePge/Home";
import MyNavbar from "../layouts/Navbar";
import AllResturant from "../Pages/AllresturantPage/AllResturant";
const Index = () => {
  return (
    <>
    <BrowserRouter>
    <MyNavbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resturent" element={<AllResturant/>}/>
    </Routes>
    </BrowserRouter>

    </>

  )
}

export default Index