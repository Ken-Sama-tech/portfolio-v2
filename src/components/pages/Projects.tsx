import ProjectPreview from "@components/ProjectPreview";
import { useState, type FC, type ReactNode } from "react";
import anilist from "@const/anilist-client";
import Code from "@components/Code";
import Anilist_Client_Image from "@assets/anilist-client.png";
import aniken from "@const/ani-ken-description";
import AniKen_Image from "@assets/ani-ken.png";
import FilePreview from "@components/FilePreview";

type Project = {
  title: string;
  code: ReactNode;
  description: string;
  output: ReactNode;
};

const Projects: FC = () => {
  const [previewContent, setPreviewContent] = useState<string>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const myProjects: Project[] = [
    {
      title: "anilist-client",
      code: <Code code={anilist.code} language="typescript" />,
      description: anilist.description,
      output: (
        <div
          onClick={() => {
            setPreviewContent(Anilist_Client_Image);
            setIsOpen(true);
          }}
          className="
            preview
            relative size-full cursor-pointer z-10
          "
        >
          <img
            src={Anilist_Client_Image}
            className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              object-cover pointer-events-none -z-1
            "
          />
        </div>
      ),
    },
    {
      title: "Ani-Ken",
      code: null,
      description: aniken,
      output: (
        <div
          onClick={() => {
            setPreviewContent(AniKen_Image);
            setIsOpen(true);
          }}
          className="
            preview
            relative size-full cursor-pointer z-10
          "
        >
          <img
            src={AniKen_Image}
            className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              object-cover pointer-events-none -z-1
            "
          />
        </div>
      ),
    },
  ];

  return (
    <section className="mb-24 w-full">
      <FilePreview
        file={previewContent}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <h3 className="text-4xl! font-semibold mb-16 text-center gradient-gold bg-clip-text text-transparent!">
        Projects
      </h3>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 place-items-stretch">
        {myProjects.map((project) => (
          <div key={project.title} className="w-full">
            <ProjectPreview
              code={project.code}
              title={project.title}
              output={project.output}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
