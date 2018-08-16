import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, ScrollView, WebView } from 'react-native';
import Carousel from 'react-native-carousel-view';
import HTML from 'react-native-render-html';
import KhaleejCategoryName from './KhaleejCategoryName';
import { CommonDate } from './common';
import { connect } from 'react-redux';
import { fetchLocalData } from '../actions/fetchLocalData';
import { fetchSportsData } from '../actions/fetchSportsData';
import { fetchBusinessData } from '../actions/fetchBusinessData';
import { fetchTopNews } from '../actions/fetchTopNews';
import { BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { reducer } from '../reducers/todoListRedux'


const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height;


class SubCategoryDetailsPage extends Component {
 static navigationOptions = {
   // title: 'DetailScreen',
    headerTitle: ('DetailScreen'),
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
  componentDidMount() {
    this.props.fetchLocalData();
    this.props.fetchSportsData();
    this.props.fetchBusinessData();
    this.props.fetchTopNews();
  }

  renderPage(item, index) {
    var today = new Date();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday"];
    var todaysDay = weekDays[today.getDay()];
    const today1 = today.toString();
    const currentYear = today1.substring(10, 15);
    const currentMonth = today1.substring(4, 10);
    return (
      <View key={index}>
        <ScrollView>
          <View
            style={{
              flex: 1
            }}
          >
            <View
              style={{
                width: BannerWidth,
                height: 200,
              }}
            >
              <Image
                style={{
                  flex: 1
                }}
                source={{ uri: item.enclosure[0].$.url }}
              />
            </View>
            <View>
              <Text numberOfLines={2}
                style={{
                  fontSize: 18,
                  color: 'black',
                  marginLeft: 6,
                  marginTop: 7,
                  fontWeight: 'bold'
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  color: '#1e90ff',
                  fontSize: 14,
                  marginLeft: 6,
                  fontWeight: 'bold'
                }}
              >
                {"" + todaysDay + "," + " "
                  + currentMonth + "," + currentYear}
              </Text>
            </View>
            <View style={{
              marginTop: 5,
              flex: 1
            }}>
              <Text>{item.content}</Text> 
              {/* <ScrollView style={{ flex: 1 }}>
                <HTML html={item.content} imagesMaxWidth={Dimensions.get('window').width} />
              </ScrollView> */}
              {/* <WebView
         html={item.content}
           //item.content}
          style={{
            height: BannerHeight*3.5
          }}
        /> */}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  render() {
    let data = [];
    //this.props.navigation.state.params.categoryNameTitle
    switch (this.props.navigation.state.params.categoryNameTitle) {
      case 'Local':
        data = this.props.apiLocalResponseData.localResponseData;
        break;
      case 'Sports':
        data = this.props.apiSportsResponseData.sportsResponseData;
        break;
      case 'Business':
        data = this.props.apiBusinessResponseData.businessResponseData;
        break;
      case 'TopNews':
        data = this.props.topNews;
       // alert(JSON.stringify(data))
        break;
      default:
        return false;
    }

    return (
      <View style={{
        flex: 1
      }}>
        <View style={styles.container}>
          <CommonDate />
          <KhaleejCategoryName categoryName={this.props.navigation.state.params.categoryNameTitle} />
          <Carousel
            width={BannerWidth}
            height={BannerHeight}
            delay={20000}
            initialPage={this.props.indexItem}
            hideIndicators={true}>
            {data.map((item, index) => this.renderPage(item, index))}
          </Carousel>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  labelStyle: {
    color: 'black',
    fontSize: 20,
    marginTop: 180,
    backgroundColor: 'rgba(255,255,255, 0.7)',
    fontWeight: 'bold'
  },
  labelStyle1: {
    color: '#1e90ff',
    fontSize: 14,
    marginTop: 3,
    backgroundColor: 'rgba(255,255,255, 0.7)',
    fontWeight: 'bold'
  },
});


const mapStateToProps = state => {
  return {
    apiDrawerData: state.apiDrawerData.channel.item,
    apiLocalResponseData: state.localResponseData,
    apiSportsResponseData: state.sportsResponseData,
    apiBusinessResponseData: state.businessResponseData,
    topNews: state.topNewsData.topNews,
    todos: state.todos,
    //isLoading : state.isLoading
    //category : state.apiResponseData.channel.category
  };
}


const mapDispatchToProps = dispatch => ({
  updateTime: () => dispatch(actionCreators.add("item"))
})



export default connect(mapStateToProps, { fetchLocalData, fetchSportsData, fetchBusinessData, fetchTopNews })(SubCategoryDetailsPage)