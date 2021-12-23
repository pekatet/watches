import './App.css';
import React, { useState } from 'react'
import AddForm from './Components/AddForm'
import WatchList from './Components/WatchList'

function App() {
  const [watches, setWatches] = useState([]);

  const handleAdd = watchNew => {
    if (watches.find(w => w.name === watchNew.name))
      alert('Часы с таким названием уже были добавлены')
    else
      setWatches(prevState => [...prevState, watchNew])
  }

  const handleRemove = name => {setWatches(prevState => prevState.filter(w => w.name !== name))}

  return (
    <div className="App">
      <AddForm onAdd={handleAdd}/>
      <WatchList watches={watches} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;
