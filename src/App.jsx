import About from "./Components/about/about.jsx"
import Banner from "./Components/banner/banner.jsx"
import Cursor from "./Components/cursor/cursor.jsx"
import Nav_bar from "./Components/nav/nav.jsx"

import "./global.scss"

function App() {
  
  return (
    <>
      <Cursor/>
      <Nav_bar/>
      <Banner/>
      <About/>
    </>
  )
}

export default App
