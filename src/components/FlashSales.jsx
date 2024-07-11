import { useRef, useState } from "react";
import { useFetch } from "../hooks/hook";
import Products from "./Products";
import arrowLeft from "../assets/images/icons_arrow-left.png";
import arrowRight from "../assets/images/icons arrow-right.png";
const FlashSales = () => {
  const [viewAll, setViewAll] = useState(false);
  const containerRef = useRef(null);

  const handleViewAll = () => {
    setViewAll(!viewAll);
  };
  const { data, loading, refetch } = useFetch({
    methods: "get",
    url: "https://api.escuelajs.co/api/v1/products",
  });
  console.log("products:", data);
  const handleScrollLeft = () => {
    containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col h-auto px-[100px] mb-10">
      <div className="flex gap-2 pt-10 flex-col">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="inline w-3 h-6 bg-[#DB4444] rounded-sm"></span>
            <h4 className="text-[#DB4444]">Our Products</h4>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleScrollLeft}
              className="bg-gray-100 rounded-full p-3"
            >
              <img src={arrowLeft} className="w-5 h-5" />
            </button>
            <button
              onClick={handleScrollRight}
              className="bg-gray-100 rounded-full p-3"
            >
              <img src={arrowRight} className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-xl font-bold">Explore Our Products</h1>
          </div>
          {viewAll ? (
            <div className="flex flex-wrap gap-2 overflow-y-auto max-h-[500px] hide-scrollbar">
              {loading ? (
                <div>loading...</div>
              ) : (
                data
                  .filter((item) => item.images.length > 0)
                  .map((product) => <Products key={product.id} {...product} />)
              )}
            </div>
          ) : (
            <div
              ref={containerRef}
              className="flex overflow-x-auto gap-2 hide-scrollbar"
            >
              {loading ? (
                <div>loading...</div>
              ) : (
                data
                  .filter((item) => item.images.length > 0)
                  .map((product) => (
                    <div key={product.id} className="flex-none w-[200px]">
                      <Products {...product} />
                    </div>
                  ))
              )}
            </div>
          )}
          <button
            onClick={handleViewAll}
            className="bg-[#DB4444] text-white py-4 px-10 rounded mt-4 self-center"
          >
            {viewAll ? "Show Less" : "View All Products"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
