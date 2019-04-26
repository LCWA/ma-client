import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';

class Delayed extends React.Component {
constructor(props) {
    super(props);
    this.state = {loading : true};
}

componentDidMount() {
setTimeout(() => {
this.setState({loading: false});
}, this.props.waitBeforeShow);
}

render() {
return this.state.loading ? <LoadingSpinner /> : this.props.children;
}
}

Delayed.propTypes = {
waitBeforeShow: PropTypes.number.isRequired
};

export default Delayed;