import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import {Notification} from "components/Notification/Notification"
import { Statistics } from "components/statistics/statistics"
import Section  from "components/section/Section"
import { Component } from "react"


class Feedback extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback: 0
    }
    handleClickGood = (e) => {
        
            this.setState((prevState) => {
                return {
                    good: prevState.good + 1
                }
            })
        
    }
    handleClickNeutral = (e) => {
        
            this.setState((prevState) => {
                return { neutral: prevState.neutral + 1}
            })
        
    }
    handleClickBad = (e) => {
        
            this.setState((prevState) => {
                return { bad: prevState.bad + 1}
            })
        
    }
    countTotalFeedback = () => {
        this.setState((prevState) => {
            return {
                total: prevState.bad +  prevState.neutral + prevState.good
            }
        })
    }
    countPositiveFeedbackPercentage = () => {
        this.setState((prevState) => {
            return {
                positiveFeedback: Math.round(prevState.good * 100 / prevState.total)
            }
        })
    }

    render() {
       
        return (
        <div>
            <Section title="Leave feedback">
                <FeedbackOptions
                    options={{
                        handleClickGood: this.handleClickGood,
                        handleClickNeutral: this.handleClickNeutral,
                        handleClickBad: this.handleClickBad,
                    }}
                    onLeaveFeedback={{
                        countTotalFeedback: this.countTotalFeedback,
                        countPositiveFeedbackPercentage: this.countPositiveFeedbackPercentage,
                    }}  
            />
        </Section>

                <Section title="Statistics">
                    {this.state.total === 0 ? (
                    <Notification message="There is no feedback" />
                ) : (
                    <>
                        <Section title="Leave feedback">
                                    <Statistics
                                        good={this.state.good}
                                        neutral={this.state.neutral}
                                        bad={this.state.bad}
                                        total={this.state.total}
                                        positiveFeedback={this.state.positiveFeedback} />
                                    </Section>
                    </>
                )}
            
        </Section>
        </div>
    )}
}


export default Feedback