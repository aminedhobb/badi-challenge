import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom'; 

import { fetchZombies, searchZombies, logout } from '../actions';
import Aside from '../components/aside';

class ZombiesIndex extends Component {

  componentWillMount() {
    this.props.fetchZombies();
  }

  componentDidMount() {
    this.searchInput.focus();
  }
  
  handleClick = () => {
    this.props.logout(this.props.history);
  }

  handleUpdate = (event) => {
    this.props.searchZombies(event.target.value);
  }

  divStyle = (zombie) => {
    if (zombie && zombie.attributes.avatar.url) {
      return {
        backgroundImage: 'url('+ zombie.attributes.avatar.url +')'
      };
    } else {
      return {
        backgroundImage: 'url(https://img00.deviantart.net/144a/i/2006/067/0/d/acrylic_zombie_square_by_jimroundsound.jpg)'
      };
    }
  }

  render() {
    return [
      <Aside key="aside">
        <Link to="/zombies/new">Create a zombie</Link>
        <br/>
        <Link to="" onClick={this.handleClick}>Log out</Link>
      </Aside>,
      <div className="list-container" key="zombies">
        <div className="search-bar">
          <input type="text" className="form-control form-search"
            onChange={this.handleUpdate} ref={(input) => { this.searchInput = input; }} />
        </div>
        {this.props.zombies.map((zombie) => {
          return (
            <div key={zombie.id} className="zombie-smallad">
              <Link to={`/zombies/${zombie.id}`} key={zombie.id} />
              <div className="zombie-logo" style={this.divStyle(zombie)}></div>
              <div className="zombie-details">
                <span>{zombie.attributes.name}</span>
                <ul>
                  <li><strong>Hit points:</strong> {zombie.attributes.hit_points}</li>
                  <li><strong>Speed:</strong> {zombie.attributes.speed}</li>
                  <li><strong>Brains Eaten:</strong> {zombie.attributes.brains_eaten}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  };
}


function mapStateToProps(state) {
  return {
    zombies: state.zombies.data,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchZombies, searchZombies, logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ZombiesIndex);
