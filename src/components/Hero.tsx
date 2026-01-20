import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import MapMockup from "@/components/MapMockup";
import swissGovLogo from "@/assets/swiss_logo_flag.svg";
import googleMapsLogo from "@/assets/google-maps-logo.svg";
import outvisitLogo from "@/assets/Outvisit-logo.png";

const Hero = () => {
  return <section className="relative w-full flex flex-col bg-background">
      {/* Header */}
      <Header />
      
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center px-4 py-20 md:py-24 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2b384d 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        {/* Soft Color Accent Circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.08]" style={{ background: '#639fab' }}></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.06]" style={{ background: '#cc1a30' }}></div>
        
        <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
          {/* Eyebrow Text */}
          <p className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#cc1a30' }}>🇨🇭 For Renters</p>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight" style={{ color: '#2b384d' }}>Discover the neighborhood before you rent.</h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed md:text-xl pt-2">Read what residents know about the area and verify commute, safety and essentials.</p>

          {/* Primary CTA */}
          <div className="flex flex-col items-center justify-center gap-3 pt-6">
            <Button size="lg" className="w-full sm:w-auto shadow-lg text-base px-8 py-6" style={{ backgroundColor: '#cc1a30' }} onClick={() => window.open('https://hoods.localbird.ch', '_blank')}>
              Explore neighborhood insights
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a 
              href="mailto:localbirdch@gmail.com?subject=Localbird Early Access&body=Hi there,%0A%0AI'm interested in getting early access to Localbird.%0A%0ABest regards,%0A[Your Name]"
              className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-all"
            >
              Get early access
            </a>
          </div>

          {/* Trust Signals - Right below CTA */}
          <div className="pt-12 pb-8">
            <p className="text-sm text-muted-foreground mb-6 flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4" style={{ color: '#639fab' }} />
              <span>Trusted neighborhood insights from locals 🇨🇭</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              <img src={swissGovLogo} alt="Swiss Federal Statistical Office" className="h-8 md:h-10 grayscale" />
              <img src={googleMapsLogo} alt="Google Maps" className="h-8 md:h-10" />
              <img src={outvisitLogo} alt="Outvisit" className="h-7 md:h-9" />
            </div>
          </div>

          {/* Hero Visual - Map Mockup */}
          <div className="pt-20 md:pt-24">
            <div className="relative max-w-6xl mx-auto">
              <MapMockup />
            </div>
          </div>
        </div>
      </div>


      {/* How It Works Section */}
      <div className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#2b384d' }}>How It Works</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">Get the full picture of any neighborhood in three simple steps.</p>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold" style={{ color: '#cc1a30' }}>1</span>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#2b384d' }}>Enter Address</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Paste any rental listing address or URL into the search bar.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold" style={{ color: '#cc1a30' }}>2</span>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#2b384d' }}>Explore Insights</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">See transit times, nearby amenities, and neighborhood quality scores.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold" style={{ color: '#cc1a30' }}>3</span>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#2b384d' }}>Make a Decision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Compare locations confidently and choose the best fit for your lifestyle.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/20 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Column 1 - About */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#2b384d' }}>About Localbird</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Helping renters in Switzerland make informed decisions with trusted neighborhood data.</p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#2b384d' }}>Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://hoods.localbird.ch" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Open Map</a></li>
                <li><a href="mailto:localbirdch@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#2b384d' }}>Get in Touch</h4>
              <p className="text-sm text-muted-foreground mb-2">Questions or feedback?</p>
              <a href="mailto:localbirdch@gmail.com" className="text-sm font-medium hover:underline" style={{ color: '#cc1a30' }}>localbirdch@gmail.com</a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/40 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Localbird. Built with ❤️ in Switzerland.
            </p>
          </div>
        </div>
      </footer>
    </section>;
};
export default Hero;