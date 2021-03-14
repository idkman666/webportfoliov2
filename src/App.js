import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import WorkComponent from "./component/WorkComponent.js";
import NavigationBar from "./component/NavigationBar";
import ProjectComponent from "./component/ProjectComponent.js";
import SkillsComponent from "./component/SkillsComponent";
import EducationComponent from "./component/EducationComponent";
import "./component/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutComponent from './component/AboutComponent';

function App() {
  const [selectedCard, setSelectedCard] = useState();
  const [mainBody, setMainBody] = useState();

  function handleCardChange(val) {
    setSelectedCard(val);   
    var mBody = selectedMainBody(val);
    setMainBody(mBody);
  }

  useEffect(()=> {
    AOS.init();
  })

  function selectedMainBody(selectedCard) {
    switch (selectedCard) {
      case "about":
        return <AboutComponent />;
        break;
      case "work":
        return <WorkComponent data-aos="fade-right"/>;
        break;
      case "projects":
        return <ProjectComponent />;
        break;
      case "skills":
        return <SkillsComponent />;
        break;
      case "education":
        return <EducationComponent />;
        break;
      default:
        return <WorkComponent />
        break;
    } 
  }

  return (
    <div className="App">
      <NavigationBar onChange={handleCardChange} />
      <div id="mainBody">
        {
          mainBody
        }
      </div>
      <div className="credit-footer">
        <a>CREDITS</a>
      </div>

    </div>
  );
}

export default App;
