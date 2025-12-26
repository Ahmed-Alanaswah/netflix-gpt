import { Logo_Img } from "../utils/imageUrls";
const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" src={Logo_Img} alt="logo" />
    </div>
  );
};

export default Header;
