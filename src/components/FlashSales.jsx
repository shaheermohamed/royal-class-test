import { useFetch } from "../hooks/hook";
import Products from "./Products";
const FlashSales = () => {
  const { data, loading, refetch } = useFetch({
    methods: "get",
    url: "https://api.escuelajs.co/api/v1/products",
  });
  console.log("products:", data);
  if (loading) return <div>loading...</div>;

  return (
    <div className="w-full flex h-[350px] px-[100px]">
      <div className="flex gap-2 pt-10 flex-col">
        <div className="flex gap-2">
          <span className="inline w-3 h-6 bg-[#DB4444] rounded-sm"></span>
          <h4 className="text-[#DB4444]">Our Products</h4>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-xl font-bold">Explore Our Products</h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {data
              .filter((item) => item.images.length > 0)
              .map((product) => (
                <Products key={product.id} {...product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
