import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import HomeIndex from './routes/Home/HomeIndex'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<HomeIndex />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

