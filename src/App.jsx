import AboutUs from "./AboutUs"
import Academics from "./Academics"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import Header from "./Header"
import OurStaff from "./OurStaff"
import Photos from "./Photos"
import Updates from "./Updates"


function App() {
  

  return (
    <div className="bg-red-100">
      <Header />
   <Photos/>
   <AboutUs/>
   <Academics/>
  <OurStaff/>
  <Updates/>
  <ContactUs/>
  <Footer/>
    </div>
  );
}

export default App
