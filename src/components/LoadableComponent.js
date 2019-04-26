import React from 'react';
import Delayed from './Delayed';
import Calendly from './Calendly';

const DelComponent = props => (
  <Delayed waitBeforeShow={2000}>
    <div>
      <Calendly />
    </div>
  </Delayed>
)

class LoadableComponent extends React.Component {
    render() {
        return <DelComponent />;
    }
}

export default LoadableComponent;