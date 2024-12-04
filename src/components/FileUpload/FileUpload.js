import React from 'react';

const FileUpload = ({ label, onFileChange }) => (
    <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>{label}</label>
        <input
            type="file"
            onChange={(e) => onFileChange(e.target.files[0])}
            style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
            }}
        />
    </div>
);

export default FileUpload;
