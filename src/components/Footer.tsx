import { type FC } from "react";
import GithubIcon from "@assets/github.svg";
import FacebookIcon from "@assets/facebook.svg";

const Footer: FC = () => {
  return (
    <footer className="border-t border-yellow-500/10 py-10">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-4">
          <a
            target="_blank"
            href="https://www.facebook.com/ken.gallarde.14"
            className="group w-10 h-10 flex items-center justify-center rounded-full border border-yellow-400/30 hover:border-yellow-500 transition"
          >
            <img
              src={FacebookIcon}
              className="w-5 h-5 opacity-50 group-hover:opacity-100 transition"
              alt="Facebook"
            />
          </a>

          <a
            target="_blank"
            href="https://github.com/Ken-Sama-tech"
            className="group w-10 h-10 flex items-center justify-center rounded-full border border-yellow-400/30 hover:border-yellow-500 transition"
          >
            <img
              src={GithubIcon}
              className="w-5 h-5 opacity-50 group-hover:opacity-100 transition"
              alt="Github"
            />
          </a>
        </div>

        <p className="text-sm! tracking-wides! text-neutral-400! uppercase!">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
