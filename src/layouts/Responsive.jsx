import  { useEffect, useState } from "react";
import { FaEarthAsia } from "react-icons/fa6"
import MyModal from "../Components/MyModal";
const Responsive = ({ isMenuOpen, setMenuOpen }) => {
  const [navmenuitem, setnavitem] = useState([]);
 const isopen = true
  useEffect(() => {
     fetch("/database/db.json")
       .then((response)=>{
        return response.json()
       })
       .then((responseData)=>{
        setnavitem(responseData)
       })
  
  }, []);
  return (
    <div>
      {isMenuOpen && (
        <div className="h-screen fixed sm:hidden backdrop-blur-xl top-0 text-black w-full  transition duration-300 overflow-x-hidden overflow-y-hidden ">
          <div onClick={()=>setMenuOpen(!isMenuOpen)} className="flex justify-end text-white right-5 top-5 fixed">close</div>
          <div className="flex flex-col justify-center items-center h-[50vh]">
          
            <div className="list-none space-y-2">
              {navmenuitem.map((user) => {
                return (
                  <article key={user.id}>
                    <li onClick={() => setMenuOpen(false)}>{user.item}</li>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="sm:hidden flex flex-col  items-center -mt-20 ">
            <FaEarthAsia />
            {isopen?<MyModal/>:<MyModal/>}
          </div>
        </div>
      )}
    </div>
  );
};
export default Responsive;
