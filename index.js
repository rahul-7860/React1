import React from 'react'
import ReactDOM from 'react-dom'

import AddComponent from './add.jsx'

class IndexComp extends React.Component  {
  render() {
    return(
      <div>

        {
          // <div>Hello from index</div>
        }

        <AddComponent />
      </div>
    )
  }
}

ReactDOM.render(<IndexComp />, document.getElementById("root"))