import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView,Platform,Linking } from 'react-native';
import KhaleejCategory from './KhaleejCategory';
import RNCarousel from './RNCarousel';
import CategoryImage from './CategoryImage';
import CategoryFlatList from './CategoryFlatList';
import SubCategoryList from './SubCategoryList';
import KhaleejCategoryName from './KhaleejCategoryName';
import Carousel from 'react-native-carousel-view';
import Header from './Header';

class CurrentDate extends Component {
  
componentDidMount() {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.navigate(url);
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (event) => {
    this.navigate(event.url);
  }

  navigate = (url) => {
    const { navigate } = this.props.navigation;
    const route = url.replace(/.*?:\/\//g, '');
    const routeName = route.split('/')[1];
   //alert("routeName="+JSON.stringify(routeName))
    if (routeName === 'subcategorylist') {
       navigate('subCategoryList',{categoryname: 'Local' })
    }
    else{
       navigate('CurrentDate')
    }
  }


  render() {
    var today = new Date();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday"];
    var todaysDay = weekDays[today.getDay()];
    const today1 = today.toString();
    const currentYear = today1.substring(10, 15);
    const currentMonth = today1.substring(4, 10);
   
    return (
        <ScrollView style={{ flex: 1 }}>
         <View style={{ marginBottom: 5, marginLeft: 7 }}>
          <Text style={styles.labelStyle}>{"" + todaysDay + "," + " " + currentMonth + "," + currentYear}</Text>
        </View>
         <KhaleejCategory /> 
        <CategoryImage outerStyle={{ marginTop: 3 }} headerText='Top News' imageUrlPath={require('./images/tab_nation.png')} /> 
     {/* <SampleRn /> */}
        <RNCarousel navigate={this.props.navigation.navigate}/> 
         <CategoryImage outerStyle={{ marginTop: 3 }} headerText='Business' imageUrlPath={require('./images/tab_business.png')} />
        <CategoryFlatList navigate={this.props.navigation.navigate} title='Business'/>
        <CategoryImage outerStyle={{ marginTop: 3 }} headerText='Sports' imageUrlPath={require('./images/tab_citytimes.png')} />
        <CategoryFlatList navigate={this.props.navigation.navigate} title='Sports' /> 
         <CategoryImage outerStyle={{ marginTop: 3 }} headerText='Local' imageUrlPath={require('./images/tab_entertainment.png')} />
       <CategoryFlatList navigate={this.props.navigation.navigate} title='Local' />     
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  labelStyle: {
    color: '#1e90ff',
    fontSize: 14,
    marginTop: 5
  }
});


export default CurrentDate


