import { addSubmitResultListener, loadResults } from './src/results'
import './style.css'

document.addEventListener("DOMContentLoaded", function () {
    const newResultForm = document.getElementById("newResultForm")
    if(newResultForm) addSubmitResultListener(newResultForm)
        
    const resultsList = document.getElementById("resultsList")
    if(resultsList) loadResults(resultsList)
})