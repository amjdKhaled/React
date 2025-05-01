import React from "react";

export const PlatformSelector = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle mb-2"
        type="button"
        id="platformDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Platform
      </button>
      <ul className="dropdown-menu" aria-labelledby="platformDropdown">
        <li>
          <button className="dropdown-item">Item 1</button>
        </li>
        <li>
          <button className="dropdown-item">Item 2</button>
        </li>
        <li>
          <button className="dropdown-item">Item 3</button>
        </li>
      </ul>
    </div>
  );
};

export default PlatformSelector;
