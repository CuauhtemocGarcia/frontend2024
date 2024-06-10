import { useState } from 'react'
import './App.css'

const numericButtonClasses = 'btn btn-info w-100'
const operatorButtonClasses = 'btn btn-warning w-100'
const specialButtonClasses = 'btn btn-danger w-100'


function App() {
  const [display, setDisplay] = useState({
    value:'0',
    haspoint: false
  })
  const button = [
    [
      {
      class:'special',
      Function: clearDisplay,
      label:'c'
      },
      {
        class:'special',
        Function: deletelastCharacter,
        label:'<'
        },
      {
        class:'operator',
        Function: () => setoperator('/100*'),
        label:'c'
        },
        {
          class:'operator',
          Function: deletelastCharacter,
          label:'c'
          },
    ],
    [
      {
        class:'special',
        Function: deletelastCharacter,
        label:'c'
        },
        {
          class:'special',
          Function: deletelastCharacter,
          label:'c'
          },
          {
            class:'special',
            Function: deletelastCharacter,
            label:'c'
            },
    ]
  ]

  const updateDisplay = (value) =>{
    if(value =='.'){
    if(display.haspoint){
      return
    }
    
      setDisplay({
        ...display,
        value: display.value + value,
        haspoint: true
      })
      return
    }
    if(display.value =='0'){
      setDisplay({
        ...display,
        value
      })
      return
    }
    setDisplay({
      ...display,
      value: display.value + value
    })
  }

  const clearDisplay = () =>{
    setDisplay({
      ...display,
      value: '0',
      haspoint: false
    })
  }

  return (
    <div>
      <h1>calculator</h1>
      <hr />
      <table className='center'>
        <body>
          <tr>
            <td className='text-end' colSpan={4}>
              <h2>{display.value}</h2>
            </td>
          </tr>
          <tr>
            <td>
            <button
              type= 'button'
              className={specialButtonClasses}
              onClick={clearDisplay}
              >
                C
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={specialButtonClasses}
              >
                {'<'}
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={operatorButtonClasses}
              >
                %
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={operatorButtonClasses}
              >
                /
                </button>
            </td>
          </tr>
          <tr>
            <td>
            <button
              type= 'button'
              className={numericButtonClasses}
              onClick={()=> updateDisplay('7')}
              >
                7
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={numericButtonClasses}
              onClick={()=> updateDisplay('7')}
              >
                8
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={numericButtonClasses}
              onClick={()=> updateDisplay('7')}
              >
                9
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={operatorButtonClasses}
              >
                *
                </button>
            </td>
          </tr>
          <tr>
            <td>
            <button
              type= 'button'
              className={numericButtonClasses}
              onClick={()=> updateDisplay('7')}
              >
                4
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={numericButtonClasses}
              onClick={()=> updateDisplay('7')}
              >
                5
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={numericButtonClasses}
              onClick={()=> updateDisplay('7')}
              >
                6
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={operatorButtonClasses}
              >
                -
                </button>
            </td>
          </tr>
          <tr>
            <td>
            <button
              type= 'button'
              className={numericButtonClasses}
              onClick={()=> updateDisplay('7')}
              >
                1
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={numericButtonClasses}
              onClick={()=> updateDisplay('7')}
              >
                2
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={numericButtonClasses}
              onClick={()=> updateDisplay('7')}
              >
                3
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={operatorButtonClasses}
              >
                +
                </button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button
              type= 'button'
              className={numericButtonClasses}
              onClick={()=> updateDisplay('7')}
              >
                0
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={numericButtonClasses}
              >
                .
                </button>
            </td>
            <td>
            <button
              type= 'button'
              className={specialButtonClasses}
              onClick={()=> updateDisplay('7')}
              >
                =
                </button>
            </td>
          </tr>
        </body>
      </table>
    </div>
  )
}

export default App
