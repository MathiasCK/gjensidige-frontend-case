import React from "react";

interface Props {
  stat: {
    name: string;
    url: string;
  };
}

const Stat: React.FC<Props> = ({stat}) => {
  return <div>{stat.name}</div>;
};

export default Stat;
