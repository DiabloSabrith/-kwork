
import './App.css'
import Header from '../components/layout/Header/Header'
import Table from '../components/Table/Table'
import Footer from '../components/layout/Footer/Footer '
function App() {
  

  return (
    <div className="app">
       <Header />
       <main>
         <Table/>
       </main>
       <Footer/>
    </div>
  )
}

export default App
