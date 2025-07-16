import bg from "./../assets/img/Banner Image.png";

const Header = () => {
  return (
    <div className="container w-full py-10 px-5">
      <div
        style={{
          background: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full rounded-xl overflow-hidden"
      >
        <div className="w-full lg:py-40 md:py-24 sm:py-20 py-5 px-5  bg-gradient-to-b from-black/70 via-black/50 to-black/5 flex flex-col items-center justify-center text-center text-white gap-3">
          <h3 className="md:text-2xl text-xl font-medium">Happy New Year</h3>
          <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold">
            New Year Party <br />
            Celebration
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
