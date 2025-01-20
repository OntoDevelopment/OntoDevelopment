import Section from "./Section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faCreditCard,
    faTerminal,
    faAd,
} from "@fortawesome/free-solid-svg-icons";
import {
    faWordpress,
    faBluesky,
    faPaypal,
    faRebel,
    faCcStripe,
} from "@fortawesome/free-brands-svg-icons";

export default function SectionTech() {
    return (
        <Section id="tech">
            <div className="container">
                <h2 className="text-center text-xl font-bold mb-4">
                    Full Stack JS & PHP Development
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-sm-4 col-sm-offset-0 col-xs-9 col-xs-offset-3">
                        <h3 className="text-lg font-bold">
                            <FontAwesomeIcon icon={faCode} fixedWidth /> Custom
                            Development
                        </h3>
                        <ul className="list-custom">
                            <li>Business Tools</li>
                            <li>API Integraions</li>
                            <li>Workflow Automation</li>
                            <li>Reporting &amp; Analytics</li>
                        </ul>

                        <h3 className="text-lg font-bold">
                            <FontAwesomeIcon icon={faAd} fixedWidth />{" "}
                            Advanced Conversion Tracking
                        </h3>
                        <ul className="list-custom">
                            <li>Meta Conversion API</li>
                            <li>Google Ads Enhanced Conversion</li>
                        </ul>

                        <h3 className="text-lg font-bold">
                            <FontAwesomeIcon icon={faWordpress} fixedWidth />{" "}
                            WordPress
                        </h3>
                        <ul className="list-custom">
                            <li>Elementor Pro</li>
                            <li>Custom Themes</li>
                            <li>Custom Plugins</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-sm-offset-0 col-xs-9 col-xs-offset-3">
                        <h3 className="font-bold">
                            <FontAwesomeIcon icon={faTerminal} fixedWidth />{" "}
                            Frameworks & Libraries
                        </h3>
                        <ul className="list-custom">
                            <li>
                                Laravel <sup>11.x - 5.x</sup>
                            </li>
                            <li>
                                Laravel Orchid <sup>14.x - 12.x</sup>
                            </li>
                            <li>
                                React <sup>19.x 16.x</sup>
                            </li>
                            <li>
                                React Native <sup>.7x, .6x</sup>
                            </li>
                            <li>Expo managed workflow</li>
                            <li>
                                Vue <sup>3.x 2.x</sup>
                            </li>
                            <li>
                                jQuery <sup>2.x 1.x</sup>
                            </li>
                            <li>
                                Twitter Bootstrap <sup>5.x - 2.x</sup>
                            </li>
                            <li>
                                Tailwind CSS <sup>3.x</sup>
                            </li>
                            <li>Other: Guzzle, Axios, SASS</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-sm-offset-0 col-xs-9 col-xs-offset-3">
                        <h3 className="font-bold">
                            <FontAwesomeIcon icon={faPaypal} fixedWidth />{" "}
                            Paypal
                        </h3>
                        <ul className="list-custom">
                            <li>JS SDK Integration (Client & Node.js)</li>
                            <li>PHP SDK Integration</li>
                        </ul>

                        <h3 className="font-bold">
                            <FontAwesomeIcon icon={faCreditCard} fixedWidth />{" "}
                            Authorize.Net
                        </h3>
                        <ul className="list-custom">
                            <li>PHP SDK Integration</li>
                        </ul>

                        <h3 className="font-bold">
                            <FontAwesomeIcon icon={faCcStripe} fixedWidth />{" "}
                            Stripe
                        </h3>
                        <ul className="list-custom">
                            <li>Client-side JS Integration</li>
                        </ul>

                        <h3 className="font-bold">
                            <FontAwesomeIcon icon={faRebel} fixedWidth /> Rebel
                        </h3>
                        <ul className="list-custom">
                            <li>Fight the Empire</li>
                            <li>Get your attention</li>
                        </ul>

                        <h3 className="text-lg font-bold">
                            <FontAwesomeIcon icon={faBluesky} fixedWidth />{" "}
                            BlueSky
                        </h3>
                        <ul className="list-custom">
                            <li>AT Protocall Rest API</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
}
