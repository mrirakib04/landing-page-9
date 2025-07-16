import discountImg from "./../assets/img/New Year Photo.png";

const Discount = () => {
  return (
    <div className="container w-full py-10 px-5 flex flex-col items-center text-center gap-1">
      <h2 className="lg:text-7xl md:text-6xl sm:text-4xl text-3xl font-bold text-red-500">
        65% OFF
      </h2>
      <p className="md:text-lg text-base text-red-700 font-medium mt-5">
        OUR HOLIDAY DEALS ARE BETTER
      </p>
      <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold">
        ALL CATEGORIES
      </h3>
      <img
        className="lg:w-1/2 md:w-3/5 sm:w-4/5 w-11/12 mt-10"
        src={discountImg}
        alt="discountImg"
      />
    </div>
  );
};

export default Discount;
