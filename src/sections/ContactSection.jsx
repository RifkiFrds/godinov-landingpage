import React, { useState } from "react";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import { sendInbox } from "../api/inbox";
import { Phone, Mail, MapPin } from "lucide-react";
import SuccessModal from "../components/ui/SuccessModal";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);


  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendInbox({
        name: form.name,
        email: form.email,
        contact: form.contact,
        company: form.company,
        address: form.address,
        description: form.message,
      });

      setOpenSuccess(true);

      setForm({
        name: "",
        email: "",
        contact: "",
        company: "",
        address: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-godinov-light px-4">
      <div className="max-w-6xl mx-auto">
        <div className="wave-godinov-shape-bawah"></div>

        {/* Container Besar */}
        <div className="bg-white shadow-xl rounded-3xl grid md:grid-cols-3 overflow-hidden">
          {/* --- Left: Contact Information Card (Godinov Blue) --- */}
          <div className="bg-godinov p-10 text-white flex flex-col justify-between relative overflow-hidden md:col-span-1">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Contact Information
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Kami siap membantu keperluan digital kamu—website, dashboard,
                sistem informasi, dan konsultasi bisnis teknologi.
              </p>

              <div className="mt-8 space-y-5">
                <InfoItem icon={Phone} text="+62 838-4566-3345" />
                <InfoItem icon={Mail} text="godinov.id@gmail.com" />
                <InfoItem icon={MapPin} text="Tangerang, Indonesia" />
              </div>
            </div>

            <p className="text-white/60 text-sm mt-10">© Godinov Indonesia</p>
          </div>

          {/* --- Right: Form Section --- */}
          <div className="p-10 bg-white text-godinov md:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 text-godinov">
              Get In Touch
            </h3>

            <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="col-span-2 md:col-span-1">
                <Input
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <Input
                  label="Your Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <Input
                  label="Phone Number"
                  type="tel"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="+62..."
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <Input
                  label="Company (Optional)"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              {/* NEW FIELD : ADDRESS */}
              <div className="col-span-2">
                <Input
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Your address"
                />
              </div>

              <div className="col-span-2">
                <Textarea
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                />
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    px-6 py-3 rounded-full
                    bg-[var(--godinov-cyan)]
                    text-[var(--godinov-bg)]
                    font-semibold
                    hover:brightness-95
                    active:scale-[0.97]
                    transition
                  "
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          <div className="wave-penutup-shape"></div>
        </div>
      </div>
      <SuccessModal open={openSuccess} onClose={() => setOpenSuccess(false)} />
    </section>
  );
}

// mini components
function InfoItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={20} className="text-white" />
      <span className="text-white/90">{text}</span>
    </div>
  );
}

