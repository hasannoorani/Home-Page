import { Lightbulb, Target, Rocket } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Leveraging AI and modern web technologies to create intelligent, real-time solutions for job searching and interview preparation.",
  },
  {
    icon: Target,
    title: "Mission",
    desc: "To empower job seekers and recruiters by providing an intelligent, user-friendly platform that simplifies hiring, enhances interview preparation, and accelerates career growth through modern technology and AI-driven solutions.",
  },
  {
    icon: Rocket,
    title: "Vision",
    desc: "Our vision is to build a future where AI-driven solutions redefine hiring and interview preparation, making career growth smarter, faster, and accessible to everyone.",
  },
];

const AboutProject = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      
      <h2 className="section-heading">About Our Project</h2>
      <div className="gold-underline" />

      <p className="section-subheading mt-4 max-w-3xl mx-auto text-center">
        Our platform combines a full-stack job portal and an AI-powered interview marketplace to help students and professionals prepare, apply, and succeed in their careers.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
        {features.map((f) => (
          <div key={f.title} className="text-center p-6">
            
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <f.icon className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2">
              {f.title}
            </h3>

            {/* JUSTIFIED TEXT */}
            <p className="text-muted-foreground text-justify leading-relaxed">
              {f.desc}
            </p>

          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutProject;