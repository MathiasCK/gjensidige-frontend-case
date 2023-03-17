import React, {useEffect, useState} from "react";
import {NameUrlPair} from "../../types";
import Spinner from "../Spinner";
import "./stat.scss";

interface Props {
  stat: NameUrlPair;
  level: number;
}

const Stat: React.FC<Props> = ({stat, level}) => {
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
    return <Spinner />;
  }

  return (
    <section>
      <h2>{statData.name}</h2>
      <h3>Level: {level}</h3>
    </section>
  );
};

export default Stat;
