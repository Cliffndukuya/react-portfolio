//import logo from './logo.svg';
import ppic from './assets/img.png'
import './App.css';

 

function App() {
 const projects = [
    { name: 'Project 1', description: 'This is project 1.' },
    { name: 'Project 2', description: 'This is project 2.' },
    { name: 'Project 3', description: 'This is project 3.' },
  ];


  return (
    <div class='main pt-10'>


      <div class='about pt-2'>
        
        <div class="card w-96 glass">
          <h1>Cliff Felix Lwazi </h1>
          <h1>Ndukuya</h1>
          <figure><img src={ppic} alt="MyImage" className="rounded-image" /></figure>
          <div class="card-body">
            <h2 class="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
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
