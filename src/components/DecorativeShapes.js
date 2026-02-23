import styles from "./DecorativeShapes.module.css";

export default function DecorativeShapes({ variant = "A" }) {
    return (
        <div className={styles.shapesWrapper}>
            {variant === "A" && (
                <>
                    {/* Services Section Variant: Sweeping top-left/bottom-right */}
                    <svg className={`${styles.blob} ${styles.blobA1}`} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M370.5,317.5Q313,385,221,414.5Q129,444,69.5,361.5Q10,279,53.5,183.5Q97,88,187,55Q277,22,345.5,82.5Q414,143,421,206.5Q428,250,370.5,317.5Z" />
                    </svg>
                    <svg className={`${styles.blob} ${styles.blobA2}`} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M410.5,321.5Q366,393,281,410Q196,427,117.5,364.5Q39,302,57,208.5Q75,115,159.5,63.5Q244,12,324.5,58.5Q405,105,430,177.5Q455,250,410.5,321.5Z" />
                    </svg>
                    <svg className={`${styles.curvyLine} ${styles.lineA}`} viewBox="0 0 1000 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100,100 C 200,400 600,-100 1100,300" />
                    </svg>
                </>
            )}

            {variant === "B" && (
                <>
                    {/* Why Choose Us Variant: Contrast corner blobs, different curve */}
                    <svg className={`${styles.blob} ${styles.blobB1}`} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M358.5,365.5Q280,481,173.5,431Q67,381,49.5,263.5Q32,146,140,78Q248,10,344,82Q440,154,438.5,252Q437,350,358.5,365.5Z" />
                    </svg>
                    <svg className={`${styles.blob} ${styles.blobB2}`} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M424.5,320.5Q386,391,304.5,417.5Q223,444,145.5,394.5Q68,345,63.5,253Q59,161,139.5,105.5Q220,50,307,81Q394,112,428.5,181Q463,250,424.5,320.5Z" />
                    </svg>
                    <svg className={`${styles.curvyLine} ${styles.lineB}`} viewBox="0 0 1000 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100,400 C 300,100 700,600 1100,100" />
                    </svg>
                </>
            )}

            {variant === "C" && (
                <>
                    {/* All Services Variant: Huge center-left blob, top-right accent */}
                    <svg className={`${styles.blob} ${styles.blobC1}`} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M380,335.5Q325,421,234,420.5Q143,420,83,342Q23,264,68,172.5Q113,81,200.5,58.5Q288,36,368,91.5Q448,147,441.5,198.5Q435,250,380,335.5Z" />
                    </svg>
                    <svg className={`${styles.blob} ${styles.blobC2}`} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M351.5,356Q281,462,185,412.5Q89,363,56.5,263.5Q24,164,116,105Q208,46,298,63Q388,80,405,165Q422,250,351.5,356Z" />
                    </svg>
                    <svg className={`${styles.curvyLine} ${styles.lineC}`} viewBox="0 0 1000 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-50,250 Q 250,-50 500,250 T 1050,250" />
                    </svg>
                </>
            )}

            {variant === "D" && (
                <>
                    {/* Treatment Options Variant: Overlapping curvy lines */}
                    <svg className={`${styles.blob} ${styles.blobD1}`} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M410,323Q358,396,275,417.5Q192,439,122.5,372Q53,305,67.5,214.5Q82,124,166,75.5Q250,27,330.5,74.5Q411,122,436.5,186Q462,250,410,323Z" />
                    </svg>
                    <svg className={`${styles.curvyLine} ${styles.lineD1}`} viewBox="0 0 1000 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100,200 C 400,-100 600,600 1100,200" />
                    </svg>
                    <svg className={`${styles.curvyLine} ${styles.lineD2}`} viewBox="0 0 1000 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100,300 C 400,600 600,-100 1100,300" />
                    </svg>
                </>
            )}

            {variant === "E" && (
                <>
                    {/* Infertility Process Variant: Soft layered blobs */}
                    <svg className={`${styles.blob} ${styles.blobE1}`} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M363.5,348Q310,446,211,438.5Q112,431,65.5,339Q19,247,72.5,159.5Q126,72,222.5,61.5Q319,51,368,142.5Q417,234,363.5,348Z" />
                    </svg>
                    <svg className={`${styles.blob} ${styles.blobE2}`} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M386,303.5Q347,357,281.5,375.5Q216,394,146.5,357.5Q77,321,58.5,243.5Q40,166,104,103.5Q168,41,257.5,32.5Q347,24,386,95.5Q425,167,386,303.5Z" />
                    </svg>
                    <svg className={`${styles.curvyLine} ${styles.lineE}`} viewBox="0 0 1000 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100,50 Q 500,450 1100,50" />
                    </svg>
                </>
            )}
        </div>
    );
}
