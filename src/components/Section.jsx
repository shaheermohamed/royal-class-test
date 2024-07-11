import DropDown1 from "../assets/images/DropDown1.png";
import appIcon from "../assets/images/1200px-Apple_gray_logo 1.png";
import heroIphone from "../assets/images/hero_endframe__cvklg0xk3w6e_large 2.png";
import arrowRight from "../assets/images/Vector.png";
const Section = () => {
  return (
    <div className="w-full flex h-[350px] px-[100px]">
      <div className="w-[20%] border-r border-grey-500 flex flex-col gap-2 pt-10">
        <div className="flex items-center justify-between pr-5">
          <h4 className="flex items-center gap-10 text-sm">Woman’s Fashion </h4>
          <img src={DropDown1} alt="search" className="h-5 w-5" />
        </div>
        <div className="flex justify-between pr-5">
          <h4 className="flex items-center gap-10 text-sm">Men’s Fashion</h4>
          <img src={DropDown1} alt="search" className="h-5 w-5" />
        </div>

        <h4 className="text-sm font-[400]">Electronics</h4>
        <h4 className="text-sm font-[400]"> Home & Lifestyle</h4>
        <h4 className="text-sm font-[400]">Medicine</h4>
        <h4 className="text-sm font-[400]">Sports & Outdoor</h4>
        <h4 className="text-sm font-[400]">Baby’s & Toys</h4>
        <h4 className="text-sm font-[400]">Groceries & Pets</h4>
        <h4 className="text-sm font-[400]">Health & Beauty</h4>
      </div>
      <div className=" pl-6 w-[80%] flex justify-center items-center">
        <div className="bg-black w-full h-[270px] flex flex-col">
          <div className="flex justify-between pr-20 pl-20 pt-5">
            <div className="flex flex-col gap-4 pt-5">
              <div className="flex items-center gap-2">
                <img src={appIcon} />
                <h4 className="text-white text-xs">iPhone 14 Series</h4>
              </div>
              <h1 className="text-white font-semibold text-3xl w-[180px]">
                Up to 10% off Voucher
              </h1>
              <div className="flex items-center gap-2">
                <button className="text-white border-b flex items-center gap-1">
                  Shop Now
                </button>
                <img src={arrowRight} className="w-5 h-4" />
              </div>
            </div>
            <div>
              <img src={heroIphone} className="w-[300px] h-[230px]" />
            </div>
          </div>
          <div className="flex justify-center gap-2 ">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          </div>
        </div>
        {/* <img
          src={Frame}
          alt="search"
          className="h-[344px] w-[950px] pl-10 pt-10"
        /> */}
      </div>
    </div>
  );
};

export default Section;
