import { useFetch } from "../hooks/hook";
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
          <h4 className="text-[#DB4444]">Todays&apos;s</h4>
        </div>
        <div className="flex gap-4">
          <div>
            <h1 className="text-xl font-bold">Flash Sales</h1>
          </div>

          <div>
            <button className="w-[30px] h-[30px] bg-gray-500 rounded-full font-bold">
              {"<-"}
            </button>
            <button>{"->"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
