import React, {useEffect, useState} from "react";
import {NameUrlPair} from "../../types";
import styles from "./Move.module.css";

interface Props {
  move: NameUrlPair;
}

const Move: React.FC<Props> = ({move}) => {
  const [moveData, setMoveData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(move.url);
      const data = await response.json();
      setMoveData(data);
    };

    fetchData();
  }, [move.url]);

  if (!moveData) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.move}>
      <h2>{moveData?.name}</h2>
      <h3>Power: {moveData?.power}</h3>
      {/* <h3>Type: {moveData?.type?.name}</h3> */}
    </div>
  );
};

export default Move;
