import { useState } from 'react'
import './App.scss'
import logo from './assets/logo.png'

const App:React.FC = () => {

  const [searchInput, setSearchInput] = useState<string>('')

  return (
    <div className="App">
      <header>
        <img src={logo} alt='Logo' />
      </header>

      <section className='intro'>
        <p>This is my personal repository of sources of knowledge and great places to learn about code.</p>
        <p>Here I've consolidated most of the resources I've found useful for my learning process, and I plan to keep adding new things as I find them along my path to become the best developer I can be.</p>
        
        <p>Feel free to browse through the different cattegories or search for specific topics.</p>
        <p>Recommendations are always welcome. You can email them to <a href='mailto:coccagerman@gmail.com'>coccagerman@gmail.com</a></p>
      </section>

      <section className='searchBar'>
          <input type='text' onChange={e => setSearchInput(e.target.value)} placeholder='Search...' />
      </section>

      <section className='sectionsBtns'>
          <button>Design</button>
          <button>CSS</button>
          <button>Javascript</button>
          <button>React</button>
          <button>Node</button>
          <button>General programming</button>
          <button>Algorithms and data structures</button>
          <button>Tools</button>
          <button>Others</button>
          <button>Jobs</button>
      </section>


    </div>
  )
}

export default App
