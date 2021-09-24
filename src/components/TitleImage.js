import "./TitleImage.css";

export default function TitleImage (props) {
    return (
      <>
          <div
            className="TitleImage--image"
            style={{
              backgroundImage: `url(${props.image})`
            }}
          >
            <div className="TitleImage--text">
              <h1>{props.title}</h1>
            </div>
          </div>
      </>
    );
  }