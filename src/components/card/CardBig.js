import "./CardBig.css";

export default function CardBig(props) {
  return (
    <div className="containerBig" onClick={props.onClick}>
      <img src={props.img} alt="" className="posterBig" />
      <div className="descriptionBig">
        <div>
          <p id="title">{props.title}</p>
          <p id="genre">{props.genre}</p>
        </div>
      </div>
    </div>
  );
}
