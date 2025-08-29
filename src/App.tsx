import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {

  return (
      <div>
        <Header />
        <main>
          <SearchBar />
          <Card />
        </main>
      </div>
  )
}

export default App
