import "./App.css";
import { Main } from "./section/Main";
import { NavBar } from "./section/NavBar";

function App() {
  return (
    <div className="App">
      <div>
       <NavBar/>
        <Main/>
        {/* <ul>
          <h2>Routing in React through react router dom v6</h2>
        </ul>
        <li>Use React Router Dom latest version</li>
        <li>Create a Page Directory</li>
        <li>Add three pages(Home.jsx, About.jsx, Contactus.jsx) inside it</li>
        <li>
          Add headings h1 and paragraph text to each page( for paragraph text
          use lorem)
        </li>
        <li>add those routes to React Router Dom</li>
        <li>
          Navigation bar is not necessary, but the routes must work well.
        </li> */}
      </div>
    </div>
  );
}

export default App;
