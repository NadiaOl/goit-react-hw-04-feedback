import React, {useState} from "react";
import {Statistics} from './Statistics/Statistics';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import {Section} from './Section/Section'
import {Notification} from './Notifiction/Notifiction'


export const App= ()=> {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBed] = useState(0)


  const total = () => {
    return good + neutral + bad;
}

  const positivePercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  }

  const handleIncrement = (value)=> {
    if ('good' === value) setGood(prevState => prevState +1)
    if ('neutral' === value) setNeutral(prevState => prevState +1)
    if ('bad' === value) setBed(prevState => prevState +1)
  }


  return (

    <div className="feedback">
      
    <Section title = "Please, leave your feedback">
      <FeedbackOptions
      options= {['good', 'bad', 'neutral']}
      onLeaveFeedback={handleIncrement}/>
    </Section>
      
    <Section title = "Statistics">
      { total() > 0 ? 
    
      (<Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total()}
        positivePercentage={positivePercentage()}/>) :
    
        (<Notification message="There is no feedback"></Notification>)
        
      }
      </Section>
    </div>
        )

}

