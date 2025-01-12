import {NewBlog, SingleNews} from './pages'
import { Route, Routes } from "react-router-dom"



function App() {
  

  return (
    <>
      <Routes>
        <Route index element = {<NewBlog />} />
        <Route path= "/:id" element={<SingleNews />}/>
      </Routes>    
    </>
  )
}

export default App
