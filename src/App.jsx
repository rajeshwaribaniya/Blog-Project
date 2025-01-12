
import { Route, Routes } from "react-router-dom"
import { NewBlog } from "./pages"
import { SingleNews } from "./pages/SingleNews"

function App() {
  

  return (
    <>
      <Routes>
        <Route index element = {<NewBlog />} />
        <Route path= "/:id" element={<SingleNews/>}/>
      </Routes>    
    </>
  )
}

export default App
