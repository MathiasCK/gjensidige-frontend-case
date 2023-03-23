import {FC, useRef} from "react";
import {useSelector} from "react-redux";
import {Moves, Spinner, Header, Stats} from "@Components";
import {useClickOutside} from "@Utils/hooks";

interface Props {
  popUp: boolean;
  setPopUp: (value: boolean) => void;
}

const Popup: FC<Props> = ({popUp, setPopUp}) => {
  const popUpRef = useRef(null);

  useClickOutside(popUpRef, () => {
    if (popUp) {
      setPopUp(false);
    }
  });
  const {pokemon} = useSelector((state: any) => state);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <div className="popup__bg"></div>
      <div ref={popUpRef} className="popup__container">
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
