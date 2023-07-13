//Others
import notFoundImage from '../../assets/bag-404.svg';

const NoProductsFound = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center justify-center text-center">
        <img src={notFoundImage} alt="No Products Found" className="mb-4" />
        <h2 className="text-4xl lg:text-6xl mb-2 font-bold text-[#9c9fa3]">No Products Found</h2>
        <p className="text-xl lg:text-3xl font-light text-[#9c9fa3]">Your search did not match any products.</p>
      </div>
    </div>
  );
};

export default NoProductsFound;
