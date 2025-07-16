import groupImg from "./../assets/img/Ellipse 1.png";
import groupImgSide from "./../assets/img//Group 96.png";

const Offer = () => {
  return (
    <div className="container w-full py-10 px-10 flex flex-col items-center bg-gradient-to-b from-red-200 via-white to-white">
      <h4 className="md:text-2xl text-base font-semibold flex items-center gap-1">
        <span className="text-red-500">Place:</span>New Park Hotel
      </h4>
      <h4 className="md:text-2xl text-base font-semibold flex items-center gap-1">
        <span className="text-red-500">Date:</span>31 December Night 2023
      </h4>
      <h4 className="md:text-2xl text-base font-semibold flex items-center gap-1">
        <span className="text-red-500">Time:</span>Evening 7.30 pm to 12.30 am
      </h4>
      <button className="mt-5 font-medium text-lg py-1 px-4 rounded-lg bg-red-500 text-white hover:bg-black duration-300">
        Join Now
      </button>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:mt-20 mt-10 justify-around items-center">
        <div className="md:hidden sm:col-span-2 col-span-1">
          <div className="sm:w-2/3 w-11/12 mx-auto rounded-full p-3 border-8 border-red-500">
            <img
              className="w-full h-full object-cover rounded-full"
              src={groupImg}
              alt="groupImg"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col sm:items-start items-center gap-1">
          <h4 className="md:text-2xl text-base font-semibold flex items-center gap-1 text-red-500">
            NEW BEST OFFER
          </h4>
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">
            Coming Soon
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            perspiciatis error laudantium, commodi laborum expedita quod
            repellendus? Et, illum impedit!
          </p>
        </div>
        <div className="md:w-full md:block hidden rounded-full p-3 border-8 border-red-500">
          <img
            className="w-full h-full object-cover rounded-full"
            src={groupImg}
            alt="groupImg"
          />
        </div>
        <div className="col-span-1 flex flex-col sm:items-start items-center gap-1">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-red-500">
            2024
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            perspiciatis error laudantium, commodi laborum expedita quod
            repellendus? Et, illum impedit!
          </p>
          <img className="w-auto" src={groupImgSide} alt="groupImgSide" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
