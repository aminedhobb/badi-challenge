import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { fetchZombies } from '../actions';

import Aside from '../components/aside';

class ZombiesShow extends Component {

  componentWillMount() {
    if (!this.props.zombie) {
      this.props.fetchZombies();
    }
  }

  render () {
    const zombie = this.props.zombie;

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
              backgroundSize: 'cover'}}>
        <div className="zombie-card">
          <img className="zombie-picture" src="https://img.maxisciences.com/article/480/agriculture/zombie-daniel-hollister_9baad9cbe47db35f7c810094d671761ab157b893.jpg" />
          <div className="zombie-details">
            <span>{zombie.attributes.name}</span>
            <div className="weapons-details">
              <h4> Weapons : </h4>
                {this.props.zombie.attributes.weapons.map((weapon) => {
                  return(
                    <ul>
                      <li> Name : {weapon.name} </li>
                      <li> Attack points : {weapon.attack_points} </li>
                      <li> Durability : {weapon.durability} </li>
                      <li> Price : {weapon.price} </li>
                    </ul>
                  )
                })}
            </div>
            <div className="armors-details">
              <h4> Armors : </h4>
                {this.props.zombie.attributes.armors.map((armor) => {
                  return(
                    <ul>
                      <li> Name : {armor.name} </li>
                      <li> Defense points : {armor.defense_points} </li>
                      <li> Durability : {armor.durability} </li>
                      <li> Price : {armor.price} </li>
                    </ul>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    ];
  }
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  return {
    zombie: state.zombies.data.find((zombie) => zombie.id === id)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchZombies }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ZombiesShow));
