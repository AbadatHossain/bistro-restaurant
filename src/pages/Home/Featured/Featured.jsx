import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {
  return (
    <div className="featured-item bg-fixed">
      <SectionTitle
        heading={"form our menu"}
        subHeading={"chek it out"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center py-8 px-16">
        <div>
            <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
            <p>Aug 20m 2029</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa itaque adipisci obcaecati suscipit porro placeat vel. Facilis sapiente consectetur nam.</p>
            <button className="btn btn-outline border-0 border-b-4 text-red-500">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
