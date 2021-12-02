import React, { useState , useContext } from 'react';
import { QuizData } from './QuizData';
import './quiz.scss';
import gql from "graphql-tag";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Button } from 'semantic-ui-react';
import { QuizContext } from "./helpers";
import  EndScreen  from "./EndScreen";
import { useNavigate } from 'react-router-dom'

const Quiz = () => {
    const navigate = useNavigate();
    const [currentQuestion , setcurrentQuestion] = useState(0);
    const [optionChosen , setOptionChosen] = useState();
    const [isFinish , setisFinish] = useState(false);
    const { gameState, setGameState } = useContext(
       QuizContext
      );
    const [score,setScore] = useState(0)
    const { data,loading,error} = useQuery(TAMPIL_SEMUA_SOAL_JAWABAN);


    const nextQuestion = () => {
        if(data?.soal[currentQuestion].kuncijawaban == optionChosen){
            setScore(score + 1);
        }

        setcurrentQuestion(currentQuestion +1)
        console.log(score);
    }

    //memilih button / opsi jawaban
    const chooseOption = (option) => {
        setOptionChosen(option);
      };
    
      //kelar quiz
    const finishQuiz = () => {
        if (data?.soal[currentQuestion].kuncijawaban == optionChosen) {
          setScore(score + 1)
        } 
        setisFinish(true)
      };
    

    return (
      <>
         {!isFinish?(
          <div>
             <div class="header"></div>
             <div class="Quiz">
            
     
            <div>{data?.soal[currentQuestion].soal}</div>
     
            <div className="options">
            <button  onClick={() => {chooseOption(data?.soal[currentQuestion].jawabanA)}}>{data?.soal[currentQuestion].jawabanA}</button>
            <button  onClick={() => {chooseOption(data?.soal[currentQuestion].jawabanB)}}>{data?.soal[currentQuestion].jawabanB}</button>
            <button  onClick={() => {chooseOption(data?.soal[currentQuestion].jawabanC)}}>{data?.soal[currentQuestion].jawabanC}</button>
            <button  onClick={() => {chooseOption(data?.soal[currentQuestion].jawabanD)}}>{data?.soal[currentQuestion].jawabanD}</button>
            </div>
     
            {currentQuestion == data?.soal.length - 1 ? (
             <button onClick={finishQuiz} id="nextQuestion">
               Finish Quiz
             </button>
           ) : (
             <button onClick={nextQuestion} id="nextQuestion">
               Next Question
             </button>
           )}
            </div>
            </div>
         ):(<EndScreen score = {score} length = {data?.soal.length} />)}
      </>
    )
}
export default Quiz;

const TAMPIL_SEMUA_SOAL_JAWABAN = gql`
    query MyQuery {
      soal {
        id
        kuncijawaban
        soal
        jawabanA
        jawabanB
        jawabanC
        jawabanD
      }
    }
`;
