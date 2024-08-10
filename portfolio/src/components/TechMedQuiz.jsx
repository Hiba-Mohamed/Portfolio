import React from "react";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { MdOutlineCelebration } from "react-icons/md";

const TechMedQuiz = () => {
  const questions = [
    {
      question: "What is telemedicine?",
      answers: [
        "Remote diagnosis and treatment",
        "In-person consultation",
        "Surgical procedure",
        "Pharmacy management",
      ],
      correct: 0,
      explanation:
        "Telemedicine involves providing healthcare remotely through digital communication.",
    },
    {
      question: "Which technology is used for electronic health records?",
      answers: [
        "Blockchain",
        "Cloud computing",
        "Artificial Intelligence",
        "Virtual Reality",
      ],
      correct: 1,
      explanation:
        "Electronic health records are typically managed using cloud computing for accessibility and storage.",
    },
    {
      question: "What does AI in healthcare primarily help with?",
      answers: [
        "Data entry",
        "Medical imaging analysis",
        "Patient transportation",
        "Prescription filling",
      ],
      correct: 1,
      explanation:
        "AI helps in analyzing medical images for better diagnosis and treatment planning.",
    },
    {
      question: "What is the purpose of wearable health technology?",
      answers: [
        "To provide entertainment",
        "To monitor health metrics",
        "To replace medical professionals",
        "To store personal data",
      ],
      correct: 1,
      explanation:
        "Wearable health technology monitors health metrics such as heart rate and activity levels.",
    },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState("unanswered");

  const showAnswer = () => {};

  const styleAnsweredQuestion = () => {};

  const handleDisplayNextQuestion = () => {
    setIsSubmitted(false);
    setIsCorrect("unanswered");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const chosenAnswer = (answer) => {
    setUserAnswer(answer);
    console.log(answer);
  };

  const handleSubmission = () => {
    const correctAnswer =
      questions[currentQuestionIndex].answers[
        questions[currentQuestionIndex].correct
      ];
    setIsSubmitted(true);

    //if answer is correct
    if (userAnswer === correctAnswer) {
      setUserScore((prevScore) => prevScore + 1);
      setIsCorrect("Correct");
    }

    //if answer is wrong
    else {
      setIsCorrect("Wrong");
    }
  };

  const handleTakeAgain = () => {
    setCurrentQuestionIndex(0);
    setUserScore(0);
    setUserAnswer("");
    setIsCorrect("unanswered");
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="flex flex-col items-center relative w-full bg-gray-800 text-slate-50 gap-10 pb-40 sm:pb-56">
        <h1 className="font-bold text-2xl pt-12 px-4">
          Take the TechMed Quiz!
        </h1>
        {currentQuestionIndex === 4 ? (
          <div className="rounded-md flex flex-col items-center py-6 bg-gray-700 p-8">
            <div className="flex flex-row items-center">
              <MdOutlineCelebration className="text-7xl m-4" />
              <h1 className="text-3xl">All Done !!</h1>
            </div>
            <p className="text-2xl">Your Score is {userScore}/4</p>
            <button
              onClick={handleTakeAgain}
              className="my-6 bg-gray-900 py-2 w-60 rounded-md shadow-lg-custom"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div
            className={`flex flex-col items-center mx-2 gap-4 ${isCorrect === "unanswered" && "bg-gray-700"} ${isCorrect === "Correct" && "bg-teal-400 bg-opacity-10"} ${isCorrect === "Wrong" && "bg-red-400 bg-opacity-10"} rounded-md py-6`}
          >
            <h2 className="text-xl px-4">
              Question {currentQuestionIndex + 1}
            </h2>
            <h3 className="text-2xl font-semibold px-4">
              {questions[currentQuestionIndex].question}
            </h3>
            <div className="flex flex-col gap-4">
              {questions[currentQuestionIndex].answers.map((answer) => (
                <div
                  onClick={() => {
                    chosenAnswer(answer);
                  }}
                  className="flex flex-row px-4 bg cursor-pointer bg-gray-600 py-2 mx-4 rounded-md items-center"
                >
                  {answer === userAnswer ? <FaRegDotCircle /> : <FaRegCircle />}
                  <p className="px-4">{answer}</p>
                </div>
              ))}
            </div>
            {isSubmitted ? (
              <div className="flex flex-col items-center gap-4 px-4 py-6">
                <p className="font-bold text-2xl ">{isCorrect} !</p>
                <p className="text-xl">Explanation:</p>
                <p>{questions[currentQuestionIndex].explanation}</p>
                <button
                  onClick={handleDisplayNextQuestion}
                  className="my-6 bg-gray-900 py-2 w-60 rounded-md shadow-lg-custom"
                >
                  Next Question
                </button>
              </div>
            ) : (
              <button
                onClick={handleSubmission}
                className="my-6 bg-gray-900 py-2 w-60 rounded-md shadow-lg-custom"
              >
                Submit Your Answer
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default TechMedQuiz;
