/* eslint-disable jsx-a11y/anchor-has-content */
import "./ProfileCard.css";

function randomcolor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function ProfileCard(props) {
  let cssProperties = {};

  cssProperties["--decorationcolor"] =
    props.decorationcolor === "random" ? randomcolor() : props.decorationcolor;
  cssProperties["--backgroundcolor"] = props.backgroundcolor;
  cssProperties["--textcolor"] = props.textcolor;

  return (
    <div class="our-team" style={cssProperties}>

      <div class="picture">
        <img alt="" class="img-fluid" src={ props.imageurl } />
      </div>
      <div class="team-content">
        <h3 class="name"> {props.personname} </h3>
        <h4 class="title"> {props.jobtitle} </h4>
      </div>
      <ul class="social">
        {props.websiteurl ? (
          <li>
            <a
              href={props.websiteurl}
              class="fa fa-globe"
              aria-hidden="true"
            ></a>
          </li>
        ) : (
          ""
        )}
        {props.facebookurl ? (
          <li>
            <a
              href={props.facebookurl}
              class="fa fa-facebook"
              aria-hidden="true"
            ></a>
          </li>
        ) : (
          ""
        )}
        {props.twitterurl ? (
          <li>
            <a
              href={props.twitterurl}
              class="fa fa-twitter"
              aria-hidden="true"
            ></a>
          </li>
        ) : (
          ""
        )}
        {props.githuburl ? (
          <li>
            <a
              href={props.githuburl}
              class="fa fa-github"
              aria-hidden="true"
            ></a>
          </li>
        ) : (
          ""
        )}
        {props.linkedinurl ? (
          <li>
            <a
              href={props.linkedinurl}
              class="fa fa-linkedin"
              aria-hidden="true"
            ></a>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default ProfileCard;
