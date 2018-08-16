import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
// import Carousel from 'react-native-carousel-view';
import Carousel from 'react-native-banner-carousel';
import { connect } from 'react-redux';
import { fetchTopNews } from '../actions/fetchTopNews';
import { Actions } from 'react-native-router-flux';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
//var saveDataNews = new Array();
class RNCarousel extends Component {

    constructor() {
      super();
    global.saveDataNews = new Array();
        this.state = {
            list: []
        };
    }
  componentWillMount() {
    this.props.fetchTopNews()
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
        <View>
          {/* <TouchableOpacity style={{
          flex: 1
        }} onPress={() =>  this.setState({list:item})}>
          <Text>{'save'}</Text>
          </TouchableOpacity>      */}
        <TouchableOpacity style={{
          flex: 1
        }} onPress={() => this.props.navigate("subCategoryDetails", { categoryNameTitle: "TopNews", indexItem: index })}>
          <View
            style={{
              flex: 1
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: BannerWidth,
                height: BannerHeight,
              }}
            >
              <Image
                style={{
                  flex: 1
                }}
                source={{ uri: item.enclosure[0].$.url }}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(255,255,255, 0.7)',
                marginTop: 180
              }}
            >
              <Text numberOfLines={2}
                style={{
                  fontSize: 18,
                  color: 'black',
                  marginLeft: 6,
                  marginTop: 7,
                  fontWeight: 'bold'
                }}
              >
                {item.title[0]}
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
          </View>
        </TouchableOpacity>
        </View>
      </View>

    );
  }
  render() {
    saveDataNews.push(this.state.list);
    // alert("length"+JSON.stringify(saveDataNews.length));
    return (

      <View style={styles.container}>
        {this.props.topNewsData &&
          <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}>
            {this.props.topNewsData.map((item, index) => this.renderPage(item, index))}
          </Carousel>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginTop: 10,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
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
    topNewsData: state.topNewsData.topNews
  };
}
export default connect(mapStateToProps, { fetchTopNews })(RNCarousel)