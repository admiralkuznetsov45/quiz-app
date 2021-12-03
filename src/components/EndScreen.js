import React , {Fragment , useState} from 'react';
import { useContext } from "react";
import { QuizData } from './QuizData';
import gql from "graphql-tag";
import {  useQuery } from "@apollo/client";
import { useNavigate } from 'react-router-dom'
import "./endscreen.scss";

const EndScreen = ({length,score}) => {
const navigate = useNavigate();
const pulang = () => {
    navigate('/')
  };

return (
  <div id="body">
      <div class="header"></div>

      <h1 id="judul">Kuis Kelar</h1>
      <h1 id="hasil"> {score}/{length}</h1>

      <button onClick={pulang} id="nextQuestion">
        <p> Pulang Selesai </p>
      </button>
  </div>
)
}
export default EndScreen