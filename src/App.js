import './App.css';
import Navbar from './components/Navbar';

let name = "Prince";

function App() {
  return (
    <>

      <Navbar heading="TextUtils" aboutText="About TextUtills"/>
      <Navbar heading="Another_navbar"/>
      <Navbar heading="Components_OP"/>


      <h1>Hi there, I am {name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laboriosam debitis modi excepturi neque voluptatum amet eaque omnis a iusto.
      </p>
      <img src="https://images.unsplash.com/photo-1646182984866-73a5a9bb3617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Unsplash" />
    
    
    </>
  );
}

export default App;
