import { questions } from "./constants";

let listAnswers = questions.map((question) => {
  return {id: question.id, answers: []}
})


export function setAnswers ({questionId, answers}) {
  listAnswers = listAnswers.map(item => {
    if (item.id === questionId) {
      return {
        ...item,
        answers: Array.isArray(answers) ? 
          answers.join(', ')
        : answers
      };
    }
    return item;
  });
  
    getAnswers()
}

export function getAnswers() {
  console.log(listAnswers)
  return listAnswers
}