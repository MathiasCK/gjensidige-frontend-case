import React, {useEffect, useState} from "react";
import {NameUrlPair} from "../../types";
import styles from "./Stat.module.css";

interface Props {
  stat: NameUrlPair;
}

const Stat: React.FC<Props> = ({stat}) => {
  const [statData, setStatData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(stat.url);
      const data = await response.json();
      setStatData(data);
    };

    fetchData();
  }, [stat.url]);

  if (!statData) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.stat}>
      <h3>
        {statData.name} : {statData.game_index}
      </h3>
    </div>
  );
};

export default Stat;
