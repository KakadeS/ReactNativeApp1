import React, { Component } from "react";
import { FlatList, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import KhaleejCategoryName from './KhaleejCategoryName';
import { CommonDate } from './common';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { fetchLocalData } from '../actions/fetchLocalData';
import { fetchSportsData } from '../actions/fetchSportsData';
import { fetchBusinessData } from '../actions/fetchBusinessData';

const BannerWidth = 140;
const BannerHeight = 80;

class FavouriteList extends Component {
  
render() {
    var today = new Date();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday"];
    var todaysDay = weekDays[today.getDay()];
    const today1 = today.toString();
    const currentYear = today1.substring(10, 15);
    const currentMonth = today1.substring(4, 10);
    let data=global.saveDataNews.slice(2,global.saveDataNews.length);
    if(global.saveDataNews.length <= 3 )
        {
            return(
                <View
                  style={{
                    flex: 1,
                  }}
                >
                 <CommonDate />
                 <KhaleejCategoryName categoryName={this.props.navigation.state.routeName} />
                  <Text
                    style={{
                      fontSize: 24,
                      color: 'black',
                      marginLeft: 0,
                      marginTop: 7,
                      fontWeight: 'bold'
                    }}
                  >
                    {'NO NEWS ARE SAVED YET.....'}
                  </Text> 
                  </View>
            )
        }
   else{
    return (
    <View>
      <CommonDate />
      <KhaleejCategoryName categoryName={this.props.navigation.state.routeName} />
      <FlatList   
        data={data}
       renderItem={({item:rowData ,index}) => {
          return (
             <TouchableOpacity onPress={() => this.props.navigation.navigate("subCategoryDetails",{categoryNameTitle:this.props.navigation.state.routeName,indexItem:index})}>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    width: BannerWidth,
                    height: BannerHeight,
                  }}
                >
                  <Image
                    style={{
                      flex: 1,
                      margin: 7
                    }}
                    source={{ uri:null}}
                   //source={{ uri: rowData.enclosure[0].$.url }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <Text numberOfLines={2}
                    style={{
                      fontSize: 16,
                      color: 'black',
                      marginLeft: 0,
                      marginTop: 7,
                    }}
                  >
                    {rowData.title}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#D3D3D3',
                  borderBottomWidth: 1,
                }}
              />
            </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item,index)=> item.title}
      />
</View>
    );
}
}
}

export default FavouriteList;



//export default SubCategoryList;
