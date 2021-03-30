import  'bootstrap/dist/css/bootstrap.min.css' ;
import Profile from './Component/Profile/Profile'
import "./App.css"

function App() {
  const handleClick = (Name, Bio, Proffession) => alert(`${Name} 
     ${Bio}
      ${Proffession}`)

const state = [
    { Name: `Mariem Trabelsi`,
      Bio: 'I recently graduated with a professional master²s degree from the faculty of sciences sfax , where i studied metrology and instrumentation',
      Proffession: `fullstack js developer`,
    },
  ];
    
  return (
 <div className="App">
      {state.map((data) => <Profile data={data} handleClick={handleClick} >
        <img className="img" src="./user.png" alt="" /></Profile>)}
    </div>
  );
}

export default App;
