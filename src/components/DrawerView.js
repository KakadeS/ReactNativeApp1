import React, { Component } from "react";
import { FlatList, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchLocalData } from '../actions/fetchLocalData';
import { fetchSportsData } from '../actions/fetchSportsData';
import { fetchBusinessData } from '../actions/fetchBusinessData';
const BannerWidth = 100;
const BannerHeight = 80;

class DrawerView extends Component {
  componentDidMount() {
        this.props.fetchLocalData();
        this.props.fetchSportsData();
        this.props.fetchBusinessData();
    }
  render() {
  //  const data = mydata.drawer.drawerItem.splice(0, 15);
    return (
      <FlatList
        data={this.props.apiDrawerData}
        renderItem={({ item: rowData }) => {
          return ( 
             <TouchableOpacity onPress={() => {
               Actions.categoryListLocal({categoryNameTitle:rowData.title})
             }}  
            
              > 
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      width: 75,
                      height: 50,
                    }}
                  >
                    <Image
                      style={{
                        flex: 1,
                        margin: 7
                      }}
                      source={{ uri: rowData.enclosure.url }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                    }}
                  >
                    <Text numberOfLines={2}
                      style={{
                        fontSize: 14,
                        color: 'black',
                        marginLeft: 0,
                        marginTop: 15,
                        alignSelf: 'center'
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
        keyExtractor={item => item.title}
      />
    );
  }
}
const mapStateToProps = state => {
    return {
        apiDrawerData : state.apiDrawerData.channel.item,
        apiLocalResponseData: state.localResponseData,
        apiSportsResponseData : state.sportsResponseData,
        apiBusinessResponseData : state.businessResponseData,
  //isLoading : state.isLoading
        //category : state.apiResponseData.channel.category
    };
}
export default connect(mapStateToProps, {fetchLocalData,fetchSportsData,fetchBusinessData})(DrawerView)