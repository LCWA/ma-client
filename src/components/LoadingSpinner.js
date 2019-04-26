import React from 'react';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

import '../styles/LoadingSpinner.css';
 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <h3>Loading...</h3>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default AwesomeComponent;