import partyBG from "./../assets/img/Vectorrr.png";
import partyDate from "./../assets/img/Group 70.png";

const Party = () => {
  return (
    <div className="container w-full py-10 px-5">
      <div
        style={{
          background: `url(${partyBG})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full rounded-xl overflow-hidden"
      >
        <div className="w-full sm:py-20 py-5 px-5 bg-gradient-to-r from-black/80 via-black/60 to-black/30 flex sm:flex-row flex-col items-center justify-center text-center text-white gap-3 flex-wrap-reverse">
          <img
            className="h-32 sm:hidden block"
            src={partyDate}
            alt="partyDate"
          />
          <div className="flex flex-col sm:items-start items-center gap-3 sm:text-left text-center md:w-1/2 sm:w-3/5 w-full">
            <h3 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium">
              Welcome to <br /> midnight party
            </h3>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              quas. Modi tenetur reprehenderit voluptatibus eum!
            </p>
            <button className="text-base font-semibold py-1 px-3 rounded-md border border-transparent hover:border-white duration-300">
              JOIN NOW
            </button>
          </div>
          <img
            className="lg:h-80 md:h-64 sm:h-40 sm:block hidden"
            src={partyDate}
            alt="partyDate"
          />
        </div>
      </div>
    </div>
  );
};

export default Party;
