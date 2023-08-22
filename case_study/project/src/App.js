import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FacilityCreateVilla } from "./components/facility/FacilityCreateVilla";
import { FacilityCreateHouse } from "./components/facility/FacilityCreateHouse";
import { FacilityCreateRoom } from "./components/facility/FacilityCreateRoom";
import { FacilityShow } from "./components/facility/FacilityShow";
import SideBar from "./components/layout/SideBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { FacilityEdit } from "./components/facility/FacilityEdit";
function App() {
  return (
    <>
      <div className='d-flex'>
        <SideBar />
        <div className=" col-10 d-flex flex-column">
          <Header />
          <div className="min-vh-100 mx-5">
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<FacilityShow />} />
                  <Route path="facility/" >
                    <Route path="create/">
                      <Route path="villa" element={<FacilityCreateVilla />} />
                      <Route path="house" element={<FacilityCreateHouse />} />
                      <Route path="room" element={<FacilityCreateRoom />} />
                    </Route>
                    <Route path="edit" element={<FacilityEdit />} />
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
          <Footer />
        </div>
      </div>
    </>);
}

export default App;
