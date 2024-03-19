import React, { useState, useRef } from 'react';

const ReportForm = ({ onSubmit }) => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  // Use an object to handle multiple files separately
  const [files, setFiles] = useState({ file1: null, file2: null, file3: null });
  const fileInputRefs = {
    file1: useRef(null),
    file2: useRef(null),
    file3: useRef(null),
  };

  const handleFileChange = (name, event) => {
    setFiles(prevFiles => ({ ...prevFiles, [name]: event.target.files[0] }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Process the form data here, including the files
    onSubmit({ category, description, files });
    // Reset the form fields after submission
    setCategory('');
    setDescription('');
    setFiles({ file1: null, file2: null, file3: null });
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
          {Object.keys(files).map((fileKey, index) => (
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
        {/* Display list of selected file names */}
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
