import trollFace from "@/assets/troll-face.svg";

export function Header() {
  return (
    <header className="text-white h-[65px] max-w-[550px] flex items-center justify-between bg-gradient-to-r from-purple-jam from-[1.18%] to-dark-orchid to-100% pl-5 pr-[37px]">
      <div className="flex items-center gap-[6.69px]">
        <img src={trollFace} alt="Troll Face" />
        <h1 className="font-karla font-bold text-[20.75px] leading-[24.25px] tracking-[-0.1em]">
          Meme Generator
        </h1>
      </div>
      <span className="font-inter font-medium text-xs leading-[14.52px]">
        React Course - Project 3
      </span>
    </header>
  );
}
