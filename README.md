# An AI-Driven Centralized Career Development Platform

<img width="1893" height="798" alt="image" src="https://github.com/user-attachments/assets/a907e981-7ec2-46c7-8f79-d44e5060c395" />

**From Job Search to Interview Success — Everything in One Place.**

A modern full-stack web application that seamlessly integrates a **Job Portal** and an **AI-Powered Interview Marketplace** to help students and professionals grow their careers smarter and faster.

---

## Features

### Job Portal
- Advanced job search with filters (location, company, role)
- Resume upload with Supabase Storage
- Real-time application tracking (Applied → Interviewing → Hired)
- Recruiter dashboard to post jobs and manage applications

### AI Interview Marketplace
- Credit-based booking system (Free, Starter, Pro plans)
- Real-time HD video calls + screen sharing (powered by Stream)
- AI Question Generator using **Google Gemini AI**
- Smart AI Feedback Reports (Technical depth, Communication, Problem-solving)
- Session recordings for Pro users
- Interviewer earnings & payout system

### Common Features
- Secure authentication with **Clerk**
- Role-based access (Candidate, Recruiter, Interviewee, Interviewer)
- Credit & Transaction management
- Responsive UI with **Tailwind CSS + Shadcn UI**

---

## Tech Stack

**Frontend**  
- Next.js 14 + React.js  
- Tailwind CSS + Shadcn UI  
- Lucide React (Icons)  
- Animate UI

**Backend & Database**  
- Supabase (PostgreSQL)  
- Prisma ORM  
- Supabase Storage Buckets

**Authentication & Security**  
- Clerk  
- Arcjet (Rate limiting + Bot protection)

**AI & Real-time**  
- Google Gemini AI  
- Stream (GetStream) SDK

**Other Tools**  
- React Hook Form + Zod  
- Date-fns  
- Resend (Email notifications)
