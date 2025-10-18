import Image from "next/image";

type CardProps = {
  name: string;
  imagePath: string;
};

export default function Card(props: CardProps) {
  return (
    <div className="flex flex-col items-center padding-[12px] bg-black/8 rounded-[20px]">
      <Image src={props.imagePath} alt={"An image"} width={200} height={200}/>
      {props.name}
    </div>
  );
}