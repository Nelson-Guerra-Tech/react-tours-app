import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // fetching data
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = response.json();
      console.log(tours);
    } catch (error) {
      console.log('There has been an error');
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  // loading
  if (loading) {
    // if loading is set to true, then return a
    // main div with the loading component
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
