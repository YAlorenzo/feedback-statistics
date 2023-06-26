import React from "react";
import css from "./section.module.css";
class Section extends React.Component{


    render() {
        return (
            <section>
                <h1 className={css.title}>{this.props.title}</h1>
                {this.props.children}
            </section>
        )
    }
}

export default Section;