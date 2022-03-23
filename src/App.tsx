import { useState } from 'react'

import './App.scss'

import logo from './assets/logo.png'

import content from './content/content'
import HighlightString from './HighlightString'

const App:React.FC = () => {

  const sortedContent = content.sort((a,b) => a.name.localeCompare(b.name)).sort((a,b) => a.type.localeCompare(b.type))
  const contentTypes = [...new Set(sortedContent.map(item => item.type)) ]

  interface contentElement {
    name: string;
    paidOrFree: string;
    type: string;
    url: string;
    description: string;
  }

  const [contentToDisplay, setContentToDisplay] = useState<Array <contentElement>>(sortedContent)
  const [searchInput, setSearchInput] = useState<string>('')

  const filterContent = () => {
    if (!searchInput) setContentToDisplay(sortedContent)
    else setContentToDisplay(sortedContent.filter(element =>  element['name'].toLowerCase().includes(searchInput.toLowerCase()) || 
                                                              element['type'].toLowerCase().includes(searchInput.toLowerCase()) ||
                                                              element['description'].toLowerCase().includes(searchInput.toLowerCase())
    ))
  }

  return (
    <div className='App'>
      <header>
        <img src={logo} alt='Logo' />
      </header>

      <section className='intro'>
        <p>This is my personal repository of resources, tools and great places to learn about code.</p>
        <p>Here I've consolidated most of the assets I've found useful for my learning process, and I plan to keep adding new things as I find them along my path to become the best developer I can be.</p>
        
        <p>Feel free to browse through the different cattegories or search for specific topics.</p>
        <p>Recommendations are always welcome. You can email them to <a href='mailto:coccagerman@gmail.com'>coccagerman@gmail.com</a></p>
      </section>

      <section className='searchBar'>
          <input type='text' placeholder='Search...' onChange={e => {
            setSearchInput(e.target.value)
            filterContent()
          }}/>
      </section>

      <section className='sectionsBtns'>
          {contentTypes.map(item => <button key={item}><a href={`#${item}`}>{item}</a></button>)}
      </section>

      <section className='table'>
        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Paid / Free</th>
              <th>Description</th>
            </tr>
          </thead>
          
          <tbody>
            {contentToDisplay.map(element => <tr key={element.name}>
                <td><a href={element.name} target='_blank' rel='noreferrer'>{<HighlightString strTarget={element.name} subStr={searchInput} />}</a></td>
                <td id={element.type}>{<HighlightString strTarget={element.type} subStr={searchInput} />}</td>
                <td>{element.paidOrFree}</td>
                <td>{<HighlightString strTarget={element.description} subStr={searchInput} />}</td>
            </tr>)}
          </tbody>

        </table>
      </section>

    </div>
  )
}

export default App
