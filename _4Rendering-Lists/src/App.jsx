import './App.css'
import Card from '../components/Card'

import elul from '../../Assets/elul.jpg';
import eye from '../../Assets/eye.jpg';

const People = [
  {
    'id': '1',
    'img': "https://images.pexels.com/photos/1878687/pexels-photo-1878687.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    'name': "Alex",
    'work': "Designer",
    'hobby': "Painting",
    'orgin': "Bangladish"
  },

  {
    'id': '2',
    'img': elul,
    'name': "Eden",
    'work': "Student",
    'hobby': "Reading",
    'orgin': "Ethiopia"
  },

  {
    'id': '3',
    'img': eye,
    'name': "Seife",
    'work': "Student",
    'hobby': "FootBall",
    'orgin': "Ertria"
  },

  {
    'id': '4',
    'img': eye,
    'name': "Hiyaw",
    'work': "Developer",
    'hobby': "Chase",
    'orgin': "Ertria"
  },

]

function App() {

  return (
    <>
        <h1>Rendering Lists</h1>
        <h3>Updated Version of  "_3Components"  Project</h3>

        <div className="App">
          {People.map((person) => 
                <Card 
                  key={person.id}
                  img={person.img}
                  name={person.name}
                  work={person.work}
                  hobby={person.hobby}
                  orgin={person.orgin}
                />
                )}
        </div>
        
    </>
  )
}

export default App
