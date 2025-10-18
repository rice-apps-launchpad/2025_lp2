import Card from "@/app/with-style/card";

const styles = {
    page: {
        height: "100svh",
        width: "100svw",
        display: "flex",
        flexDirection: "row" as "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px"
    }
};

export default function Page() {
  return (
    <div style={styles.page}>
        <Card name={"Omar Siman"} imagePath={"/frog.png"}/>
        <Card name={"Gabriel Ong"} imagePath={"/pumpkin.png"}/>
    </div>
  );
}