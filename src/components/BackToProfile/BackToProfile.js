import styles from "./BackToProfile.module.css";

const BackToProfile = () => {
  return (
      <div className={styles["clickable-container"]}>
        <div className={styles["label-container"]}>
          <p className={styles.label}>Back to profile</p>
        </div>
      </div>
  );
};

export default BackToProfile;
