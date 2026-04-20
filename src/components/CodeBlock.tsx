import { type FC, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";

export type ProgrammingLanguage = "typescript" | "javascript" | "json" | "jsx";

export type CodeBlockProps = {
  code: string;
  language?: ProgrammingLanguage;
};

const CodeBlock: FC<CodeBlockProps> = ({ code, language = "typescript" }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className="no-sb rounded-lg h-full">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;
