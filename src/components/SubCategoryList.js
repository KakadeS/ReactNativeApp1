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


class SubCategoryList extends Component {
  static navigationOptions = {
    title: 'ListScreen',
    //headerTitle: (null),
    headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#2F95D6',
      },
      headerTitleStyle: {
        fontSize: 18,
      },
 headerRight:(null),
     headerLeft: (null),
  };
  componentWillMount() {
    this.props.fetchLocalData();
    this.props.fetchSportsData();
    this.props.fetchBusinessData();
  }

  render() {
    var today = new Date();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday"];
    var todaysDay = weekDays[today.getDay()];
    const today1 = today.toString();
    const currentYear = today1.substring(10, 15);
    const currentMonth = today1.substring(4, 10);
    //var data = require('./topStories.json');
    // const data = mydata.channel.item.splice(0, 15);
   // alert(JSON.stringify(this.props.navigation));
    // var categoryDataKey;

    //  if (this.props.navigation.state.params.categoryname) {
    //    //alert("1");
    //   categoryDataKey = this.props.navigation.state.params.categoryname;
    //   }
    //  else {
        //alert("2")
      categoryDataKey = this.props.navigation.state.routeName; 
      
   //  }
     //alert("category="+categoryDataKey);
    let data = [];
    // switch(this.props.categoryNameTitle){
    switch (categoryDataKey) {
      case 'Local':
        data = this.props.apiLocalResponseData.localResponseData;
        break;
      case 'Sports':
        data = this.props.apiSportsResponseData.sportsResponseData;
        break;
      case 'Business':
        data = this.props.apiBusinessResponseData.businessResponseData;
        break;
      default:
        return false;
    }
    return (
      <View>
        <CommonDate />
        <KhaleejCategoryName categoryName={this.props.navigation.state.routeName} />
        <FlatList
          data={data}
          renderItem={({ item: rowData, index }) => {
            return (
              <TouchableOpacity onPress={() => this.props.navigation.navigate("subCategoryDetails", { categoryNameTitle: this.props.navigation.state.routeName, indexItem: index })}>
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
                        source={{ uri: rowData.enclosure[0].$.url }}
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
                      <Text
                        style={{
                          color: '#1e90ff',
                          fontSize: 10,
                          marginLeft: 0,
                          fontWeight: 'bold'
                        }}
                      >
                        {"" + todaysDay + "," + " "
                          + currentMonth + "," + currentYear}
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
          keyExtractor={(item, index) => item.title}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  // alert(JSON.stringify(state.businessResponseData))
  return {
    apiLocalResponseData: state.localResponseData,
    apiSportsResponseData: state.sportsResponseData,
    apiBusinessResponseData: state.businessResponseData
    //isLoading : state.isLoading
    //category : state.apiResponseData.channel.category
  };
}
export default connect(mapStateToProps, { fetchLocalData, fetchSportsData, fetchBusinessData })(SubCategoryList)



//export default SubCategoryList;
