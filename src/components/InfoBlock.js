import "./InfoBlock.css";

export default function InfoBlock(props) {
  return (
    <div className="InfoBlock-container">
      <div className="InfoBlock-title">
        <h3>{props.title}</h3>
      </div>
      <div className="InfoBlock-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}