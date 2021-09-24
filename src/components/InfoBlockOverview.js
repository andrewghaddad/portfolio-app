import "./InfoBlock.css";

export default function InfoBlockOverview(props) {
  return (
    <div className="InfoBlock-container">
      <div className="InfoBlock-title">
        <h3>{props.title}</h3>
      </div>
      <div className="InfoBlock-text">
        <p>{props.body}</p>
        <h5 className="InfoBlock_padding-text">{props.subtitle1}</h5>
        <p>{props.text1}</p>
        <h5 className="InfoBlock_padding-text">{props.subtitle2}</h5>
        <p>{props.text2}</p>
        <h5 className="InfoBlock_padding-text">{props.subtitle3}</h5>
        <p>{props.text3}</p>
      </div>
    </div>
  );
}