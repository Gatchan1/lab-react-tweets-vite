import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  // console.log("tweet:", props) // <-- Es súper buena idea hacer aquí un console log para entender la estructura antes de destructurarlo.

  // si escribiese {tweet} en lugar de props estaría destructurando y declarando "tweet" como variable, y me ahorraría tener que escribir props en ninguna parte.

  const {image, name, handle} = props.tweet.user;
  const {timestamp, message} = props.tweet

  return (
    <div className="tweet">
      <ProfileImage image={image}/>
      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp timestamp={timestamp} />
        </div>
        <Message message={message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;