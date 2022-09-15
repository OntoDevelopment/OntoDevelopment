import logo from "./img/logo_lg.png";
import "./App.scss";

import Section from "./components/Section";
import SectionTech from "./components/SectionTech";
import SectionGithub from "./components/SectionGithub";
import SectionContact from "./components/SectionContact";
import SectionAbout from "./components/SectionAbout";

function App() {

    return (
        <div className="App">
            <Section className="bg-orange">
              <img src={logo} alt="OntoDevelopment" aria-label="Logo for OntoDevelopment" className="mx-auto" />
            </Section>
            <SectionTech />
            <SectionGithub />
            <SectionAbout />
            <SectionContact className="bg-orange" />
        </div>
    );
}

export default App;
