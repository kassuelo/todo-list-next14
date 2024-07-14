import Logo from "./Logo";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho() {
  return (
    <header className="flex bg-zinc-800 h-20 gap-5 px-5 items-center">
      <Logo />
      <span className="flex-grow">Cabeçalho</span>
      <MenuUsuario />
    </header>
  );
}
