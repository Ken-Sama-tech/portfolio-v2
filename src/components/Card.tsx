import { type FC } from "react";
import { FileImage } from "lucide-react";

type Props = {
  icon: string;
  label: string;
  description: string;
};

const Card: FC<Props> = ({ icon, description, label }) => {
  return (
    <div
      title={description}
      className="
      size-full
      border border-yellow-500/20
      bg-neutral-600/10
      rounded-xl
      flex items-center gap-3
      px-4 py-3
      cursor-pointer
      default-transition
      hover:bg-yellow-400/10
      hover:border-yellow-500/40
      hover:shadow-[0_0_15px_rgba(234,179,8,0.15)]
    "
    >
      <div
        className="
        relative
        bg-neutral-500/10
        aspect-square
        h-10
        rounded-md
        flex items-center justify-center
        shrink-0
      "
      >
        {icon ? (
          <img src={icon} className="h-6 w-6 object-contain" />
        ) : (
          <FileImage className="h-6 w-6 text-white/70" />
        )}
      </div>

      <div className="flex flex-col justify-center overflow-hidden">
        <span className="text-yellow-400! font-semibold text-lg leading-tight">
          {label}
        </span>

        <p className="text-white/60! text-sm! leading-snug truncate">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
