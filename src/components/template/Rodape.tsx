import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

export default function Rodape() {
  return (
    <footer>
      <div className="flex justify-end items-center bg-zinc-700 text-zinc-400 text-sm p-4 gap-2">
        <span> Desenvolvido com </span>
        <IconHeartFilled size={18} className="text-red-600" />
        <span>por Cod3r - {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
