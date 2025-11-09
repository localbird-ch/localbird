import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <Button variant="outline" size="default">
          Open map
        </Button>
      </div>
    </header>
  );
};

export default Header;
