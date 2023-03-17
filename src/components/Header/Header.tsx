import React from "react";
import styles from "./Header.module.css";

interface Props {
  name: string;
  experience: number;
  src: string;
  type: string;
}

const Header: React.FunctionComponent<Props> = ({
  name,
  experience,
  src,
  type,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.level}>
        <h2>Lvl {experience}</h2>
      </div>
      <div className={styles.image}>
        <img src={src} alt={`${name} illustration`} />
      </div>
      <div className={styles.name}>
        <h1>{name}</h1>
      </div>
      <div>
        <h2>{type}</h2>
      </div>
    </div>
  );
};

export default Header;
