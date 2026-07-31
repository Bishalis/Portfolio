import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ContactForm as ContactFormType } from "../types";
import { Title } from "../Components/Title";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<ContactFormType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   try{
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    alert("Email sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
   }catch(error){
    console.error("Error sending email:", error);
    alert("Failed to send email.");
   }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bishalshahi1/",
      icon: <FaLinkedin className="h-4 w-4 text-[#0A66C2]" />,
    },
    {
      name: "Github",
      url: "https://github.com/dashboard",
      icon: <FaGithub className="h-4 w-4 text-gray-900 dark:text-white" />,
    },
    {
      name: "Email",
      url: "mailto:shahibishal786526@gmail.com",
      icon: <MdEmail className="h-4 w-4 text-red-500" />,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Title title="Contact Me" className="left-auto top-10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Send me a message ✉️
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I promise I don't bite. Let's build something awesome together.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="input-field h-14 rounded-lg px-4"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="input-field h-14 rounded-lg px-4"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Let's build something awesome"
                  className="input-field h-14 rounded-lg px-4"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>

                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or just say hello..."
                  required
                  className="input-field rounded-lg px-4 py-3 resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group w-full h-14 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-700 hover:gap-3"
              >
                <span>Send Message</span>

                {/* Paper Plane */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3 21l18-9L3 3l3 9h7"
                  />
                </svg>
              </button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                ⚡ I usually reply within 24 hours... unless I'm fighting a
                stubborn bug. ☕
              </p>
            </form>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build Something Awesome 🚀
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              Whether it's a freelance project, internship, full-time
              opportunity, collaboration, or simply talking about football and
              tech—I'm always happy to connect.
            </p>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
          flex
          items-center
          gap-1.5
          text-sm
          text-gray-700
          dark:text-gray-200
          transition-all
          duration-300
          hover:-translate-y-1
          hover:text-blue-500
        "
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-dashed border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 p-5">
              <p className="text-blue-700 dark:text-blue-300 font-medium">
                💡 Fun Fact
              </p>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Coffee, good music, and clean code are responsible for at least
                90% of my productivity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
