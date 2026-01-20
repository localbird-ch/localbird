import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="default" className="hidden md:inline-flex" onClick={() => window.location.href = 'mailto:localbirdch@gmail.com?subject=Contact Localbird&body=Hi there,%0A%0AI would like to get in touch with you.%0A%0ABest regards,%0A[Your Name]'}>
            Contact us
          </Button>
          <Button variant="outline" size="default" onClick={() => window.open('https://hoods.localbird.ch', '_blank')}>
            <Map className="mr-2 h-4 w-4" />
            Open map
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
