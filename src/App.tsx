import './App.scss'
import logo from './assets/logo.png'
import content from './assets/Content'

const App:React.FC = () => {

  const sortedContent = content.sort((a,b) => a.name.localeCompare(b.name)).sort((a,b) => a.type.localeCompare(b.type))
  const contentTypes = [...new Set(sortedContent.map(item => item.type)) ]

  return (
    <div className='App'>
      <header>
        <img src={logo} alt='Logo' />
      </header>

      <section className='intro'>
        <p>This is my personal repository of resources, tools and great places to learn about code.</p>
        <p>Here I've consolidated most of the assets I've found useful for my learning process, and I plan to keep adding new things as I find them along my path to become the best developer I can be.</p>
        
        <p>Feel free to browse through the different cattegories. Recommendations are always welcome. You can email them to <a href='mailto:coccagerman@gmail.com'>coccagerman@gmail.com</a></p>
      </section>

      <section className='sectionsBtns'>
          {contentTypes.map((item, i) => <button key={i}><a href={`#${item}`}>{item}</a></button>)}
      </section>

      <section className='table'>
        <table>

          <thead>
            <tr>
              <th className='name'>Name</th>
              <th className='type'>Type</th>
              <th className='paidOrFree'>Paid / Free</th>
              <th className='description'>Description</th>
            </tr>
          </thead>
          
          <tbody>
            {sortedContent.map((element, i) => <tr key={i}>
                <td className='name'><a href={element.url} target='_blank' rel='noreferrer'>{element.name}</a></td>
                <td className='type' id={element.type}>{element.type}</td>
                <td className='paidOrFree'>{element.paidOrFree}</td>
                <td className='description'>{element.description}</td>
            </tr>)}
          </tbody>

        </table>
      </section>

    </div>
  )
}

export default App
