import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Home from '../routes/Home';
class App extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <Fragment>
                <Home/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);