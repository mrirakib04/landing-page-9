import newsletterImg from "./../assets/img/Group 61.png";

const Newsletter = () => {
  return (
    <div className="container w-full py-10 px-5">
      <div className="w-full flex flex-col items-center gap-3 bg-red-200 text-center rounded-xl p-5">
        <img className="sm:w-40 w-28" src={newsletterImg} alt="newsletterImg" />
        <h4 className="md:text-4xl sm:text-3xl text-xl font-semibold font-serif">
          Subscribe Newsletter
        </h4>
        <p className="lg:max-w-1/2 md:max-w-11/12 w-full text-gray-700 sm:text-base text-sm">
          Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
          molestie malesuada.
        </p>
        <div className="flex items-center sm:max-w-xl w-full max-w-80 rounded-full overflow-hidden">
          <input
            className="h-10 w-full py-2 px-2 text-base bg-white font-medium focus:outline-0"
            type="text"
            placeholder="Email"
          />
          <button className="h-10 font-medium px-3 bg-red-500 text-white hover:bg-black duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
