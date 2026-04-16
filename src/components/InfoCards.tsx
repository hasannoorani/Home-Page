import { Briefcase } from "lucide-react";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    icon: Briefcase,
    title: "Job Portal",
    description:
      "A full-stack job portal connecting candidates and recruiters with real-time application tracking.",
    button: "Get Started",
    link: "https://hirrd-taupe.vercel.app/", 
  },
  {
    icon: Bot,
    title: "AI Interview Platform",
    description:
      "An AI-powered interview marketplace with real-time video calls and smart feedback reports.",
    button: "Start Preparing",
    link: "https://ai-interview-platform-plum.vercel.app/",
  },
];

const InfoCards = () => (
  <section className="py-20 bg-muted">
    <div className="container mx-auto px-4">

      {/*Blink Animation */}
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0.3; }
            100% { opacity: 1; }
          }
          .blink-on-click:active {
            animation: blink 0.3s ease;
          }
        `}
      </style>

      <h2 className="section-heading">OUR PROJECTS</h2>
      <div className="gold-underline" />
      <p className="section-subheading mt-4">
        Discover world-class AI tools designed to connect, prepare, and get you hired.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-card rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-border"
          >
            <card.icon className="w-12 h-12 text-secondary mb-4" />

            <h3 className="text-xl font-bold text-foreground mb-2">
              {card.title}
            </h3>

            <p className="text-muted-foreground mb-6">
              {card.description}
            </p>

            {/*Single Button with Link + Blink */}
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 blink-on-click active:scale-95 transition-all duration-150 shadow-md">
                {card.button}
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InfoCards;