import React, { useState } from "react";
import Section from "./Section";

import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import business_people from "../img/business_people.svg";

export default function SectionAbout(props) {
    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = (e) => {
        setReadMore(!readMore);
        e.preventDefault();
        return false;
    };

    return (
        <Section id="about" className={classNames("text-center", props.className)}>
            <img src={business_people} alt="" className="mx-auto" width={500} />
            <h2 className="text-center text-4xl font-bold">About Brian Wendt</h2>
            <p className="text-center mb-2 text-2xl">Lead Developer @OntoDevelopment</p>
            <p className="text-justify mb-2">
                Gamer, gardener, outdoorsman, and black coffee drinker. Above all, Brian is a developer and loves it. His first introduction to HTML was at age 12 when his dad downloaded <i>Arachnophilia Home Page</i>. He went on to start using <i>Microsoft Front Page</i> and
                <i> Adobe Dreamweaver</i> while learning CSS and the basics of Javascript. Brian's first job in the IT world provided more opportunities to learn more web design and dabble in PHP and MySQL.
            </p>
            <p className="text-justify mb-2">
                Brian dove head first into development and at age 19 he had his first job as a Web Developer. At age 21 he began working for the national media company <i>Village Voice Media</i> known for <i>The Village Voice</i> and <i>The Phoenix New Times</i> news weeklies. A year later Brian
                became the Lead Developer at a print and digital marketing agency.
            </p>
            <p className="text-left mb-2 text-slate-500" onClick={() => setReadMore(true)}>
                &#8230;
            </p>
            {!readMore && (
                <p className="text-center mb-2 italic" id="read-less">
                    <a href="#read-more" onClick={toggleReadMore} role="button">
                        -read more-
                    </a>
                </p>
            )}
            {readMore && (
                <div id="read-more">
                    <p className="text-justify mb-2">I'm surprised you're here. I didn't expect anyone to have clicked this. Umm. I'd suggest checking out my LinkedIn for the rest of my job history.</p>
                    <p className="text-justify mb-2">Did you notice the Star Wars reference in the skills section? I bet you did. Did you see a unicorn in the top section hiding in the orange? I hope you didn't.</p>
                    <p className="text-justify mb-2">I also like hiking. But like most people who say they "like hiking", I don't actually do it often. I do try to get out and camp several times a year. My wife and I enjoy boondocking more than established campgrounds.</p>
                    <p className="text-justify mb-2">I didn't mention it before, but I'm writer. Mostly Sci-fi but also some fantasy. I might dabble in historical fiction at some point. I have never submitted anything to be published but maybe I will someday.</p>
                    <p className="text-justify mb-2">Press that little "show less" anchor to hide this junk.</p>
                    <p className="text-center mb-2 italic" onClick={toggleReadMore}>
                        <a href="#read-less" onClick={toggleReadMore} role="button">
                            -show less-
                        </a>
                    </p>
                </div>
            )}
            <blockquote className="text-center mt-6 mx-2 fancy-quote text-4xl">
                <p>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    Nothing in this world is not worth learning.
                </p>
                <footer>&#8212; A Wise Man</footer>
            </blockquote>
        </Section>
    );
}
