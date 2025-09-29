import Category from "@/components/Home/Category";
import LoveStory from "@/components/Home/LoveStory";
import Mnorangan from "@/components/Home/Mnorangan";
import Shivascreen from "@/components/Home/Shivascreen";
import Story from "@/components/Home/Story";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Shivascreen/>
    <Category/>
    <LoveStory/>
    <Mnorangan/>
    <Story/>
   </div>
  );
}
