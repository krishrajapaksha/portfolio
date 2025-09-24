import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "fail"

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = (formData.get("from_name") || "").toString().trim();
    const email = (formData.get("from_email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      setStatus("fail");
      return;
    }

    setStatus("sending");

    emailjs
      .sendForm(
        "service_371ag9h",
        "template_4hvp9xu",
        form.current,
        "hhtlq_gd41qOAUyA7"
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        () => {
          setStatus("fail");
        }
      );
  };

  const handleInputFocus = () => {
    if (status === "success") {
      form.current?.reset();
      setStatus("idle");
    } else if (status === "fail") {
      setStatus("idle");
    }
  };

  const getButtonStyles = () => {
    switch (status) {
      case "success":
        return "bg-green-500 text-white";
      case "fail":
        return "bg-red-500 text-white";
      case "sending":
        return "bg-cyan-500 text-white cursor-wait";
      default:
        return "bg-zinc-200 text-black hover:bg-cyan-400";
    }
  };

  const getButtonText = () => {
    switch (status) {
      case "success":
        return "SUCCESS";
      case "fail":
        return "FAIL";
      case "sending":
        return "SENDING...";
      default:
        return "SEND MESSAGE";
    }
  };

  return (
    <div className="contact-page bg-[#080c0f] text-zinc-200">
      <Header />

      <section className="px-6 md:px-10 py-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-200">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl max-w-md opacity-80 text-justify">
            Have a project in mind, a collaboration idea, or just want to say hi?
            I’d love to hear from you.
          </p>
          <img
            src="/mssg.svg"
            alt="Logo / Illustration"
            className="w-40 md:w-60 mt-4 opacity-50"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                onFocus={handleInputFocus}
                className="w-full px-4 py-3 bg-[#111518] border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="from_email"
                placeholder="Your email"
                onFocus={handleInputFocus}
                className="w-full px-4 py-3 bg-[#111518] border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                onFocus={handleInputFocus}
                className="w-full px-4 py-3 bg-[#111518] border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-3 font-semibold tracking-widest cursor-pointer transition-colors duration-200 ${getButtonStyles()}`}
            >
              {getButtonText()}
            </button>
          </form>
        </div>
      </section>
      
      <hr className="border-t-4 border-zinc-700 my-8 mx-6 md:mx-16" />

      <section className="px-6 md:px-10 max-w-6xl mx-auto py-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 pb-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-zinc-200 tracking-widest">CONNECT</h3>
            <div className="flex flex-col gap-2 mt-2">
              <a href="https://www.instagram.com/krish_rajapaksha?igsh=MWU5cGZyNHhxa3duaQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                Instagram
              </a>
              <a href="http://linkedin.com/in/krishan-rajapaksha-626393262" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-zinc-200 tracking-widest">CONTACT</h3>
            <div className="flex flex-col gap-2 mt-2">
              <a href="mailto:krishanrajapaksha@email.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                krishanrajapaksha@email.com
              </a>
              <a href="https://wa.me/94768538466" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
                +94 76 853 8466
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
