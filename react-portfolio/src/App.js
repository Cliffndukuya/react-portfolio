import logo from './logo.svg';
import './App.css';

 

function App() {
 const projects = [
    { name: 'Project 1', description: 'This is project 1.' },
    { name: 'Project 2', description: 'This is project 2.' },
    { name: 'Project 3', description: 'This is project 3.' },
  ];


  return (
    <div class='main'>


      <div class='about'>
        <h1>About Me </h1>
      </div>

      <div class='proj'>
      <h2>IT Portfolio</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
      </div>

    </div>
  );
}


export default App;
