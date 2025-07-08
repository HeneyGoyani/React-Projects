import React from 'react';
import '../Components/Pagination.css';
import { FaArrowRight } from 'react-icons/fa';

const PaginationStatic = () => {
  return (
    <div className="pagination-container">
      <button className="page-btn active">1</button>
      <button className="page-btn">2</button>
      <button className="page-btn">3</button>
      <button className="page-btn">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default PaginationStatic;
