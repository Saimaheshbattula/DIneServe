import React from 'react';
import { connect } from 'react-redux';
import { setfilter, resetfilter } from '../Action';

const Filter = ({ filter_name, setfilter }) => {
  const prod = ["All Items", "Rice Items", "Cold Drinks", "Pizza", "Hot Drinks"];

  const filterDropdownStyle = {
    fontSize: '16px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const tableNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginRight: '800px'
  };

  return (
    <div className="d-flex justify-content-center p-2">
      <div className="mr-3">
        <span className="h4" style={tableNumberStyle}>Table Number: 1</span>
      </div>
      <div>
        <span className="h4 m-2" style={tableNumberStyle}>Filter:</span>
        <select name="filter_name" className="p-1" style={filterDropdownStyle} onChange={(e) => setfilter(e.target.value)}>
          {prod.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter_name: state.filterreducer.filter_name,
});

export default connect(mapStateToProps, { setfilter, resetfilter })(Filter);
