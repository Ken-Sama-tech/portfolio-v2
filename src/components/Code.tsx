import { type FC, useState } from "react";
import type { CodeBlockProps } from "./CodeBlock";
import { Fullscreen } from "lucide-react";
import CodeBlock from "./CodeBlock";
import CodePreview from "./CodePreview";

const Code: FC<CodeBlockProps> = ({ code, language }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen && (
        <CodePreview
          code={code}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}

      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-5 right-5 cursor-pointer"
      >
        <Fullscreen color="white" />
      </button>
      <CodeBlock code={code} language={language} />
    </>
  );
};

export default Code;
