import * as C from './App.styles';
import React, { useState } from 'react';

const App = () => {

  const [showPoem, setShowPoem] = React.useState(false)
  const [showFirst, setShowFirst] = React.useState(true)

  function change() {
    setShowPoem(true);
    setShowFirst(false);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Menu>
          
        </C.Menu>

        <C.Body>
          <C.Title>Hey Alekkusu!</C.Title>
          <C.Desc>We have been together a whole year and I wanted to write you something.</C.Desc>
          {showFirst ?
          <C.First>
            <C.Button>
              <button onClick={() => change()}>
                <img 
                  src="/assets/happy.png"
                  alt="arrow"
                />
                <img 
                  src="/assets/icons/arrow.png"
                  alt="arrow"
                />
              </button>

            </C.Button>
            <img 
                id='anni'
                src="/assets/anni.jpeg"
            />
          </C.First>
          : null}
          {showPoem ?
          <C.Poem>
            <C.Desc>A neighbour of mine gave me an idea of writing a poem. I tried.</C.Desc>
            <img
                id='monkey'
                src="/assets/monkey.png"
            />
            <div id='poem'>
              Tienes una gran sonrisa y pestañas largas,<br></br> 
              el pelo rizado y alocado,<br></br> 
              los veinte dedos que me dan carne de pollo.<br></br> 
              Eres un chico muy guapo pero además el más tuanis.<br></br> 
              Haces bromas tanto buenas como malas pero que siempre alegran mi día.
              Ha sido un año muy lindo a tu lado y espero tener muchos más<br></br> 
              porque te quiero mucho, Alekkusu-san!
              <p id='sign'>- Anni</p>
            </div>
            <img
                id='sydan'
                src="/assets/sydan.png"
            />
          </C.Poem>
          : null}
        </C.Body>
      </C.Area>
    </C.Container>
  );
}

export default App;