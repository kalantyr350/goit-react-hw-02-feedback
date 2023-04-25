import css from "./feedbackOptions.css"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (

        <div onClick={onLeaveFeedback.countTotalFeedback}>
            <ul className={css.listBtn} key={2} onClick={onLeaveFeedback.countPositiveFeedbackPercentage}>
                <li><button onClick={options.handleClickGood}>Good</button></li>
                <li><button onClick={options.handleClickNeutral}>Neutral</button></li>
                <li><button onClick={options.handleClickBad}>Bad</button></li>
            </ul>
        </div>
    )   
}