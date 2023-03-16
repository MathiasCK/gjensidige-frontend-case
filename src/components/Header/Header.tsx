import React from "react";

interface Props {
  name: string;
  height: number;
}

const Header: React.FunctionComponent<Props> = ({name, height}) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Height: {height}</h1>
    </div>
  );
};

export default Header;
