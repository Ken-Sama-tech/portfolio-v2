import type { FC } from "react";
import Card from "@components/Card";
import ReactIcon from "@assets/react.svg";
import TailwindCSSIcon from "@assets/tailwindcss.svg";
import GitHubIcon from "@assets/github.svg";
import GitIcon from "@assets/git.svg";
import PlayWrightIcon from "@assets/playwright.svg";
import ExpressIcon from "@assets/express.svg";
import HTML5Icon from "@assets/html5.svg";
import CSSIcon from "@assets/css.svg";
import JavaScriptIcon from "@assets/javascript.svg";
import TypeScriptIcon from "@assets/typescript.svg";
import MySQLIcon from "@assets/mysql.svg";
import MongoDBIcon from "@assets/mongodb.svg";
import PHPIcon from "@assets/php.svg";
import PythonIcon from "@assets/python.svg";
import NodeJSIcon from "@assets/nodedotjs.svg";
import JavaIcon from "@assets/java.svg";

type CardContent = {
  label: string;
  description: string;
  icon: string;
};

const cardContent: CardContent[] = [
  {
    label: "HTML",
    description: "Markup Language for Web Pages",
    icon: HTML5Icon,
  },
  {
    label: "CSS",
    description: "Style Sheet Language for UI Design",
    icon: CSSIcon,
  },
  {
    label: "JavaScript",
    description: "Programming Language for the Web",
    icon: JavaScriptIcon,
  },
  {
    label: "Java",
    description: "Object-Oriented Programming Language",
    icon: JavaIcon,
  },
  {
    label: "TypeScript",
    description: "Typed Superset of JavaScript",
    icon: TypeScriptIcon,
  },
  {
    label: "Python",
    description: "General-Purpose Programming Language",
    icon: PythonIcon,
  },
  {
    label: "PHP",
    description: "Server-Side Scripting Language",
    icon: PHPIcon,
  },
  {
    label: "MongoDB",
    description: "NoSQL Document Database",
    icon: MongoDBIcon,
  },
  {
    label: "MySQL",
    description: "Relational Database Management System",
    icon: MySQLIcon,
  },
  {
    label: "Node.js",
    description: "JavaScript Runtime Environment",
    icon: NodeJSIcon,
  },
  { label: "React", description: "Frontend UI Library", icon: ReactIcon },
  {
    label: "Tailwind CSS",
    description: "Utility-First CSS Framework",
    icon: TailwindCSSIcon,
  },
  {
    label: "Git",
    description: "Distributed Version Control System",
    icon: GitIcon,
  },
  {
    label: "GitHub",
    description: "Code Hosting and Collaboration Platform",
    icon: GitHubIcon,
  },
  {
    label: "Playwright",
    description: "Headless Browser Automation Tool",
    icon: PlayWrightIcon,
  },
  {
    label: "Express",
    description: "Minimalist Web Framework for Node.js",
    icon: ExpressIcon,
  },
];

const About: FC = () => {
  return (
    <section className="mb-24 flex-col gap-10">
      <div className="size-full flex-col text-center mb-16">
        <h3 className="text-4xl font-semibold mb-4">About Me</h3>
        <p className="text-yellow-200/70">
          Write a short paragraph about your background, experience, and
          interests. Keep it concise but informative.
        </p>
      </div>

      <div className="size-full flex-col">
        <h3 className="text-4xl font-semibold mb-4 text-center">
          Tools & Stack
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-5">
          {cardContent.map(({ label, description, icon }) => {
            return (
              <div className="w-9/10 h-20">
                <Card
                  key={label}
                  label={label}
                  description={description}
                  icon={icon}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
