import  { useEffect, useState } from 'react';
import axios from 'axios';



const DataFetcher = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utiliza la variable de entorno para la URL del back-end
        // const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080'; // URL por defecto para desarrollo
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/data`);

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Data Fetched:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataFetcher;

