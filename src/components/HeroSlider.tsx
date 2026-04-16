import { useState, useEffect } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  { img: heroSlide1, title: "Welcome to An AI-Driven Centralized Career Development Platform", subtitle: "From job search to interview success — everything you need in one place." },
  { img: heroSlide2, title: "Find Your Dream Job with Hirrd", subtitle: "Search, apply, and track job applications with a powerful full-stack job portal built for candidates and recruiters." },
  { img: heroSlide3, title: "Practice mock interviews and get instant AI feedback.", subtitle: "Improve communication, technical skills, and confidence with live interview sessions." },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[70vh] md:h-[85vh] mt-16 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground max-w-2xl animate-fade-in-up">
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mt-4 max-w-xl">
          {slides[current].subtitle}
        </p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-secondary w-8" : "bg-primary-foreground/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
