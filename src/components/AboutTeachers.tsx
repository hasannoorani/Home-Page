import { Users } from "lucide-react";

const teachers = [
  { name: "Prof. Pradeep Kumar, Head", role: "Department of Computer Science & Information Technology", initials: "HOD" },
  { name: "Dr. Afrah Fathima", role: "Department of Computer Science & Information Technology", initials: "Co-ordinator" },
  { name: "Mr. Mohd. Rafeeq", role: "Department of Computer Science & Information Technology", initials: "Supervisor" },
  { name: "Mr. Mohammad Rashid", role: "Department of Computer Science & Information Technology", initials: "Supervisor" },
];

const AboutTeachers = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Users className="w-6 h-6 text-secondary" />
        <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Faculty</span>
      </div>
      <h2 className="section-heading">About Our Teachers</h2>
      <div className="gold-underline" />
      <p className="section-subheading mt-4">
        These projects were developed under the guidance of a dedicated mentor who provided valuable insights, technical direction, and continuous support throughout the development journey.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {teachers.map((t) => (
          <div key={t.name} className="text-center group">
            <div className="w-32 h-32 mx-auto rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              {t.initials}
            </div>
            <h3 className="font-bold text-foreground">{t.name}</h3>
            <p className="text-muted-foreground text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutTeachers;
