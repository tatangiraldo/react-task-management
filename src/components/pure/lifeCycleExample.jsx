/** example of component type CLASS that use 
 * life cycle methods
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('when the constructor component is istanced')
    }

    componentWillMount() {
        console.log('Before component build');
    }

    componentDidMount() {
        console.log('Component is built but not appear yet ')
    }

    componentWillReceiveProps(nextProps) {
        console.log('If the component receibe other props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Manage if the component should be updated or not, returs true or false ');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Just before component will be updated');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Just before component is updated');
    }

    componentWillUnmount() {
        console.log('Just before component will be dissapear');
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

LifeCycleExample.propTypes = {

};

export default LifeCycleExample;