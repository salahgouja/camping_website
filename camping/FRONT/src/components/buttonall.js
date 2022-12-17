import "../styles/stylebutton.css";

const Buttons = (props) => {
  return (
    <button onClick={props.action} className={props.className}>
      {props.name}
    </button>
  );
};

export default Buttons;
