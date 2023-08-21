import logo from './logo.svg';
import './App.css';
import SideBar from './components/layout/SideBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
function App() {
  return (
    <>
      <div className='d-flex'>
        <SideBar />
        <div className=" col-10 d-flex flex-column">
          <Header />
          <div className="min-vh-100 ">
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
