import React from "react";
import styles from "./Header.module.css";

interface Props {
  name: string;
  height: number;
  experience: number;
  src: string;
}

const Header: React.FunctionComponent<Props> = ({
  name,
  height,
  experience,
  src,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.level}>
        <h1>Lvl {experience}</h1>
      </div>
      <div className={styles.image}>
        <img src={src} alt={`${name} illustration`} />
      </div>
      <div className={styles.name}>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Header;
