import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-900 mx-auto grid w-full gap-8 px-4 py-16 text-gray-300 lg:grid-cols-3">
      <div className="max-w-[1240px] lg:col-span-1">
        <h1 className="text-3xl font-bold italic">
          cine<span className="text-secondary">FLIX</span>
        </h1>
        <p className="text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, totam rem similique ea consequuntur, necessitatibus quidem vel delectus veniam nihil illo odio.</p>
        <div className="my-4 flex md:w-[75%]">
          <FaFacebookSquare
            size={30}
            className="mx-3"
          />
          <FaInstagram
            size={30}
            className="mx-3"
          />
          <FaTwitterSquare
            size={30}
            className="mx-3"
          />
        </div>
      </div>
      <div className="flex justify-between lg:justify-evenly lg:col-span-2 px-4 items-center">
        <div>
          <h6 className="font-medium text-gray-400">CineFLIX</h6>
          <ul>
            <li className="py-2">Beranda</li>
            <li className="py-2">Film</li>
            <li className="py-2">TV Series</li>
            <li className="py-2">Tentang Kami</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Akun</h6>
          <ul>
            <li className="py-2">Profil</li>
            <li className="py-2">Watchlist</li>
            <li className="py-2">Pengaturan</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
