import React from "react";

export default function Application() {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <img
        src="https://via.placeholder.com/150"
        alt="this is just placeholder image"
      />
      <span title="it is a span element">Qalesan</span>
      <div data-testid="hello shmello"></div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="fullname"
            value="Dilnavoz"
            onChange={() => {}}
          />
        </div>
        <p>John Doe</p>
        <p>Harry Potter</p>
        <div>
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United states</option>
            <option value="UK">United Kingdom</option>
            <option value="RU">Russia</option>
            <option value="CA">CANADA</option>
            <option value="UZ">UZBEKISTAN</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button type="submit" disabled>
          Submit
        </button>
      </form>
    </>
  );
}
