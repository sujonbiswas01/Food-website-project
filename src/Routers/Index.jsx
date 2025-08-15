import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Pages/HomePge/Home";
import MyNavbar from "../layouts/Navbar";
import AllResturant from "../Pages/AllresturantPage/AllResturant";
import BellaItalia from "../Pages/BellaItalia/BellaItalia";
const Index = () => {
  return (
    <>
    <BrowserRouter>
    <MyNavbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resturent" element={<AllResturant/>}/>
        <Route path="/bellaitalia" element={<BellaItalia/>}/>
    </Routes>
    </BrowserRouter>

    </>

  )
}

export default Index