import {io} from "socket.io-client"
function App() {
  const socket=io("http://localhost:3001")
  console.log(socket)
  return (
    <div>
      App
    </div>
  )
}

export default App
