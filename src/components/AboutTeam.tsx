const team = [
  { name: "MOHD HASAN NOORANI", role: "Developer" },
  { name: "MD NOOR ALAM", role: "Developer" },
  { name: "UZMA TAHSEEN", role: "Developer" },
];

const AboutTeam = () => (
  <section className="py-20 bg-muted">
    <div className="container mx-auto px-4 text-center">

      {/* Heading */}
      <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
        Team
      </span>

      <h2 className="section-heading">About Our Team</h2>
      <div className="gold-underline mx-auto" />

      {/* Team Quote */}
      <p className="section-subheading mt-4 max-w-2xl mx-auto">
        "A strong team turns ideas into reality. Together, we built innovative solutions 
        by combining creativity, technical skills, and continuous collaboration."
      </p>

      {/* Centered Cards */}
      <div className="flex justify-center items-center gap-8 mt-12 flex-wrap">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-card rounded-xl shadow-lg px-10 py-8 hover:shadow-xl transition-all duration-300 border border-border text-center min-w-[250px]"
          >
            <h3 className="text-xl font-bold text-foreground mb-2">
              {member.name}
            </h3>
            <p className="text-muted-foreground">{member.role}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default AboutTeam;