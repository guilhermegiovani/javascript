import { createQuestion } from './src/api'
import { createEmptyQuestion, loadQuestionsManager } from './src/questions'
import { addSubmitResultListener, loadResults } from './src/results'
import './style.css'

document.addEventListener("DOMContentLoaded", function () {
    const newResultForm = document.getElementById("newResultForm")
    if(newResultForm) addSubmitResultListener(newResultForm)
        
    const resultsList = document.getElementById("resultsList")
    if(resultsList) loadResults(resultsList)

    const newQuestionBtn = document.getElementById("newQuestion")
    if(newQuestionBtn) newQuestionBtn.addEventListener("click", () => createEmptyQuestion())
    
    const questionsManager = document.getElementById("questionsManager")
    if(questionsManager) loadQuestionsManager(questionsManager)
})