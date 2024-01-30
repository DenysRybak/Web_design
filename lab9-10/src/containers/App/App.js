import './App.css';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import Home from '../App/Home/Home';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';

function App() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

      return () => clearTimeout(timeout);
    }, []);

  return (
    <div>
        {showSpinner ? (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: "100vh"
            }}>
                <RingLoader color="#3e2323" size={150} loading={true} />
            </div>
        ) : (
            <>
              <Layout />
              <Home />
              <Footer />
            </>
        )}
    </div>
  );
}

export default App;
