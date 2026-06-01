import React from 'react'
import Card from './components/Card';

const App = () => {
  return (
    <div className="parent">
      <Card user="Sarthak" age={18}/>
        <Card user="Anuj" age={25}/>
     
    </div>
  )
}

export default App;
