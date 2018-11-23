import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from 'react-jsonschema-form';

import Aside from '../components/aside';
import { schema, uiSchema, formData } from '../data/schema';

import { addZombie } from '../actions';


class ZombiesNew extends Component {

  onSubmit = ({formData}) => {
    console.log(JSON.stringify(formData));
    this.props.addZombie(formData, () => {
      this.props.history.push('/');
    });
  }

  render() {
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addZo }, dispatch)
// }

export default connect(null, { addZombie })(ZombiesNew);
