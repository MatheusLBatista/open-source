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
          <div className="card-gallery">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </div>
  )
}

export default App
