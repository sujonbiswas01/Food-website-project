import React, { useEffect, useState } from "react";
import Container from "./Container";

const MenuHeder = () => {
  const [isItem, setIsitem] = useState([]);
  useEffect(() => {
    fetch("/database/MenuHeder.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setIsitem(response);
      });
  }, []);
  return (
    <div>
      <Container>
        <div className="flex flex-wrap gap-10 md:gap-4 px-4 sm:px-0 items-center justify-between pt-6 ">
            {isItem.flatMap((items)=>(
                <div key={items.id} className="flex flex-col items-center space-y-2 ">
                    <img src={items.img} className="w-6 h-6" alt="" />
                    <p> {items.para}</p>
                </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default MenuHeder;
