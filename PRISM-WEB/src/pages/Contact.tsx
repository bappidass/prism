import { useState } from "react";
import useInquiryStore from "@/stores/useInquiryStore";
import { toast } from "sonner";

const Contact = () => {
  const { createInquiry } = useInquiryStore();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const name = form.name.trim();
  const phone = form.phone.trim();
  const email = form.email.trim();
  const message = form.message.trim();

  if (!name || !phone || !email || !message) {
    toast.error("All fields are required");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Invalid email format");
    return;
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    toast.error("Invalid phone number");
    return;
  }

  try {
    await createInquiry({ name, phone, email, message });
    toast.success("Thank you! We will get back to you soon 🙌");
    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

  } catch (error) {
    toast.error("Something went wrong. Please try again.");
  }
};

  return (
    <section className="p-8 md:p-12 bg-white">
      <div className="max-w-6xl mx-auto  overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-md">
        {/* Form */}
        <div className="bg-[#5B7DB1] p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-heading text-white  mb-8">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-xs font-bold tracking-[0.14em] mb-2">
                NAME *
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/50 pb-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-white text-xs font-bold tracking-[0.14em] mb-2">
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-b border-white/50 pb-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-white text-xs font-bold tracking-[0.14em] mb-2">
                EMAIL *
              </label>
              <input
                type="email"
                required
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/50 pb-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-white text-xs font-bold tracking-[0.14em] mb-2">
                MESSAGE
              </label>
              <textarea
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#7094C4] rounded-lg p-3 text-sm text-white placeholder:text-white/60 focus:outline-none resize-none border border-white/50 focus:border-white"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#1E3A6E] text-white px-10 py-3 md:py-4 rounded-full text-sm font-semibold tracking-widest hover:opacity-90 transition-opacity"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Map */}
        <div className="min-h-[350px] lg:min-h-0">
          <iframe
            title="PRISM Institute Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-79.7%2C43.5%2C-79.5%2C43.7&layer=mapnik&marker=43.5890%2C-79.6441"
            className="w-full h-full min-h-[350px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
