import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Root from "./components/Root/Root";
import Poland from "./components/Poland/Poland";
import Argentina from "./components/Argentina/Argentina";
import RSVPFormContainer from "./components/RSVPForm/RSVPFormContainer";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<NavBar />} >
          <Route path="*" element={<PageNotFound />} ></Route>
          <Route index element={<Root />} ></Route>
          <Route path="/poland" element={<Poland />} ></Route>
          <Route path="/argentina" element={<Argentina />} ></Route>
          <Route path="/rsvp" element={<RSVPFormContainer />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;