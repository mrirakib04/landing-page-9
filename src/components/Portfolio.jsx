import portfolio1 from "./../assets/img/Rectangle 3.png";
import portfolio2 from "./../assets/img/Rectangle 4.png";
import portfolio3 from "./../assets/img/Rectangle 5.png";
import portfolio4 from "./../assets/img/Rectangle 6.png";
import portfolio5 from "./../assets/img/Rectangle 7.png";
import portfolio6 from "./../assets/img/Rectangle 8.png";

const Portfolio = () => {
  return (
    <div className="container w-full py-10 px-5 flex flex-col items-start gap-1">
      <p className="text-base text-red-500 font-medium">THE BEST GIFTS</p>
      <h4 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold flex items-center gap-1">
        Our Awesome Portfolio
      </h4>
      <p className="lg:max-w-1/2 md:max-w-11/12 w-full text-gray-700">
        Dolor sit amet consectetur. Consequat eget consectetur maecenas sed
        molestie malesuada. Ipsum sed sodales risus ut pellentesque vel euismod.
      </p>
      <div className="md:w-full sm:w-4/5 mx-auto grid md:grid-cols-3 items-center justify-center grid-cols-2 gap-5 mt-5">
        <img src={portfolio1} alt="portfolio1" />
        <img src={portfolio2} alt="portfolio2" />
        <img src={portfolio3} alt="portfolio3" />
        <img src={portfolio4} alt="portfolio4" />
        <img src={portfolio5} alt="portfolio5" />
        <img src={portfolio6} alt="portfolio6" />
      </div>
    </div>
  );
};

export default Portfolio;
