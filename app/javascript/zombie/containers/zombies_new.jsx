import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from 'react-jsonschema-form';

import Aside from '../components/aside';
import { schema, uiSchema, formData } from '../data/schema';

import { addZombie, fetchWeapons, fetchArmors, fetchUser } from '../actions';


class ZombiesNew extends Component {

  componentWillMount() {
    this.props.fetchWeapons();
    this.props.fetchArmors();
    this.props.fetchUser();
  }

  onSubmit = ({formData}) => {
    console.log(formData);
    this.props.addZombie(formData, () => {
      this.props.history.push('/');
    });
  }

  updateSchema = () => {
    schema.properties.data.properties.attributes.properties.weapon_ids.items.enum = this.props.weapons.map((weapon) => {
      return weapon.id;
    });    
    schema.properties.data.properties.attributes.properties.weapon_ids.items.enumNames = this.props.weapons.map((weapon) => {
      return weapon.name;
    });
    schema.properties.data.properties.attributes.properties.armor_ids.items.enum = this.props.armors.map((armor) => {
      return armor.id;
    });    
    schema.properties.data.properties.attributes.properties.armor_ids.items.enumNames = this.props.armors.map((armor) => {
      return armor.name;
    });
    formData.data.attributes.user_id = this.props.user
  }

  render() {
    this.updateSchema();

    // console.log(this.props.weapon_ids);
    return [
      <Aside key="aside">
        <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{backgroundImage: 'url("https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_IZombie_image1600w.jpg")'}}>
        <div className="form-content">
          <Form schema={schema}
            uiSchema={uiSchema}
            formData={formData}
            onSubmit={this.onSubmit}
           />
        </div>
      </div>
    ];    
  }
}

function mapStateToProps(state) {
  return {
    weapons: state.weapons.data,
    armors: state.armors.data,
    user: state.user.id
  }
}



export default connect(mapStateToProps, { addZombie, fetchWeapons, fetchArmors, fetchUser })(ZombiesNew);
