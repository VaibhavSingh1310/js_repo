import './APP.css'
import Header from './components/Header'
import Footer from './components/footer'
function App() {
 
  const y = [2024,2025,2026]
  const c = {name:"kiet",location : "Ghaziabad",Established:1990}
  return (
    <div className='container'>

      <h1>Hello Vaibhav</h1>
      <Header />
      <h2>My First React App</h2>
      <Footer year= {y} company = {c}/>

      </div>
    
  )
}
export default App
