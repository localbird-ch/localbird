import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import MapMockup from "@/components/MapMockup";
const Hero = () => {
  return <section className="relative w-full min-h-screen flex flex-col bg-background">
      {/* Header */}
      <Header />
      
      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">Local insights before you rent.</h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed md:text-lg">Enter a listing address and instantly see your commute, nearby essentials and how good the neighborhood is — all in one place. Powered by trusted 🇨🇭 Swiss data and Google Maps™.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6">
          <Button size="lg" className="w-full sm:w-auto">Open the map<ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Get lifetime access
          </Button>
        </div>

          {/* Hero Visual - Map Mockup */}
          <div className="pt-16 md:pt-20">
            <div className="relative max-w-6xl mx-auto">
              <MapMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-xs text-muted-foreground">
          © 2025 Localbird. Built in Switzerland.
        </p>
      </footer>
    </section>;
};
export default Hero;