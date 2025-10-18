import Image from "next/image";

const styles = {
    card: {
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center",
        padding: "12px",
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        borderRadius: "20px"
    }
};

type CardProps = {
  name: string;
  imagePath: string;
};

export default function Card(props: CardProps) {
  return (
    <div style={styles.card}>
      <Image src={props.imagePath} alt={"An image"} width={200} height={200}/>
      {props.name}
    </div>
  );
}