import Image from 'next/image';

const styles = {
    page: {
        height: "100svh",
        width: "100svw",
        padding: "24px",

        boxSizing: "border-box" as "border-box",
    },
    table: {
        height: "100%",
        width: "100%",

        display: "flex",
        flexDirection: "column" as "column",
        gap: "24px"
    },
    headerRow: {
        display: "flex",
        flexDirection: "row" as "row",
        width: "100%",
        borderBottom: "solid 2px black"
    },
    row: {
        display: "flex",
        flexDirection: "row" as "row",
        width: "100%",
    },
    cell: {
        flex : 1,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center" as "center"
    },
    img: {
        borderRadius: "16px"
    },
    headerText: {
        fontWeight: "bold"
    }
}

export default function Page() {
    return (
        <div style={styles.page}>
            <div style={styles.table}>
                <div style={styles.headerRow}>
                    <div style={styles.cell}>
                        <p style={styles.headerText}>Picture</p>
                    </div>
                    <div style={styles.cell}>
                        <p style={styles.headerText}>Name</p>
                    </div>
                    <div style={styles.cell}>
                        <p style={styles.headerText}>Weight</p>
                    </div>
                    <div style={styles.cell}>
                        <p style={styles.headerText}>Description</p>
                    </div>
                </div>
                <div style={styles.row}>
                    <div style={styles.cell}>
                        <Image style={styles.img} src="/bentley.png" alt="pumpkin" height={150} width={150} />
                    </div>
                    <div style={styles.cell}>
                        <p>Bentley</p>
                    </div>
                    <div style={styles.cell}>
                        <p>15 lbs.</p>
                    </div>
                    <div style={styles.cell}>
                        <p>Very cute.</p>
                    </div>
                </div>
                <div style={styles.row}>
                    <div style={styles.cell}>
                        <Image style={styles.img} src="/bobbi.png" alt="pumpkin" height={150} width={150} />
                    </div>
                    <div style={styles.cell}>
                        <p>Bobbi</p>
                    </div>
                    <div style={styles.cell}>
                        <p>18 lbs.</p>
                    </div>
                    <div style={styles.cell}>
                        <p>Some people say Bobbi is cuter.</p>
                    </div>
                </div>
                <div style={styles.row}>
                    <div style={styles.cell}>
                        <Image style={styles.img} src="/goose.png" alt="pumpkin" height={150} width={150} />
                    </div>
                    <div style={styles.cell}>
                        <p>Mr. Goose</p>
                    </div>
                    <div style={styles.cell}>
                        <p>1/4 lb.</p>
                    </div>
                    <div style={styles.cell}>
                        <p>Mr. Goose is NOT a toy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}