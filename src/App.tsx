import './App.css'
import About from './components/About'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { dados } from "./data"

function App() {

  return (
      <div>
        <Header />
        <main>
          <SearchBar />
          <div className="card-gallery">
            {dados.map((dado: any) => (
              <Card
                key={dado.id}
                backgroundImage={dado.backgroundImage}
                heading={dado.heading}
                backgroundColor={dado.backgroundColor}
                paragraph={dado.paragraph}
                labels={dado.labels.map((label: any) => (
                  <div className="label" key={dado.id}>{label}</div>
                ))}
              />
            ))}
          </div>
          <About />
          <Footer />
        </main>
      </div>
  )
}

export default App
