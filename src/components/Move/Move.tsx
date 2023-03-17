import React, {useEffect, useState} from "react";
import {NameUrlPair} from "@Utils/types";
import {Spinner} from "@Components";
import "./move.scss";

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
    return <Spinner />;
  }
  return (
    <section>
      <h2>{moveData?.name}</h2>
      <h3>Power: {moveData?.power}</h3>
      {/* <h3>Type: {moveData?.type?.name}</h3> */}
    </section>
  );
};

export default Move;
