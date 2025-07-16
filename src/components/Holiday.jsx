import giftBox from "./../assets/img/Group 75.png";
import dis50 from "./../assets/img/Group 44.png";
import girlImg from "./../assets/img/Rectangle 1.png";

const Holiday = () => {
  return (
    <div className="container w-full py-10 px-5 flex flex-col items-center gap-1">
      <p className="text-lg">WHAT IS FUNCTIONAL</p>
      <h4 className="lg:text-5xl md:text-4xl text-3xl font-semibold flex items-center gap-1">
        <span className="text-red-500">Holidays</span>Sale 50%
      </h4>
      <p className="lg:max-w-1/2 md:max-w-11/12 w-full text-center text-gray-700">
        Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
        molestie malesuada. Ipsum sed sodales risus ut pellentesque vel euismod.
        Eleifend nunc purus quam id fermentum amet amet sit consectetur.
      </p>

      <div className="w-full lg:mt-96 md:mt-80 mt-60 relative">
        <img
          className="absolute sm:bottom-10 bottom-14 lg:max-w-80 md:max-w-60 sm:max-w-44 max-w-32 sm:left-32 left-2"
          src={giftBox}
          alt="giftBox"
        />
        <div className="absolute right-0 sm:bottom-40 bottom-28">
          <img
            className="relative lg:max-w-xs md:max-w-60 sm:max-w-48 max-w-40"
            src={girlImg}
            alt="girlImg"
          />
          <img
            className="absolute sm:-left-20 md:top-20 sm:top-12 top-6 -left-10 md:max-w-40 sm:max-w-32 max-w-16"
            src={dis50}
            alt="dis50"
          />
        </div>

        <div className="w-full sm:h-40 h-28 rounded-b-xl rounded-tl-xl bg-red-500"></div>
      </div>
    </div>
  );
};

export default Holiday;
