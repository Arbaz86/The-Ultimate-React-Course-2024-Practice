import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
            for each web dev skill that you have,
            customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://arbaz-hussain-portfolio.netlify.app/images/profile-pic.jpg"
      alt="Arbaz Hussain"
    />
  );
}
function Intro() {
  return (
    <div>
      <h1>Arbaz Hussain</h1>
      <p>
        I'm a full-stack web developer with over 2160 hours of coding experience
        and have created numerous projects. A passion for learning with an
        endless supply of optimism and curiosity.✨✨
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" bgColor="yellow" />
      <Skill skill="HTML+CSS" emoji="💪" bgColor="red" />
      <Skill skill="JavaScript" emoji="💪" bgColor="gold" />
      <Skill skill="Angular" emoji="💪" bgColor="lightblue" />
      <Skill skill="Node.js" emoji="💪" bgColor="orange" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
export default App;
