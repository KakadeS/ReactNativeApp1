import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { KhaleejCategoryCommon } from './common';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchLocalData } from '../actions/fetchLocalData';
import { fetchSportsData } from '../actions/fetchSportsData';
import { fetchBusinessData } from '../actions/fetchBusinessData';
class KhaleejCategory extends Component {
     componentWillMount() {
        this.props.fetchLocalData(),
        this.props.fetchSportsData(),
        this.props.fetchBusinessData()
    }
    render() {
        return (
            <View style={{flexDirection:'row'}}>
                
                 <KhaleejCategoryCommon outerViewstyle={{ backgroundColor: "#66b3ff",
                 marginRight: 1,flex:1, height: 60}} imgSrcPath={require('./images/icn_gold_rate_normal.png')} 
                 outerImgStyle={{ width: 50, height: 50, alignSelf: 'center'}} />

                   <KhaleejCategoryCommon outerViewstyle={{ backgroundColor: "#66b3ff",
                  marginRight: 1,flex:1, height: 60}} imgSrcPath={require('./images/icn_forex_normal.png')} 
                  outerImgStyle={{ width: 50, height: 50, alignSelf: 'center'}} />

                   <KhaleejCategoryCommon outerViewstyle={{ backgroundColor: "#66b3ff",
                 marginRight: 1,flex:1, height: 60}} imgSrcPath={require('./images/icn_prayer_normal.png')} 
                 outerImgStyle={{ width: 50, height: 50, alignSelf: 'center'}} />

                   <KhaleejCategoryCommon outerViewstyle={{ backgroundColor: "#66b3ff",
                 marginRight: 1,flex:1, height: 60}} imgSrcPath={require('./images/icn_cinema_normal.png')} 
                 outerImgStyle={{ width: 50, height: 50, alignSelf: 'center'}} />

                   <KhaleejCategoryCommon outerViewstyle={{ backgroundColor: "#66b3ff",
                 marginRight: 1,flex:1, height: 60}} imgSrcPath={require('./images/icn_event_normal.png')} 
                 outerImgStyle={{ width: 50, height: 50, alignSelf: 'center'}} /> 

            </View>

        );
    }
}

const styles = StyleSheet.create({
    labelStyle: {
        color: '#99ccff',
        fontSize: 18
    }
});

const mapStateToProps = state => {
   // alert(JSON.stringify(state.businessResponseData))
    return {
        apiLocalResponseData: state.localResponseData,
        apiSportsResponseData : state.sportsResponseData,
        apiBusinessResponseData : state.businessResponseData
  //isLoading : state.isLoading
        //category : state.apiResponseData.channel.category
    };
}
export default connect(mapStateToProps, {fetchLocalData,fetchSportsData,fetchBusinessData})(KhaleejCategory)


