import { useState } from 'react'
import { Header } from './components/header';


function App() { 
const students = ['Didan', 'Franco', 'Fredrin'];
const [likes, setLikes] = useState(0);

function handleClick(){
  setLikes(likes + 1);
}


return(
  <>
  <Header />
  <ul>
    {
      students.map((student) => (
        <li key= {student}>{student}</li>
      ))
    }
  </ul>
  <button onClick = {handleClick}>like ({likes})</button>
</>
);}

export default App
