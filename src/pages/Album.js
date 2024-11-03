// src/Album.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTER from '../router';

const albums = [
  { id: 1, title: 'Album 1', img: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Album 2', img: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Album 3', img: 'https://via.placeholder.com/150' }
];

function Album() {
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  return (
    <div>
      <h2>Album List</h2>
      <button onClick={() => navigate(ROUTER.TODO)}>Go to TODO</button> {/* Cập nhật sự kiện onClick */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {albums.map((album) => (
          <div key={album.id} style={{ textAlign: 'center' }}>
            <img src={album.img} alt={album.title} style={{ width: '150px', height: '150px' }} />
            <p>{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;
