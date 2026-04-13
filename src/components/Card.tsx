import { type FC } from "react";
import { FileImage } from "lucide-react";

type Props = {
  icon: string;
  label: string;
  description: string;
};

const Card: FC<Props> = ({ icon, description, label }) => {
  return (
    <div className="size-full border-yellow-500/20 bg-neutral-600/20 rounded-xl flex justify-start items-center px-3 py-1 hover:bg-yellow-400/20 default-transition gap-2 cursor-pointer">
      <div className="relative bg-neutral-500/10 aspect-square h-6/10 rounded-md pointe">
        {icon ? (
          <img
            src={icon}
            className="object-fill absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-7/10"
          />
        ) : (
          <FileImage
            color="white"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-7/10"
          />
        )}
      </div>
      <div className="grow flex flex-col justify-center h-full overflow-hidden">
        <span className="text-yellow-400! font-bold text-xl">{label}</span>
        <p className="text-lg! font-light text-wrap leading-tight!">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
