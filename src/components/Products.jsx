import PropTypes from "prop-types";

const Products = ({ title, description, images, price }) => {
  console.log(title, description, images, price);
  return (
    <div className="w-[200px] h-[200px] mb-5">
      <div className="relative group">
        <img src={images[0]} alt="img" className="w-[250px] h-[150px]" />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
          <button className="text-white">Add To Cart</button>
        </div>
      </div>
      <div>
        <h2>{title.substr(0, 20) + "..."}</h2>
        <h2 className="text-[#DB4444]">{`$${price}`}</h2>
      </div>
    </div>
  );
};

Products.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
};

export default Products;
