// import PropTypes from "prop-types";
import React from "react";
import Section from "./Section";
import css from './feedback.module.css';
import PropTypes from "prop-types";
class Feedback extends React.Component{


render() {
    return (
        <Section title='Please leave feedback'>
            <ul className={css.list}>
                <li><button type="button" className={css.buttonG} onClick={this.props.onLeaveFeedback[0]}>Good</button></li>
                <li><button type="button" className={css.buttonN} onClick={this.props.onLeaveFeedback[1]}>Neutral</button></li>
                <li><button type="button" className={css.buttonB} onClick={this.props.onLeaveFeedback[2]}>Bad</button></li>
            </ul>
        </Section>        
    );
}
}

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.array,
};

export default Feedback;