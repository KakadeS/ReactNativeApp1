import React, { Component } from "react";
import { FlatList, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
const BannerWidth = 100;
const BannerHeight = 80;

class DrawerView extends Component {
  render() {
  //  const data = mydata.drawer.drawerItem.splice(0, 15);
    return (
      <FlatList
        data={this.props.apiDrawerData}
        renderItem={({ item: rowData }) => {
          return ( 
            <TouchableOpacity onPress={() => {
              switch(rowData.title){
                case 'Local':
                return(Actions.categoryListLocal({selectedCategory:rowData.title,keyData:this.props.localResponseData}));
                case 'Sports':
                return(Actions.categoryListSports({selectedCategory:rowData.title,keyData:this.props.sportsResponseData}));
                case 'Business':
                return(Actions.categoryListBusiness({selectedCategory:rowData.title,keyData:this.props.businessResponseData}));
                }}}>
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
  //alert(JSON.stringify(apiDrawerData))
    return {
     apiDrawerData : state.apiDrawerData.channel.item,
     //localResponseData : state.localResponseData.channel.item,
     //businessResponseData : state.businessResponseData.channel.item,
    // sportsResponseData : state.sportsResponseData.channel.item
    };
}

export default connect(mapStateToProps) (DrawerView);
