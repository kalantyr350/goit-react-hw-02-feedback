export function Statistics({good, neutral, bad, total, positiveFeedback}) {
    return(
        <ul key='1'>
            <li>
                <p>Good: {good}</p>
            </li>
            <li>
                <p>Neutral: {neutral}</p>
            </li>
            <li>
                <p>Bad: {bad}</p>
            </li>
            <li>
                <p>total: {total} </p>
            </li>
            <li>
                <p>Positive feedback: {positiveFeedback}%</p>
            </li>
        </ul>
    )

}