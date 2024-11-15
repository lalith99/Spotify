import React from 'react';


  import Header from './components/Header';
  import Footer from './components/Footer';
  import SideBar from './components/SideBar';
  
function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Add sidebar */}
      <SideBar />
      <Header />
      <Footer />
     </div>
  );
}

export default App;
