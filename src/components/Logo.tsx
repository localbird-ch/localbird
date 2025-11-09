import logoImage from "@/assets/Localbird-Logo.png";

const Logo = () => {
  return <div className="flex items-center gap-2">
      <img src={logoImage} alt="Localbird" className="h-8 md:h-10" />
    </div>;
};
export default Logo;