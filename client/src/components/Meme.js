import React from 'react';

const Generator = () => {
  return (
    <div>
      <form>
        <label>
          <input type="text" />
        </label>
        <label>
          <input type="text" />
        </label>
      </form>
      <div className="button-container">
        <button>Get a New Meme Image</button>
      </div>
    </div>
  );
};

export default Generator;
