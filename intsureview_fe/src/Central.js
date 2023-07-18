import React from "react";

const Central = () => {
  return (
    <div>
      <h2>Registration Page</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            placeholder="Enter your first name"
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            placeholder="Enter your last name"
            required
          />
        </label>
        <br />
        <label>
          Birthday:
          <input
            type="date"
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
        </label>
        <br />
        <label>
          Want to subscribe?
          <select required>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Central;
