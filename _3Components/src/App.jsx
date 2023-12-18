import './App.css'
import Card from "../components/Card"

import elul from '../../Assets/elul.jpg';
import eye from '../../Assets/eye.jpg';


function App() {

  return (
    <>
      <div className='App'>

          <Card
            img = "https://images.pexels.com/photos/1878687/pexels-photo-1878687.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            name = "Alex"
            work = "Designer"
            hobby = "Painting"
            orgin = "Bangladish"
          />
          <Card
            img = {elul}
            name = "Eden"
            work = "Student"
            hobby = "Reading"
            orgin = "Ethiopia"
          />
          <Card
            img = {eye}
            name = "Seife"
            work = "Student"
            hobby = "Football"
            orgin = "Ethiopia"
          />
          <Card
            img = {eye}
            name = "Hiyaw"
            work = "Developper"
            hobby = "Chase"
            orgin = "Ertria"
          />

      </div>
    </>
  )
}

export default App
