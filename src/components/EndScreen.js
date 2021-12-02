import React , {Fragment , useState} from 'react';
import { useContext } from "react";
import { QuizData } from './QuizData';
import { useNavigate } from 'react-router-dom'

const EndScreen = () => {
const navigate = useNavigate();
const [score,setScore] = useState()
const pulang = () => {
    navigate('/')
  };

return (
<div>
    <div class ="header">
    </div>

    <h1>Kuis Kelar</h1>
    <h1> {score}/{QuizData.length}</h1>

    <button onClick={pulang} id="nextQuestion">
          Pulang Selesai
        </button>
    </div>
)
}
export default EndScreen