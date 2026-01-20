import logoImage from "@/assets/Localbird-Logo.png";

const Logo = () => {
  return <div className="flex items-center gap-2 flex-shrink-0">
      <img src={logoImage} alt="Localbird" className="h-auto w-28 md:w-40" />
    </div>;
};
export default Logo;