import React from "react";

const Central = () => {
  return (
    <div>
      <h2>Central Form</h2>
      <form>
        <label>
          Text Input
          <input
            type="text"
            placeholder="Enter an input"
            required
          />
        </label>
        <label>
          Yes or No
          <select required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Central;
