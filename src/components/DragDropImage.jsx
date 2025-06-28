import React, { useState } from 'react';

const DragDropImage = () => {
  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please drop an image file!');
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: '2px dashed #999',
        padding: '40px',
        textAlign: 'center',
        background: dragging ? '#eee' : '#fafafa',
        cursor: 'pointer',
      }}
    >
      {image ? (
        <img src={image} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
      ) : (
        <p>Drag & drop an image here</p>
      )}
    </div>
  );
};

export default DragDropImage;


