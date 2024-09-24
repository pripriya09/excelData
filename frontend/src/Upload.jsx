import React, { useState } from 'react';
import axios from 'axios';


function Upload() {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setStatus('');
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setStatus('select file');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setLoading(true);
        try {
            await axios.post('http://localhost:5000/upload', formData,
             
                 {
               
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            setStatus(' uploaded successfully');
        }
     
      catch (error) {
        console.error('Error:', error);
         setStatus(' error uploadingFile');
        } 
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="upload-container">
            <h2>upload excelFile</h2>
            <form onSubmit={onSubmit}>
                <input 
                    type="file" 
                    accept=".xlsx" 
                    onChange={onFileChange} 
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Uploading...' : 'Upload'}
                </button>
            </form>
            {status && <p className="status-message">{status}</p>}
        </div>
    );
}

export default Upload;
