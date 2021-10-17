import "./App.css";
import ProfileCard from "./profile-card/ProfileCard";


function App() {
  return (
    <div className="App">
      <div style={{ "display": "flex", "flexWrap": "wrap" }}>
        
      <ProfileCard
          imageurl="https://avatars.githubusercontent.com/u/407522?v=4"
          facebookurl="https://www.facebook.com/joelsodias"
          twitterurl="https://twitter.com/joelsodias"
          linkedinurl="https://www.linkedin.com/in/joelsodias/?locale=pt_BR" 
          githuburl="https://github.com/joelsodias"
          backgroundcolor="#FBFBFB"
          decorationcolor="#4C0BFE"
          textcolor="#444"
          personname="Joelso Dias"
          jobtitle="Student"
        ></ProfileCard>

        <ProfileCard
          imageurl="https://source.unsplash.com/300x300/?face&1"
          facebookurl="#"
          twitterurl="#"
          linkedinurl="#"
          githuburl="#"
          backgroundcolor="#FBFBFB"
          decorationcolor="random"
          textcolor="#444"
          personname="Ramdom Person #1"
          jobtitle="Student"
        ></ProfileCard>

        <ProfileCard
          imageurl="https://source.unsplash.com/300x300/?face&2"
          facebookurl="#"
          twitterurl="#"
          linkedinurl="#"
          githuburl="#"
          backgroundcolor="#FBFBFB"
          decorationcolor="random"
          textcolor="#444"
          personname="Ramdom Person #2"
          jobtitle="Student"
        ></ProfileCard>

        <ProfileCard
          imageurl="https://source.unsplash.com/300x300/?face&3"
          facebookurl="#"
          twitterurl="#"
          linkedinurl="#"
          githuburl="#"
          backgroundcolor="#FBFBFB"
          decorationcolor="random"
          textcolor="#444"
          personname="Ramdom Person #3"
          jobtitle="Student"
        ></ProfileCard>

        <ProfileCard
          imageurl="https://source.unsplash.com/300x300/?face&4"
          facebookurl="#"
          twitterurl="#"
          linkedinurl="#"
          githuburl="#"
          backgroundcolor="#FBFBFB"
          decorationcolor="random"
          textcolor="#444"
          personname="Ramdom Person #4"
          jobtitle="Student"
        ></ProfileCard>

        <ProfileCard
          imageurl="https://source.unsplash.com/300x300/?face&5"
          facebookurl="#"
          twitterurl="#"
          linkedinurl="#"
          githuburl="#"
          backgroundcolor="#FBFBFB"
          decorationcolor="random"
          textcolor="#444"
          personname="Ramdom Person #5"
          jobtitle="Student"
        ></ProfileCard>
      </div>
    </div>
  );
}

export default App;
