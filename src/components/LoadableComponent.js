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


/*function LoadingComponent() {
    return <LoadingSpinner />;
}

const LoadableCal = Loadable({
    loader: () => import('./Calendly'),
    loading: LoadingComponent,
    delay: 300
});

class TestComponent extends React.Component {
    render() {
        return <LoadableCal />;
    }
}

export default TestComponent;


class TestComponent extends React.Component {
    state = {
      Calendly: null
    };
  
    componentWillMount() {
      import('./Calendly.js').then(Calendly => {
        this.setState({ Calendly: Calendly.default });
      });
    }
  
    render() {
      let {Calendly} = this.state;
      if (!Calendly) {
        return <LoadingSpinner />
      } else {
        return <Calendly />;
      };
    }
  }

  export default TestComponent;*/