import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" class="navbar-brand">ExcerTracker</Link>
        <div class="collpase navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="navbar-item">
          <Link to="/" class="nav-link">Exercises</Link>
          </li>
          <li class="navbar-item">
          <Link to="/create" class="nav-link">Create Exercise Log</Link>
          </li>
          <li class="navbar-item">
          <Link to="/user" class="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}