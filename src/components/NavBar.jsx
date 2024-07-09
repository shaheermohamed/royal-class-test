import search from "../assets/images/search.png";
import cart1 from "../assets/images/Cart1.png";
import wishlist from "../assets/images/Wishlist.png";
import dropdown from "../assets/images/DropDown.png";
const NavBar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center h-10 bg-black">
        <div className="flex justify-between gap-52 items-center">
          <h1 className="text-white font-thin text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="font-bold ml-2 underline">
              <a href="">ShopNow</a>
            </span>
          </h1>
          <div>
            <button className="flex items-end text-white font-thin">
              English
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-6 items-center w-full px-[100px] border-b border-grey-500 ">
        <div>
          <h2 className="font-bold">Royal Class</h2>
        </div>

        <div className="flex gap-8">
          <h4>Home</h4>
          <h4>Contact</h4>
          <h4>About</h4>
          <h4>Sign Up</h4>
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex bg-[#F5F5F5] items-center rounded-md">
            <input
              className="p-2 bg-[#F5F5F5] rounded-md h-7 w-[200px]"
              placeholder="What are you looking for?"
            />
            <img src={search} alt="search" className="h-5 w-5" />
          </div>

          <img src={wishlist} alt="search" className="h-5 w-5" />
          <img src={cart1} alt="search" className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
