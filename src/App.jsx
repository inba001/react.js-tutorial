import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function MyButton() {
  return <button className="btn btn-sm btn-primary">I'm a button</button>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    </>
  );
}

export default App;
