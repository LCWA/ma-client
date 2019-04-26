import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import Loadable from 'react-loadable';

const LoadableCal = Loadable({
    loader: () => import('./Calendly'),
    loading() {
        return <LoadingSpinner />
    },
});

export default class TestComponent extends React.Component {
    render() {
        return <LoadableCal />;
    }
}

/*class TestComponent extends React.Component {
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