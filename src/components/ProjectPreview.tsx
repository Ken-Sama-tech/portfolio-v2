import { useState, type FC, type ReactNode } from "react";
import { Code2 } from "lucide-react";

type Props = {
  title: string;
  code?: ReactNode;
  description: string;
  output: ReactNode;
};

type TabLabel = "description" | "code" | "output";

type Tab = {
  label: TabLabel;
  element: ReactNode;
  icon: ReactNode;
};

const ProjectPreview: FC<Props> = ({ code, description, output, title }) => {
  const [tab, setTab] = useState<TabLabel>("output");

  const tabs: Tab[] = [
    {
      label: "description",
      element: (
        <div className="h-full overflow-auto no-sb p-4">
          <p
            className="normalize-font text-white/80! text-sm leading-relaxed max-w-[65ch]"
            dangerouslySetInnerHTML={{
              __html: description.replace(
                /^(.+?\.)/,
                `<span class="text-white! font-medium">$1</span>`,
              ),
            }}
          />
        </div>
      ),
      icon: null,
    },
    {
      label: "code",
      element: code,
      icon: <Code2 className="h-4 w-4" />,
    },
    {
      label: "output",
      element: output,
      icon: null,
    },
  ];

  const activeTab = tabs.find((e) => e.label === tab);

  return (
    <div
      className="
      gradient-dark
      size-full
      flex flex-col gap-4
      p-6
      rounded-2xl
      border border-neutral-800
      shadow-[0_0_25px_rgba(0,0,0,0.4)]
    "
    >
      <div className="flex items-center justify-between">
        <h3
          className="
          text-xl font-semibold tracking-tight
          text-white!
        "
        >
          {title}
        </h3>

        <div className="h-1 w-10 gradient-gold rounded-full opacity-60" />
      </div>

      <div
        className="
        aspect-video w-full
        relative overflow-hidden
        rounded-xl
        bg-neutral-900/40
        border border-neutral-800
      "
      >
        {activeTab?.element}
      </div>

      <div
        className="
        flex items-center gap-2
        p-2
        rounded-xl
        bg-neutral-900/60
        border border-neutral-800
      "
      >
        {tabs.map((t) => {
          if (t.label === "code" && !code) return null;

          const isActive = tab === t.label;

          return (
            <button
              key={t.label}
              onClick={() => setTab(t.label)}
              className={`
                px-3 py-1.5
                text-sm capitalize
                rounded-lg
                transition-all duration-200
                flex items-center gap-1.5

                ${
                  isActive
                    ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }
              `}
            >
              {t.icon}
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectPreview;
