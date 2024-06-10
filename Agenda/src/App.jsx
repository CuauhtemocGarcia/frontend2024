import Listitem from "./Listitem"

const personas = [
  {
    nombre :'cesar',
    apellidos: 'sanchez',
    email:'cesardesssanz@goutlo.mx',
    telefono:'1123456789'
  },
  {
    nombre :'lucero',
    apellidos: 'lopez',
    email:'lucelo@goutlo.mx',
    telefono:'1123456789'
  },  
  {
    nombre :'angelica',
    apellidos: 'danahi',
    email:'angedana@goutlo.mx',
    telefono:'1123456789'
  },
]

function App() {

  return (
    
    <div>
      <h1>Agenda</h1>
      <hr />
      <ul>

        {personas.map((persona)=> (
          <Listitem
            key={persona.email}
            persona={persona}

            />
        ))}
      </ul>
    </div>
  )
}

export default App