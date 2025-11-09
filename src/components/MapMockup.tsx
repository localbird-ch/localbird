import { useState } from "react";
import { Dumbbell, ShoppingCart, GraduationCap, Home, Briefcase, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
const MapMockup = () => {
  const [filters, setFilters] = useState({ fitness: true, groceries: true, schools: false });
  return <div className="w-full bg-card rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-border/50">
      {/* Top Search Bar */}
      <div className="w-full bg-card border-b border-border/30 p-4 md:p-6">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <Input placeholder="Enter listing address" className="flex-1 h-12 px-4 rounded-full border-2 border-input bg-background text-foreground placeholder:text-muted-foreground" />
          <Button size="lg" className="sm:w-auto whitespace-nowrap rounded-full" onClick={() => window.open('https://hoods.localbird.ch', '_blank')}>
            Explore nearby
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 ml-1">We'll map commute times and nearby places for this address.</p>
      </div>

      <div className="flex flex-col md:flex-row min-h-[500px] lg:min-h-[600px]">
        {/* Left Sidebar - Filter Pills */}
        <div className="w-full md:w-[28%] bg-gradient-to-b from-muted/20 to-background p-4 md:p-6 border-b md:border-b-0 md:border-r border-border/30 shadow-inner">
          {/* Section Title */}
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">
            What matters to you
          </h3>
          
          <div className="space-y-2.5 mb-5">
            {/* Fitness */}
            <button onClick={() => setFilters(prev => ({ ...prev, fitness: !prev.fitness }))} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg border-2 ${filters.fitness ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20' : 'bg-background border-secondary text-secondary shadow-md'}`}>
              <Dumbbell className="h-4 w-4" />
              <span className="font-medium text-sm">Fitness</span>
            </button>

            {/* Groceries */}
            <button onClick={() => setFilters(prev => ({ ...prev, groceries: !prev.groceries }))} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg border-2 ${filters.groceries ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20' : 'bg-background border-secondary text-secondary shadow-md'}`}>
              <ShoppingCart className="h-4 w-4" />
              <span className="font-medium text-sm">Groceries</span>
            </button>

            {/* Schools */}
            <button onClick={() => setFilters(prev => ({ ...prev, schools: !prev.schools }))} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg border-2 ${filters.schools ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20' : 'bg-background border-secondary text-secondary shadow-md'}`}>
              <GraduationCap className="h-4 w-4" />
              <span className="font-medium text-sm">Schools</span>
            </button>
          </div>

          {/* Divider */}
          <Separator className="my-5 bg-border/40" />

          {/* Distance Range Dropdown */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground">
              Distance range
            </label>
            <Select defaultValue="500m">
              <SelectTrigger className="w-full h-10 rounded-lg bg-background border-input">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border shadow-lg z-50">
                <SelectItem value="500m">500 m</SelectItem>
                <SelectItem value="1km">1 km</SelectItem>
                <SelectItem value="2km">2 km</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Right Side - CSS Map */}
        <div className="flex-1 relative bg-gradient-to-br from-muted/30 to-muted/50 overflow-hidden cursor-pointer" onClick={() => window.open('https://hoods.localbird.ch', '_blank')}>
          {/* Grid Lines - Subtle street grid with reduced opacity */}
          <div className="absolute inset-0 opacity-30">
            {/* Vertical lines */}
            {[...Array(12)].map((_, i) => <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-border/20" style={{
            left: `${(i + 1) * 8.33}%`
          }} />)}
            {/* Horizontal lines */}
            {[...Array(8)].map((_, i) => <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-border/20" style={{
            top: `${(i + 1) * 12.5}%`
          }} />)}
          </div>

          {/* Neighborhood Borders */}
          {/* Mon Repos - Top Left */}
          <div className="absolute top-[10%] left-[8%] w-[35%] h-[38%] border-2 border-secondary/30 rounded-lg pointer-events-none">
            <span className="absolute top-2 left-2 text-[10px] font-medium text-secondary/60">Mon Repos</span>
          </div>
          
          {/* Centre - Middle */}
          <div className="absolute top-[30%] left-[35%] w-[40%] h-[45%] border-2 border-secondary/30 rounded-lg pointer-events-none">
            <span className="absolute top-2 left-2 text-[10px] font-medium text-secondary/60">Centre</span>
          </div>
          
          {/* Chailly - Bottom Right */}
          <div className="absolute top-[52%] left-[58%] w-[32%] h-[35%] border-2 border-secondary/30 rounded-lg pointer-events-none">
            <span className="absolute top-2 left-2 text-[10px] font-medium text-secondary/60">Chailly</span>
          </div>

          {/* Search Radius Circle - Reduced opacity */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full border-2 border-primary/25 bg-primary/3" />

          {/* Commute Route Line - Dashed line from home to work with glow */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{
          zIndex: 5
        }}>
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M 50% 50% Q 60% 30%, 75% 25%" stroke="hsl(var(--accent))" strokeWidth="3" strokeDasharray="8 4" fill="none" opacity="0.9" filter="url(#glow)" />
          </svg>

          {/* Commute Time Badge - Interactive */}
          <div className="absolute top-[35%] left-[62%] bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-border/50 hover:shadow-xl hover:scale-105 transition-all cursor-pointer group" style={{
          zIndex: 10
        }}>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-secondary">18 min commute</span>
              <ChevronRight className="h-3 w-3 text-secondary/60 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          {/* Home Pin - Center of radius with shadow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary shadow-[0_8px_16px_rgba(0,0,0,0.15),0_0_20px_rgba(43,56,77,0.2)] flex items-center justify-center border-3 border-white z-20">
            <Home className="h-6 w-6 text-secondary-foreground" />
          </div>

          {/* Work Pin - Destination */}
          <div className="absolute top-[25%] left-[75%] w-12 h-12 rounded-full bg-accent shadow-xl flex items-center justify-center border-3 border-white z-20">
            <Briefcase className="h-6 w-6 text-accent-foreground" />
          </div>

          {/* Map Markers - Groceries (Red/Primary) */}
          <div className="absolute top-[35%] left-[45%] w-9 h-9 rounded-full bg-primary shadow-lg flex items-center justify-center border-2 border-white z-10">
            <ShoppingCart className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="absolute top-[55%] left-[35%] w-9 h-9 rounded-full bg-primary shadow-lg flex items-center justify-center border-2 border-white z-10">
            <ShoppingCart className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="absolute top-[48%] left-[60%] w-9 h-9 rounded-full bg-primary shadow-lg flex items-center justify-center border-2 border-white z-10">
            <ShoppingCart className="h-4 w-4 text-primary-foreground" />
          </div>

          {/* Map Markers - Fitness (Blue/Accent) */}
          <div className="absolute top-[42%] left-[52%] w-9 h-9 rounded-full bg-accent shadow-lg flex items-center justify-center border-2 border-white z-10">
            <Dumbbell className="h-4 w-4 text-accent-foreground" />
          </div>
          <div className="absolute top-[60%] left-[48%] w-9 h-9 rounded-full bg-accent shadow-lg flex items-center justify-center border-2 border-white z-10">
            <Dumbbell className="h-4 w-4 text-accent-foreground" />
          </div>
          <div className="absolute top-[38%] left-[38%] w-9 h-9 rounded-full bg-accent shadow-lg flex items-center justify-center border-2 border-white z-10">
            <Dumbbell className="h-4 w-4 text-accent-foreground" />
          </div>

          {/* Additional accent elements - park areas */}
          <div className="absolute top-[20%] right-[15%] w-16 h-16 rounded-lg bg-green-200/40 border border-green-300/30" />
          <div className="absolute bottom-[25%] left-[20%] w-20 h-12 rounded-lg bg-green-200/40 border border-green-300/30" />

          {/* Legend - Bottom Right */}
          <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md border border-border/40" style={{
          zIndex: 10
        }}>
            <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-primary flex items-center justify-center">
                  <ShoppingCart className="h-1.5 w-1.5 text-primary-foreground" />
                </div>
                <span>Groceries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-accent flex items-center justify-center">
                  <Dumbbell className="h-1.5 w-1.5 text-accent-foreground" />
                </div>
                <span>Fitness</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-secondary flex items-center justify-center">
                  <GraduationCap className="h-1.5 w-1.5 text-secondary-foreground" />
                </div>
                <span>Schools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default MapMockup;