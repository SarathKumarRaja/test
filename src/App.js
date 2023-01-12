import "./index.css";
import './App.css';

function App() {
  const name="Sarath";
  // const name1="Ravi";
  return (
    <div className="App">
    <h1>Hello {name}</h1>
    <img 
    style={{width:"100px",height:"100px"}}  
    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400"
    />
    {/* <h1>Hello {name1}</h1> */}
   
    </div>
  );
}

export default App;
