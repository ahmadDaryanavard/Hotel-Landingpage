import styled from "styled-components";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import HotelSection from "./HotelSection";
import RoomsSection from "./RoomsSection";
import FacilitiesSection from "./FacilitiesSection";
import QeshmIslandSection from "./QeshmIslandSection";
const Div = styled.div`
  direction: rtl;
`;
function App() {
  return (
    <Div className="container-fluid m-0 p-0">
      <Header />
      <HotelSection />
      <RoomsSection />
      <FacilitiesSection />
      <QeshmIslandSection />
    </Div>
  );
}

export default App;
