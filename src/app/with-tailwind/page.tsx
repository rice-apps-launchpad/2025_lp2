import Card from "@/app/with-tailwind/card";

export default function Home() {
  return (
    <div className="h-[100svh] w-[100svw] flex flex-row justify-center items-center gap-[16px]">
        <Card name={"Omar Siman"} imagePath={"/frog.png"}/>
        <Card name={"Gabriel Ong"} imagePath={"/pumpkin.png"}/>
    </div>
  );
}