import React from "react";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import SuccessModal from "../components/ui/SuccessModal";
import { useContactForm } from "../hooks/useContactForm";

export default function ContactSection() {
  const {
    form,
    loading,
    openSuccess,
    setOpenSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-godinov-light px-4">
      <div className="max-w-6xl mx-auto">
        <div className="wave-godinov-shape-bawah"></div>

        <div className="bg-white shadow-xl rounded-3xl grid md:grid-cols-3 overflow-hidden">
          
          {/* LEFT INFO */}
          <div className="bg-godinov p-10 text-white flex flex-col justify-between md:col-span-1">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Contact Information
              </h3>
              <p className="text-white/85 text-sm">
                Kami siap membantu kebutuhan digital kamu—website, dashboard,
                sistem informasi, dan konsultasi teknologi.
              </p>

              <div className="mt-8 space-y-5">
                <InfoItem icon={Phone} text="+62 838-4566-3345" />
                <InfoItem icon={Mail} text="godinov.id@gmail.com" />
                <InfoItem icon={MapPin} text="Tangerang, Indonesia" />
              </div>
            </div>

            <p className="text-white/60 text-sm mt-10">
              © Godinov Indonesia
            </p>
          </div>

          {/* FORM */}
          <div className="p-10 md:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 text-godinov">
              Get In Touch
            </h3>

            <form
              className="grid md:grid-cols-2 gap-6"
              onSubmit={handleSubmit}
            >
              <Input
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />

              <Input
                label="Your Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
              />

              <Input
                label="Phone Number"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="+62..."
              />

              <Input
                label="Company (Optional)"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company name"
              />

              <div className="md:col-span-2">
                <Input
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Your address"
                />
              </div>

              <div className="md:col-span-2">
                <Textarea
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                />
              </div>

              <div className="md:col-span-2">
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

      <SuccessModal
        open={openSuccess}
        onClose={() => setOpenSuccess(false)}
      />
    </section>
  );
}

// MINI COMPONENT
function InfoItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={20} className="text-white" />
      <span className="text-white/90">{text}</span>
    </div>
  );
}
