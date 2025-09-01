import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import axios from 'axios'
import ListUser from './component/listTodo.jsx'
import UserAdd from './component/userAdd.jsx'
import UserEdit from './component/userEdit.jsx'
import Bg from './component/bg.jsx'

axios.withCredentials = true

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bg><ListUser /></Bg>} />
        <Route path="/add" element={<Bg><UserAdd /></Bg>} />
        <Route path="/edit/:id" element={<Bg><UserEdit /></Bg>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;