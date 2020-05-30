import React from 'react';

function App(props) {
  return (
  	<div >
    <h1 className ='f1 tc code ba grow'>Hellooo world</h1>
	    <div>
	    <p>{props.greeting}</p>
	    <p>{props.name}</p>
	    </div>
    </div>
  );
}

export default App;
