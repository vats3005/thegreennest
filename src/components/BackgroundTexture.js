import styles from "./BackgroundTexture.module.css";

export default function BackgroundTexture() {
    return (
        <div className={styles.textureWrapper}>
            {/* Pastel Blobs */}
            <div className={`${styles.blob} ${styles.blobTopLeft}`}></div>
            <div className={`${styles.blob} ${styles.blobTopRight}`}></div>
            <div className={`${styles.blob} ${styles.blobBottomRight}`}></div>
            <div className={`${styles.blob} ${styles.blobBottomLeft}`}></div>

            {/* SVG Leaves for texture */}
            <svg className={styles.leafTopLeft} width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 50 Q 80 50 150 150 Q 50 120 0 50" stroke="rgba(44, 76, 59, 0.08)" strokeWidth="2" fill="none" />
                <path d="M20 30 Q 100 20 180 100 Q 80 80 20 30" stroke="rgba(44, 76, 59, 0.08)" strokeWidth="2" fill="none" />
                <path d="M-20 80 Q 50 100 100 180 Q 20 150 -20 80" stroke="rgba(44, 76, 59, 0.08)" strokeWidth="2" fill="none" />
            </svg>

            <svg className={styles.leafBottomRight} width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200 150 Q 120 150 50 50 Q 150 80 200 150" stroke="rgba(44, 76, 59, 0.08)" strokeWidth="2" fill="none" />
                <path d="M180 170 Q 100 180 20 100 Q 120 120 180 170" stroke="rgba(44, 76, 59, 0.08)" strokeWidth="2" fill="none" />
            </svg>
        </div>
    );
}
