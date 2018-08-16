import React, { Component } from "react";
import { FlatList, Text, View, Image, Dimensions, TouchableOpacity, ActivityIndicator } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchLocalData } from '../actions/fetchLocalData';
import { fetchSportsData } from '../actions/fetchSportsData';
import { fetchBusinessData } from '../actions/fetchBusinessData';
import { bindActionCreators } from 'redux';
import {NavigationActions} from 'react-navigation';
import { TabNavigator, StackNavigator,TabBarTop,DrawerNavigator } from 'react-navigation';
import SubCategoryList from '../components/SubCategoryList';
import SubCategoryDetailsPage from '../components/SubCategoryDetailsPage';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 120;
  
class CategoryFlatList extends Component {
    
   componentWillMount() {
        this.props.fetchLocalData();
        this.props.fetchSportsData();
        this.props.fetchBusinessData();
    }
    render() {
      // alert(JSON.stringify(this.props.navigate))
         let data=[];
        switch(this.props.title){
                case 'Local':
                data=this.props.apiLocalResponseData.localResponseData;
                break;
                case 'Sports':
                data=this.props.apiSportsResponseData.sportsResponseData;
                break;
                case 'Business':
                data=this.props.apiBusinessResponseData.businessResponseData;
                break;
                default:
                return false;
                }
            return (
                <FlatList
                    horizontal
                    data={data}
                    renderItem={({ item ,index}) => {
                        return (
                            <TouchableOpacity 
                onPress={() => this.props.navigate("subCategoryDetails",{categoryNameTitle:this.props.title,indexItem:index})}
                            >
                                <View style={{
                                    marginTop: 13,
                                    flex: 1,
                                    marginRight: 8,
                                    height: 150
                                }} >
                                    <View
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: BannerWidth / 2,
                                            height: 150,
                                        }}
                                    >
                                        <Image
                                            style={{
                                                flex: 1
                                            }}
                                            source={{uri : null}}
                                                //uri: item.enclosure[0].$.url }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 95,
                                            width: BannerWidth / 2,
                                            height: 50,
                                            backgroundColor: 'rgba(255,255,255, 0.5)',
                                        }}
                                    >
                                        <Text numberOfLines={2} style={{
                                            fontSize: 16,
                                            color: 'black',
                                            marginLeft: 2,
                                            fontWeight: 'bold'
                                        }} >
                                            {item.title}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.title}
                />
            )
    }
}


const mapStateToProps = state => {
    //alert(JSON.stringify(state.businessResponseData))
    return {
       apiLocalResponseData: state.localResponseData,
        apiSportsResponseData : state.sportsResponseData,
        apiBusinessResponseData : state.businessResponseData
  //isLoading : state.isLoading
        //category : state.apiResponseData.channel.category
    };
}
export default connect(mapStateToProps, {fetchLocalData,fetchSportsData,fetchBusinessData})(CategoryFlatList)