import { Component } from "react";
import Feedback from "./Feedback";
import Statistics from "./Statistics";
class App extends Component{
  state = {
        good: 0,
        neutral: 0,
        bad: 0
  }

   onClickGood = () => {
        this.setState((prevState) => {
            return {
                good : prevState.good + 1
            }
        })
  }
   onClickNeutral =()  =>{  
             this.setState((prevState) => {
            return {
                neutral : prevState.neutral + 1
            }
        })
  }
   onClickBad=() =>{
         this.setState((prevState) => {
            return {
                bad : prevState.bad + 1
            }
        })
    }
  
     countTotalFeedback = () => {
       const total = this.state.good + this.state.neutral + this.state.bad;
       return total;
    }
    countPositiveFeedbackPercentage = () => {
        const precentage = this.state.good * 100 / this.countTotalFeedback();
        if (precentage) {
            return precentage.toFixed(0);
        }
        else {
            return 0;
        } 
    }
  
  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

      return (
        <div>
              <Feedback onLeaveFeedback={[this.onClickGood, this.onClickNeutral, this.onClickBad]} />
              
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />          
    </div>
  );
    }
   
}
export default App