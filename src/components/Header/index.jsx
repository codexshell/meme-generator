import trollFace from "@/assets/troll-face.svg";

export function Header() {
  return (
    <header>
      <div>
        <img src={trollFace} alt="Troll Face" />
        <h1>Meme Generator</h1>
      </div>
      <span>React Course - Project 3</span>
    </header>
  );
}
