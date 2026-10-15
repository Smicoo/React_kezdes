// import compImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { TabButton } from './components/TabButton.jsx';



function App() {
  return (
    <div>
      <Header></Header>  
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
              <CoreConcept 
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description} 
                image={CORE_CONCEPTS[0].image}></CoreConcept>

              <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
              <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
              <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
