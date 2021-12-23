import '../App.css'
import React from 'react'
import Watch from './Watch'

function WatchList ({watches, handleRemove}) {
  return(
    <div className="watch-list">
      {watches.map(w =>
        <Watch key={w.name} name={w.name} UTCOffset={w.offset} onRemove={handleRemove}/>
        )}
    </div>
  )
}

export default WatchList;

