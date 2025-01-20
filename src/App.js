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
                <div className="my-8">
                    <img src={logo} alt="OntoDevelopment" aria-label="Logo for Onto Development" className="mx-auto" />
                </div>
                <h1 className="my-8 text-center text-3xl">
                    <span className="whitespace-nowrap">Brian Wendt</span>, <span className="whitespace-nowrap">Sr. Web Developer</span>
                </h1>
            </Section>
            <SectionTech />
            <SectionGithub />
            <SectionAbout />
            <SectionContact className="bg-orange" />
        </div>
    );
}

export default App;
