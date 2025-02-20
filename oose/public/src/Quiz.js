import React, { useState, useEffect } from 'react';
import './quiz.css'; // ✅ Import the CSS file

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/quiz.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        console.log('Fetched data:', data);

        if (data.quizzes && Array.isArray(data.quizzes) && data.quizzes.length > 0) {
          setQuestions(data.quizzes[0].questions);
          setLoading(false); // ✅ Ensure component updates after fetch
        } else {
          throw new Error('Data format is incorrect');
        }
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchData();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-container"> {/* Centering the quiz */}
      <div className="quiz-box"> {/* The box for questions */}
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <div className="quiz-section">
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].question}</div>
            </div>
            <form className="answer-section" onSubmit={handleSubmit}>
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`option${index}`}
                    name="quiz"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor={`option${index}`}>{option}</label>
                </div>
              ))}
              <button type="submit" disabled={!selectedOption}>Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );  
}

export default Quiz;
