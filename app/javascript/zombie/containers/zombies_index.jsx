import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom'; 

import { fetchZombies, searchZombies } from '../actions';
import Aside from '../components/aside';

class ZombiesIndex extends Component {

  componentWillMount() {
    this.props.fetchZombies();
  }

  handleClick = () => {
    fetch('/users/sign_out', {
      method: 'DELETE',      
    });
  }
  handleUpdate = (event) => {
    this.props.searchZombies(event.target.value);
  }

  render() {
    return [
      <Aside key="aside">
        <Link to="/zombies/new">Create a zombie</Link>
        <br/>
        <Link to="/users/sign_in" onClick={this.handleClick} >Log out</Link>
      </Aside>,
      <div className="list-container" key="zombies">
        <div className="search-bar">
          <input type="text" className="form-control form-search"
            onChange={this.handleUpdate} />
        </div>
        {this.props.zombies.map((zombie) => {
          return (
            <div key={zombie.id} className="zombie-smallad">
              <Link to={`/zombies/${zombie.id}`} key={zombie.id} />
              <img className="zombie-logo" src="https://img.freepik.com/free-vector/zombie-mascot_31492-44.jpg?size=338&ext=jpg" />
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
  return bindActionCreators({ fetchZombies, searchZombies }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ZombiesIndex);
