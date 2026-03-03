import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Expertise from './Expertise';
import AllServices from './AllServices';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact'; 
import Footer from './Footer';

function App() {
  const [modalContent, setModalContent] = useState(null); 

  return (
    <div className="...">
      <Navbar />
      <main>...</main>
      <Footer setModalContent={setModalContent} /> 
      {modalContent && <Modal content={modalContent} onClose={() => setModalContent(null)} />}
    </div>
  );
}

export default App;