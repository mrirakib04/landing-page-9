import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="w-full py-10 px-5 bg-black text-white mt-5">
      <div className="flex items-center justify-between flex-wrap gap-3 py-5">
        <p className="text-lg">
          44, Big Building Roosevelt Street <br />
          Beach Gardens Florida 33410
        </p>
        <p>
          <span className="flex items-center gap-1 text-lg">
            <FaPhone></FaPhone> +00 123 584 124
          </span>
          <span className="flex items-center gap-1 text-lg">
            <TbWorld></TbWorld> www.website.com
          </span>
        </p>
      </div>
      <div className="flex items-center justify-center gap-3 text-3xl py-5 border-t-2 border-b-2 border-gray-700">
        <a
          href=""
          className="hover:text-blue-500 duration-300 text-white"
          target="_blank"
        >
          <FaFacebook></FaFacebook>
        </a>
        <a
          href=""
          className="hover:text-pink-500 duration-300 text-white"
          target="_blank"
        >
          <FaInstagram></FaInstagram>
        </a>
        <a
          href=""
          className="hover:text-sky-500 duration-300 text-white"
          target="_blank"
        >
          <FaLinkedin></FaLinkedin>
        </a>
        <a
          href=""
          className="hover:text-red-500 duration-300 text-white"
          target="_blank"
        >
          <FaYoutube></FaYoutube>
        </a>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-3 py-5">
        <p className="text-lg">2025, All Rights Reserved.</p>
        <p>Unsubscribe</p>
      </div>
    </div>
  );
};

export default Footer;
