import { type FC } from "react";
import CodeBlock from "./CodeBlock";

type Props = {
  code: string;
  onClose: () => void;
};

const CodePreview: FC<Props> = ({ code, onClose }) => {
  return (
    <div className="fixed h-screen w-screen bg-black/60 z-99 top-0 left-0 overflow-hidden">
      <div
        className="
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-8/10"
      >
        <button
          className="absolute right-5 top-5 text-xl cursor-pointer text-white!"
          onClick={() => {
            if (onClose) onClose();
          }}
        >
          ✕
        </button>
        <CodeBlock code={code} />
      </div>
    </div>
  );
};

export default CodePreview;
