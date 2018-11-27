import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { fetchZombies, fetchUser, deleteZombie } from '../actions';

import Aside from '../components/aside';

class ZombiesShow extends Component {

  componentWillMount() {
    if (!this.props.zombie) {
      this.props.fetchZombies();
    }
    this.props.fetchUser();
  }

  handleClick = () => {
    this.props.deleteZombie(this.props.zombie, this.props.history);
  }

  render () {
    const zombie = this.props.zombie;
    const user = this.props.user;
    let deleteLink = null;

    if (zombie && user === zombie.attributes.user_id) {
      deleteLink = (
        <button className="delete" onClick={this.handleClick}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
            Delete
        </button>
      );
    }
    if (!zombie) {
      return (
        <Aside key="aside">
          <Link to="/">Back to list</Link>
        </Aside>);
    }
    return [
      <Aside key="aside">
        <Link to="/">Back to list</Link>
      </Aside>,
      <div className="zombie-container" key="zombie"  
      style={{backgroundImage: 'url("https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_IZombie_image1600w.jpg")',
              backgroundSize: 'cover', backgroundPosition: 'center center'}}>
        <div className="zombie-card">
          <img className="zombie-picture" src="https://img00.deviantart.net/144a/i/2006/067/0/d/acrylic_zombie_square_by_jimroundsound.jpg" />
          <div className="zombie-details">
            <span>{zombie.attributes.name}</span>
            <div className="weapons-details">
              <h5><strong> Weapons : </strong></h5>
                {this.props.zombie.attributes.weapons.map((weapon) => {
                  return(
                    <ul key={weapon.id}>
                      <li>Name: {weapon.name} </li>
                      <li>Attack points: {weapon.attack_points} </li>
                      <li>Durability: {weapon.durability} </li>
                      <li>Price: {weapon.price} </li>
                    </ul>
                  )
                })}
            </div>
            <div className="armors-details">
              <h5><strong> Armors : </strong></h5>
                {this.props.zombie.attributes.armors.map((armor) => {
                  return(
                    <ul key={armor.id}>
                      <li>Name: {armor.name} </li>
                      <li>Defense points: {armor.defense_points} </li>
                      <li>Durability: {armor.durability} </li>
                      <li>Price: {armor.price} </li>
                    </ul>
                  )
                })}
            </div>
          </div>
          {deleteLink}
        </div>
      </div>
    ];
  }
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  return {
    zombie: state.zombies.data.find((zombie) => zombie.id === id),
    user: state.user.id
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchZombies, fetchUser, deleteZombie }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ZombiesShow));
