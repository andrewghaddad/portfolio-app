import "./Work.css";


export default function WorkThumbnail(props) {
    return (
      <>
        <div className="WorkThumbnail--wrapper">
          <div
            className="thumbnail--image"
            style={{
              backgroundImage: `url(${props.image})`
            }}
          >
            <div className="thumbnail--text">
              <h6>{props.overhead}</h6>
              <h3>{props.subtitle}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
  