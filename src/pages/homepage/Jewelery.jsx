import React, { useState } from 'react';
import '../../App.css';
import earring from '../../Components/Assets/Earring.png';
import ring from '../../Components/Assets/gold ring.png';
import nosering from '../../Components/Assets/Nose ring.png';
import necklace from '../../Components/Assets/gold necklace.png';
import bangle from '../../Components/Assets/gbangle.png';


import Silver_earring from '../../Components/Assets/silver earring.png';
import Silver_ring from '../../Components/Assets/Silver ring.png';
import Silver_nosering from '../../Components/Assets/Silver Nose Ring.png';
import Silver_necklace from '../../Components/Assets/silver necklace.png';
import Silver_bangles from '../../Components/Assets/Silver Bangles.png';


const jewelryData = [
  { id: 1, type: 'Earrings', name: 'Earrings', image: earring },
  { id: 2, type: 'Rings', name: 'Ring', image: ring },
  { id: 3, type: 'Nose Rings', name: 'Nose Pin', image: nosering },
  { id: 4, type: 'Necklaces', name: 'Necklace', image: necklace },
  { id: 5, type: 'Bangles', name: 'Bangle', image: bangle },

  { id: 6, type: 'Earrings', name: 'Elegant Earrings', image: Silver_earring },
  { id: 7, type: 'Rings', name: 'Engagement Ring', image: Silver_ring },
  { id: 8, type: 'Nose Rings', name: 'Stylish Nose Pin', image: Silver_nosering },
  { id: 9, type: 'Necklaces', name: 'Silver Necklace', image: Silver_necklace },
  { id: 10, type: 'Bangles', name: ' bangles', image: Silver_bangles}, 

];

const Jewelry = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredJewelry = filter === 'All' ? jewelryData : jewelryData.filter(item => item.type === filter);

  return (
    <div className="jewelry-container">
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('Earrings')}>Earrings</button>
        <button onClick={() => handleFilterChange('Rings')}>Rings</button>
        <button onClick={() => handleFilterChange('Nose Rings')}>Nose Rings</button>
        <button onClick={() => handleFilterChange('Necklaces')}>Necklaces</button>
        <button onClick={() => handleFilterChange('Bangles')}>Bangles</button>

      </div>
      <div className="card-deck">
        {filteredJewelry.map(jewel => (
          <div className="card" key={jewel.id}>
            <img src={jewel.image} alt={jewel.name} />
            <div className="card-content">
              <h3>{jewel.name}</h3>
              <p>{jewel.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jewelry;
