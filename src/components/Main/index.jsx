import PropType from "prop-types";

import { Button, Input } from "@/components";
import memeing from "@/assets/memeing.png";

import "./index.css";

export function Main(props) {
  return (
    <main className={"flex flex-col max-w-[550px]" + " " + props.className}>
      <div className="flex gap-[17px] mx-auto">
        <Input />
        <Input />
      </div>
      <Button className="mt-[15px]">Get a new meme image 🖼️</Button>
      <div className="relative mt-[36px]">
        <img
          className="max-w-[477px] mx-auto rounded-[5px]"
          src={memeing}
          alt="An image of a meme"
        />
        <span className="text-white absolute top-0 left-0 mt-[16px] ml-[177px] font-black text-[32px] leading-[39.03px] | text-shadow">
          SHUT UP
        </span>
        <span className="text-white absolute bottom-0 left-0 mb-[16px] ml-[103px] font-black text-[32px] leading-[39.03px] | text-shadow">
          AND TAKE MY MONEY
        </span>
      </div>
    </main>
  );
}

Main.propTypes = {
  className: PropType.string,
};
