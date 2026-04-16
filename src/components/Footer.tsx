import { Mail, Phone, MapPin } from "lucide-react";
import universityLogo from "@/assets/university-logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={universityLogo} alt="Logo" width={40} height={40} className="rounded-full bg-primary-foreground p-1" loading="lazy" />
            <span className="text-lg font-bold">An AI-Driven Centralized Career Development Platform</span>
          </div>
          <p className="text-primary-foreground/70 text-sm">
  Empowering careers with AI-driven solutions for job search, hiring, and interview preparation.
</p>
        </div>

        <div>
          <h4 className="font-bold text-secondary mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {["Home", "About", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-secondary transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-secondary mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><MapPin size={16} /> Urdu University Rd, near LNT Towers, Telecom Nagar, Gachibowli, Khajaguda, Hyderabad, Telangana 500032</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 300 1234567</li>
            <li className="flex items-center gap-2"><Mail size={16} /> project3271@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4 text-center text-sm text-primary-foreground/50">
      © 2026 TEAM 13. All rights reserved.
    </div>
  </footer>
);

export default Footer;
