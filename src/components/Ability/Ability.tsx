import React, {useEffect, useState} from "react";
import {NameUrlPair} from "../../types";

interface Props {
  ability: NameUrlPair;
}

const Ability: React.FC<Props> = ({ability}) => {
  const [abilityData, setAbilityData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(ability.url);
      const data = await response.json();
      setAbilityData(data);
    };

    fetchData();
  }, [ability.url]);
  if (!abilityData?.effect_entries) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>{ability.name}</h2>
      <p>{abilityData?.effect_entries[0]?.effect}</p>
    </div>
  );
};

export default Ability;
