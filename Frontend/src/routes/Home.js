import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Shoes from '../containers/Shoes'
class Home extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScrol: 2
        };
        return (
            <Shoes/>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
