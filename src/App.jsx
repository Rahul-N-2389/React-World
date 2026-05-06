
import StudentCard from "./Components/Student"
function App() {


  return (
    <div>
      <h1> This is React world</h1>
      <StudentCard ID={400} Name="Surya" Desg ="Bachelor"/>
      <StudentCard ID={401} Name="Karthi" Desg ="Soft"/>
      <StudentCard ID={402} Name="Dev" Desg ="Hard"/>
      
    </div>
  )
}

export default App
