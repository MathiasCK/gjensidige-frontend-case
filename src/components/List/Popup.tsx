import {FC} from "react";
import {useSelector} from "react-redux";
import {Moves, Spinner, Header, Stats} from "../../components";

interface Props {
  popUp: boolean;
  setPopUp: (value: boolean) => void;
}

const Popup: FC<Props> = ({popUp, setPopUp}) => {
  const {pokemon} = useSelector((state: any) => state);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <div className="popup__bg"></div>
      <div className="popup__container">
        <div className="popup">
          <Header />
          <Moves />
          <Stats />
          <button
            onClick={() => {
              setPopUp(!popUp);
              document.body.style.overflow = "scroll";
            }}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Popup;
