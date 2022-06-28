import './App.css'
import { Boxes, ElementOne, ElementThree, ElementTwo } from './components/elements'
import { Box, Typography, Button } from "@mui/material";

function App() {

  return (
    <div className="App">
     
        <ElementOne />
        <ElementTwo />
        <ElementThree />
        <Boxes/>
      
    </div>
  )
}

export default App
