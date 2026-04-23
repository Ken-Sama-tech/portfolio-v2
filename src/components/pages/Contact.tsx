import { Send } from "lucide-react";
import Github_Icon from "@assets/github.svg";
import Facebook_Icon from "@assets/facebook.svg";
import { type FC, useRef } from "react";
import emailjs from "@emailjs/browser";

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const serviceId = import.meta.env.VITE_SERVICE_ID;

emailjs.init({
  publicKey,
  blockHeadless: true,
  limitRate: {
    id: "app",
    throttle: 10000,
  },
});

const Contact: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section className="min-h-screen flex items-center justify-center gradient-dark px-4">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl! md:text-5xl font-bold tracking-wide gradient-gold bg-clip-text text-transparent!">
            GET IN TOUCH
          </h1>
          <p className="text-gray-400! mt-3 text-sm md:text-base">
            Have a project in mind or just want to get in touch? Perhaps just
            wanna get touched? I'd be happy to do that for you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-md border border-yellow-500/20 rounded-2xl p-6 shadow-lg shadow-yellow-500/10">
            <form
              method="post"
              className="space-y-4"
              ref={formRef}
              onSubmit={(e) => {
                e.preventDefault();
                if (!formRef.current) return;
                emailjs
                  .sendForm(serviceId, templateId, formRef.current)
                  .then(() => window.alert("Email sent"))
                  .then(() => (window.location.href = "/contact"))
                  .catch((e) => window.alert(e.error));
              }}
            >
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="bg-black/40 border text-neutral-200! border-yellow-500/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="bg-black/40 text-neutral-200! border border-yellow-500/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                />
              </div>

              <input
                required
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full text-neutral-200! bg-black/40 border border-yellow-500/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
              />

              <textarea
                required
                name="message"
                rows={4}
                placeholder="Message"
                className="w-full bg-black/40 border border-yellow-500/20 rounded-lg px-3 py-2 text-neutral-200! text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50 resize-none"
              />

              <button
                type="submit"
                className="w-full cursor-pointer gradient-gold hover:brightness-110 transition rounded-lg py-2 text-sm font-medium flex items-center justify-center gap-2 text-black!"
              >
                <Send size={16} color="black" />
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-yellow-500/20 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition hover:shadow-md hover:shadow-yellow-500/10">
              <div className="bg-yellow-500/10 p-2 rounded-lg">
                <div className="relative size-6">
                  <img
                    src={Github_Icon}
                    className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-picture size-full"
                  />
                </div>
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-sm! text-gray-400!">
                  github.com/Ken-Sama-tech
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-yellow-500/20 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition hover:shadow-md hover:shadow-yellow-500/10">
              <div className="bg-yellow-500/10 p-2 rounded-lg">
                <div className="relative size-6">
                  <img
                    src={Facebook_Icon}
                    className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-picture size-full"
                  />
                </div>
              </div>
              <div className="truncate line-clamp-2">
                <p className="font-medium">Facebook</p>
                <p className="text-sm! text-gray-400!">
                  https://www.facebook.com/ken.gallarde.14
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
