import { useEffect, type FC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  file: string;
};

const Preview: FC<Props> = ({ isOpen, onClose, file }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex flex-col">
      <div className="flex items-center justify-between px-6 pt-3 text-white">
        <span className="text-lg opacity-80">Preview</span>

        <div className="flex items-center gap-4">
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:underline"
          >
            Open
          </a>
          <button onClick={onClose} className="text-xl">
            ✕
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white shadow-2xl max-w-5xl w-full h-[90%] rounded-sm overflow-hidden">
          <iframe src={file} title="PDF Preview" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Preview;
