import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Intro from "./components/Intro/Intro"
import NavBar from "./components/NavBar/NavBar"
import PageNotFound from "./components/PageNotFound/PageNotFound"
// import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Poland from "./components/Poland/Poland"
import Argentina from "./components/Argentina/Argentina"
import RSVPForm from "./components/RSVPForm/RSVPForm"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route path="*" element={<PageNotFound />} ></Route>
          <Route index element={<Home />} ></Route>
          <Route path="/poland" element={<Poland />} ></Route>
          <Route path="/argentina" element={<Argentina />} ></Route>
          <Route path="/rsvp" element={<RSVPForm />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;