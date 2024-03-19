import React, { useState, useRef } from 'react';
import { config } from '../config';

const ReportForm = ({ onSubmit }) => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState({ file1: null, file2: null, file3: null });
  const fileInputRefs = {
    file1: useRef(null),
    file2: useRef(null),
    file3: useRef(null),
  };

  const handleFileChange = (name, event) => {
    setFiles(prevFiles => ({ ...prevFiles, [name]: event.target.files[0] }));
  };

  const sendJsonData = async (data) => {
    const apiUrl = `${config.apiUrl}/tu-endpoint-json`;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJpZCI6IjY1ZWUxNzJjODMyMzNhZGI2OWNiMjhjZSIsImVtYWlsIjoiYWRtaW5AdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3QiLCJyb2xlIjozfSwiaWF0IjoxNzEwMTAyNjM4LCJleHAiOjE3MTAxODkwMzh9.wjdeA5USVj-f0qp9n21Tvn_GJr-FXMPXiEL-3GIQ0vw'; 

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!files.file1 && !files.file2 && !files.file3) {
      const data = {
        category,
        description,
      };
      await sendJsonData(data);
    } else {
      const formData = new FormData();
      formData.append('category', category);
      formData.append('description', description);
      
      Object.entries(files).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      try {
        const apiUrl = `${config.apiUrl}/api/reports`;
        const response = await fetch(apiUrl, {
          method: 'POST',
          body: formData,
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    }
  };

  const handleFileInputClick = (name) => {
    fileInputRefs[name].current.click();
  };

  return (
    <div className="report-form">
      <form onSubmit={handleFormSubmit}>
        <label>
          Categoría
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Seleccione el Reporte</option>
            <option value="infrastructure">Infraestructura</option>
            <option value="service">Servicio</option>
          </select>
        </label>
        <label className='lb-descripcion'>
          Descripción del Desperfecto
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <div className='file-upload-container'>
          <p>Evidencias de Desperfectos</p>
          <p>Adjuntar Foto</p>
          {Object.keys(files).map((fileKey) => (
            <React.Fragment key={fileKey}>
              <button type="button" onClick={() => handleFileInputClick(fileKey)}>
                +
              </button>
              <input 
                type="file" 
                ref={fileInputRefs[fileKey]}
                onChange={(event) => handleFileChange(fileKey, event)} 
                style={{ display: 'none' }}
              />
            </React.Fragment>
          ))}
        </div>
        <div className='file-list'>
          {Object.values(files).map((file, index) => file && (
            <div key={index}>{file.name}</div>
          ))}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ReportForm;
