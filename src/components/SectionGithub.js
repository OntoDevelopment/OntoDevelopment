import Section from "./Section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";

export default function SectionGithub(props) {
    return (
        <Section id="github" className={classNames("text-center", props.className)}>
            <div className="text-8xl">
                <a href="https://github.com/BrianWendt/" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div className="text-2xl md:text-4xl pt-5">
                <a href="https://github.com/BrianWendt/" target="_blank">
                    github.com/BrianWendt
                </a>
            </div>
        </Section>
    );
}
