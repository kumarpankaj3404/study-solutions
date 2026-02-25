"use client"
import Parallax from "@/components/ui/ParallaxScroll"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

const page = () => {
  return (
    // Added a subtle dot-pattern background to the whole page for a modern UI feel
    <main className="min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 overflow-hidden">
            
            {/* Header Section */}
            <section className="mb-20 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm tracking-wide"
                >
                    Learn & Grow
                </motion.div>
                
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 mb-6">
                    Study Solutions
                </h1>
                
                <motion.p className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Welcome to our Study Solutions page! Here, we provide a variety of resources and tools to help you excel in your studies. Whether you're looking for study guides, practice exams, or tips on effective study techniques, we've got you covered.
                </motion.p>
                <motion.p className="text-base md:text-lg text-slate-500 font-normal max-w-2xl leading-relaxed mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <b>About Us:</b> Study Solutions is an industry-leading, AI-powered educational platform dedicated to transforming the way students learn and achieve academic success. Our mission is to democratize access to high-quality, personalized education by leveraging cutting-edge voice-first AI technology, expert-designed resources, and a user-centric approach. We believe that every learner deserves a tailored, interactive, and engaging experience—whether they're preparing for exams, mastering new concepts, or seeking guidance from subject-matter experts.
                  <br /><br />
                  <b>What Sets Us Apart:</b> Our platform combines advanced voice synthesis, real-time tutoring, and a diverse library of AI Companions—each with unique expertise in subjects like Mathematics, Science, History, Coding, and Languages. We go beyond static content by offering dynamic, conversational learning, real-time feedback, and progress tracking. Our commitment to accessibility, inclusivity, and continuous innovation ensures that learners from all backgrounds can thrive in a supportive, future-ready environment.
                  <br /><br />
                  <b>Our Vision:</b> To empower the next generation of learners with the tools, confidence, and curiosity to excel in a rapidly changing world. We are passionate about bridging educational gaps, fostering lifelong learning, and equipping students with the skills they need to succeed—academically, professionally, and personally.
                </motion.p>
            </section>

            {/* Mission Section (Now presented as a sleek card) */}
            <section className="mb-24 flex justify-center">
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 max-w-4xl w-full text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        To empower students with the tools and resources they need to succeed academically and beyond.
                    </p>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="mb-24 flex justify-center">
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 max-w-4xl w-full">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">How Study Solutions Works</h2>
                    <ol className="list-decimal list-inside text-slate-700 text-lg space-y-3">
                        <li><b>Choose Your AI Companion:</b> Browse our library of subject-specific AI tutors, each with a unique persona and expertise (e.g., Countsy for Math, Codey for Coding).</li>
                        <li><b>Start a Real-Time Voice Session:</b> Instantly connect with your chosen companion for a natural, conversational learning experience powered by advanced voice synthesis and recognition.</li>
                        <li><b>Interactive Learning:</b> Ask questions, solve problems, and receive step-by-step guidance. The AI adapts to your pace and provides real-time feedback.</li>
                        <li><b>Session History & Progress:</b> All your sessions are logged for easy review. Track your learning journey, revisit explanations, and monitor your progress over time.</li>
                        <li><b>Personalized & Accessible:</b> Our platform is designed for all learners, with features like smart filtering, progress tracking, and support for multiple subjects and learning styles.</li>
                    </ol>
                    <p className="mt-6 text-slate-500 text-base text-center">Built with Next.js 16, React 19, Tailwind CSS, and powered by OpenAI, Deepgram, ElevenLabs, and Supabase for a seamless, scalable, and secure experience.</p>
                </div>
            </section>

            {/* Resources Section */}
            <section className="mb-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Resources</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Explore our wide range of study materials, including interactive tools designed to support your learning journey.
                    </p>
                </div>
                
                <div className="w-full">
                    <Parallax />
                </div>
            </section>
            
            {/* Footer Section */}
            <Footer />
        </div>
    </main>
  )
}

export default page

// --- Footer Template ---
function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 pt-10 pb-8 text-center text-slate-500">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
        <a href="https://github.com/kumarpankaj3404" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-2">
          <FaGithub size={20} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/pankaj-kumar-513a10298/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-2">
          <FaLinkedin size={20} />
          LinkedIn
        </a>
        <a href="https://pankajkumar.app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-2">
          <BsGlobe2 size={20} />
          Portfolio
        </a>
      </div>
      <div className="text-xs text-slate-400 mb-2">&copy; {new Date().getFullYear()} Study Solutions. All rights reserved.</div>
      <div className="text-xs text-slate-400">Developed by <a href="https://pankajkumar.app" className="underline hover:text-blue-600">Pankaj Kumar</a></div>
    </footer>
  )
}