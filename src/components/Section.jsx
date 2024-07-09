import Frame from "../assets/images/Frame 560.png";
import DropDown1 from "../assets/images/DropDown1.png";
const Section = () => {
  return (
    <div className="w-full flex h-[350px] px-[100px]">
      <div className="w-[20%] border-r border-grey-500 flex flex-col gap-2 pt-10">
        <div className="flex justify-between pr-5">
          <h4 className="flex items-center gap-10">Woman’s Fashion </h4>
          <img src={DropDown1} alt="search" className="h-5 w-5" />
        </div>
        <div className="flex justify-between pr-5">
          <h4 className="flex items-center gap-10">Men’s Fashion</h4>
          <img src={DropDown1} alt="search" className="h-5 w-5" />
        </div>

        <h4>Electronics</h4>
        <h4>Home & Lifestyle</h4>
        <h4>Medicine</h4>
        <h4>Sports & Outdoor</h4>
        <h4>Baby’s & Toys</h4>
        <h4>Groceries & Pets</h4>
        <h4>Health & Beauty</h4>
      </div>
      <div className="w-[80%]">
        <img
          src={Frame}
          alt="search"
          className="h-[344px] w-[950px] pl-10 pt-10"
        />
      </div>
    </div>
  );
};

export default Section;
