import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
    //   .then((data) => console.log(data))
      .then((data) => {
        const poparData = data.filter(item => item.category === "popular")
        setMenu(poparData)
      });
  }, []);


  return (
    <section>
      <SectionTitle
        heading={"From  our Menu"}
        subHeading={"Popular Menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => 
          <MenuItem 
          key={item._id} 
          item={item}
          
          >
           </MenuItem>
          
        )}
         
      </div>
    </section>
  );
};

export default PopularMenu;
