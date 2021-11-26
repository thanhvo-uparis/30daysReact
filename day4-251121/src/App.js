import './App.css';

/*
const getUser = (firstName, lastName, country, title, skills) => {
  return (
    ` ${firstName} ${lastName} est un ${title} à Paris en ${country}. Il maitrise les langages de programmation telles que ${skills.join(' ')} `
  )
}

*/

const skills = [
  "Python",
  "Java",
  "PHP"
]

function getUser(firstName, lastName, country, title, skills) {
  return (
    ` ${firstName} ${lastName} est un ${title} à Paris en ${country}. Il maitrise les langages de programmation telles que ${skills.join(' ')} `
  )
}

console.log(getUser("thanh", "vo", "France", "développeur web", skills));

export default App;
