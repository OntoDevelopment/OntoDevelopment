import classNames from "classnames";

export default function Section(props) {
    const { className, children, ...otherProps } = props;
    return (
        <div className={classNames("section flex  items-center", className)} {...otherProps}>
            <div className="section-content">{children}</div>
        </div>
    );
}
