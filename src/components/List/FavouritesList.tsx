import {Spinner, List} from "@Components";
import {useSelector} from "react-redux";
import EmptyList from "./EmptyList";

const Favourites = () => {
  const {favouritesList} = useSelector((state: any) => state);

  if (!favouritesList) {
    return <Spinner />;
  }

  if (favouritesList.length === 0) {
    return <EmptyList />;
  }

  return <List list={favouritesList} favourites />;
};

export default Favourites;
