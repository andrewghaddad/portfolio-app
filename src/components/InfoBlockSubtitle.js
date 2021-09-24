import "./InfoBlock.css";

export default function InfoBlockSubtitle(props) {
  return (
    <div className="InfoBlock-container">
      <div className="InfoBlock-title">
        <h3>{props.title}</h3>
      </div>
      <div className="InfoBlock-text">
        <h4>{props.subtitle}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}