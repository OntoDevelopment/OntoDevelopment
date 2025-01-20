import Section from "./Section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SectionContact(props) {
    return (
        <Section id="contact" className={classNames("text-center", props.className)}>
            <div className="text-5xl">
                <a href="http://fb.me/OntoDevelopment" className="m-3" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.linkedin.com/in/brianwendtarizona" className="m-3" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </Section>
    );
}
