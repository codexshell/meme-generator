import { useEffect, useState } from "react";
import PropType from "prop-types";

import { Button, Input } from "@/components";

import "./index.css";

export function Main(props) {
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");
  const [memes, setMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMemes();
  }, []);

  function getRandomMeme() {
    const randIdx = Math.floor(Math.random() * memes.length);
    setCurrentMeme(() => memes[randIdx]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getRandomMeme();
  }

  async function getMemes() {
    setIsLoading(true);
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    setMemes(() => data.data.memes);
    setIsLoading(false);
  }

  return (
    <main
      className={
        "flex flex-col max-w-[550px] px-[36px]" + " " + props.className
      }
    >
      <form onSubmit={handleSubmit}>
        <div className="flex gap-[17px] mx-auto">
          <Input value={top} onChange={(e) => setTop(e.target.value)} />
          <Input value={bottom} onChange={(e) => setBottom(e.target.value)} />
        </div>
        <Button type="submit" className="mt-[15px] w-full">
          Get a new meme image 🖼️
        </Button>
      </form>
      <div className="relative mt-[36px]">
        {currentMeme && !isLoading && (
          <img className="mx-auto" src={currentMeme.url} alt="Meme" />
        )}
        <span className="w-full text-center text-white absolute top-0 left-0 mt-[16px] font-black text-[32px] leading-[39.03px] | text-shadow">
          {top}
        </span>
        <span className="w-full text-center text-white absolute bottom-0 left-0 mb-[16px] font-black text-[32px] leading-[39.03px] | text-shadow">
          {bottom}
        </span>
      </div>
    </main>
  );
}

Main.propTypes = {
  className: PropType.string,
};
