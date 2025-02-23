import Section from "./Section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluesky, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";

export default function SectionContact(props) {
    return (
        <Section id="contact" className={classNames("text-center", props.className)}>
            <div className="text-5xl">
                <a href="https://bsky.app/profile/azbrian.bsky.social" className="m-3" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faBluesky} />
                </a>
                <a href="https://www.linkedin.com/in/brianwendtarizona" className="m-3" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </Section>
    );
}
