import { Volume2, Shield, Train, Coffee, MapPin, BadgeCheck, Trees, Users, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
const MapMockup = () => {
  const categories = [
    { id: 'noise', label: 'Noise', icon: Volume2, rating: 8, description: 'Peace & quiet levels' },
    { id: 'safety', label: 'Safety', icon: Shield, rating: 9, description: 'Day & night security' },
    { id: 'green', label: 'Green Space & Walkability', icon: Trees, rating: 7, description: 'Parks & pedestrian areas' },
    { id: 'daily', label: 'Daily Life Convenience', icon: Coffee, rating: 8, description: 'Errands & commute ease' },
    { id: 'social', label: 'Local Vibe Score™', icon: Users, rating: 8, description: 'Community & atmosphere' },
    { id: 'leisure', label: 'Leisure', icon: Dumbbell, rating: 7, description: 'Activities & entertainment' }
  ];

  const reviews = [
    { rating: 9, text: "Really peaceful area, kids sleep well at night. Great for families looking to settle down in Lausanne.", name: "Sophie", duration: "3-5 years", verified: true },
    { rating: null, text: "My wife walks home from the train station at 11pm without worry. Feels safe and the rent is reasonable for this part of the city.", name: "Marc", duration: "5-10 years", verified: true },
    { rating: 8, text: "Metro is close, groceries are 2 min walk. Super convenient location for work and daily life.", name: "Anna", duration: "1-3 years", verified: true }
  ];

  return       <div className="w-full bg-card rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-border/50">

      {/* Main Content - Review First */}
      <div className="p-4 md:p-6 space-y-6">
        
        {/* Area Review Summary */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Lausanne neighborhood</span>
            <span className="font-bold text-muted-foreground/50">VD</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-foreground">8.3</span>
              <span className="text-lg text-muted-foreground">/10</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">Recommended for living</span>
              <span className="text-xs text-muted-foreground">18 locals reviewed</span>
            </div>
          </div>
        </div>

        {/* Category Ratings */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="group bg-gradient-to-br from-card to-muted/10 border border-border/50 rounded-2xl p-3 md:p-3.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-200 aspect-square flex flex-col items-center justify-center text-center">
                <div className="bg-primary/10 rounded-xl p-2 mb-2 group-hover:bg-primary/15 transition-colors">
                  <Icon className="h-4 w-4 md:h-4 w-4 text-primary" />
                </div>
                <span className="text-[10px] md:text-[11px] font-semibold text-foreground mb-1 leading-tight px-1">{cat.label}</span>
                <div className="flex items-baseline gap-0.5 mb-0.5">
                  <span className="text-xl md:text-2xl font-bold text-foreground">{cat.rating}</span>
                  <span className="text-[10px] text-muted-foreground">/10</span>
                </div>
                <p className="text-[9px] md:text-[10px] text-muted-foreground/70 leading-tight px-0.5">{cat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Local Notes - Micro Reviews */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground">What locals say</h4>
          <div className="grid grid-cols-1 gap-3">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-card border border-border rounded-2xl p-5 space-y-3 hover:shadow-md transition-all">
                <p className="text-foreground leading-relaxed text-[15px]">"{review.text}"</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {review.rating && (
                    <div className="inline-flex items-center gap-1.5 bg-foreground text-background px-3 py-1.5 rounded-full text-xs font-semibold">
                      <span>{review.rating}/10</span>
                    </div>
                  )}
                  <div className="inline-flex items-center gap-1.5 bg-foreground text-background px-3 py-1.5 rounded-full text-xs font-semibold">
                    <span>{review.name}</span>
                    {review.verified && (
                      <BadgeCheck className="h-3 w-3 text-white" style={{ fill: '#639fab' }} />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">Lived here {review.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button at Bottom */}
        <div className="flex flex-col items-center gap-3 pt-6">
          <Button size="lg" className="w-full sm:w-auto whitespace-nowrap rounded-full" onClick={() => window.open('https://hoods.localbird.ch', '_blank')}>
            Explore neighborhoods
          </Button>
          <p className="text-xs text-muted-foreground text-center">See ratings and reviews from locals in your search area.</p>
        </div>

      </div>
    </div>;
};
export default MapMockup;