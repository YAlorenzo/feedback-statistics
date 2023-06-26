import React from "react";
import Section from "./Section";
import Notification from "./Notification";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement,  Title, Tooltip, Legend, } from "chart.js";
import { Bar } from 'react-chartjs-2';
import { func, number } from "prop-types";
import css from './statistics.module.css';


class Statistics extends React.Component{  
    
    exam = (elem) => elem !== 0;
    
    render() {
        const { good } = this.props;
        const { neutral } = this.props;
        const { bad } = this.props;
        const { total } = this.props;
        const { positivePercentage } = this.props;
        const arr = [good, neutral, bad];
        ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, );
        
        const options = {
            responsive: true,
        };
        
        
        const labels = ['REVIEWS'];
        const data = {
         labels,
         datasets: [
         {
            label: 'Good',
            data: [good],
            backgroundColor: 'rgba(57, 193, 8, 0.7)',
        },
        {
            label: 'Neutral',
            data: [neutral],
            backgroundColor: 'rgba(78, 85, 90, 0.5)',
        },
        {
            label: 'Bad',
            data: [bad],
            backgroundColor: 'rgba(219, 27, 27, 0.7)',
        }
        ]
        };
        return (
            <Section title='Statistics'>
                {arr.some(this.exam) ? (
                    <div className={css.global}>
                        <div className={css.container}>
                           <Bar options={options} data={data} />
                        </div>
                        
                        <ul className={css.list}>
                            <li className={css.item}>Total: {total}</li>
                            <li className={css.item}>Positive Feedback: {positivePercentage}%</li>
                       </ul>

                    
                    </div>
                    
              
            )
                : <Notification message="There is no feedback"/>}
             </Section>
        )
 
    };
};
Statistics.propTypes = {
    good: number,
    neutral: number,
    bad: number,
    total: func,
    positivePercentage: func,
};
export default Statistics;