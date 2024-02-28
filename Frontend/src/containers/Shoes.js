import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from "../store/actions"
import './Shoes.scss';
class Shoes extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {
        await this.props.handleShoesInfo()
    }

    render() {
        let {shoesInfo} = this.props
        return (
            <div className='shoes-container'>
                <div className='back-ground'> </div>
                <div className='content'>
                    <div className='box-content'>
                        <div className='scoller'>
                            {shoesInfo && shoesInfo.length > 0 && shoesInfo.map((item, index) => {
                                return(
                                    <Fragment>
                                        <div className='picture'></div>
                                        <div className="shoes-name">{item.name}</div>
                                        <div className='shoes-des'>{item.description}</div>
                                        <div className='shoes-price'>{item.price}</div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className='box-content'>
                        
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        shoesInfo: state.user.shoesInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleShoesInfo:() => dispatch(actions.handleShoesInfo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shoes);