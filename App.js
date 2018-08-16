// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */




import React, { Component } from 'react';
import Router from './src/components/Router';
import { Provider } from 'react-redux';
import { Icon } from 'react-native-elements';
import { createStore, applyMiddleware } from 'redux';
import { TabNavigator, StackNavigator, TabBarTop, DrawerNavigator } from 'react-navigation';
import { Scene } from 'react-native-router-flux';
import reducers from './src/reducers';
//import { reducer } from './src/reducers/todoListRedux'
import ReduxThunk from 'redux-thunk';
import FadeInView from './src/components/FadeInView';
import RotateImage from './src/components/RotateImage';

import SubCategoryList from './src/components/SubCategoryList';
import SubCategoryDetailsPage from './src/components/SubCategoryDetailsPage';
import CurrentDate from './src/components/CurrentDate';
import Header from './src/components/Header';
import FavouriteList from './src/components/FavouriteList';
import RNCarousel from './src/components/RNCarousel';
import TwitterButton from './src/components/TwitterButton';
import ImageUpload from './src/components/ImageUpload';
import VideoTest from './src/components/VideoTest';
import { persistor, store } from './src/store';
import DownLoadTask from './src/components/DownLoadTask';
import MapExample from './src/components/MapExample';
import CameraExample from './src/components/CameraExample';
import VideoTest1 from './src/components/VideoTest1';
import TodoListData from './src/components/TodoListData';

import {
  AppState,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  Linking
} from 'react-native';
import PhotoUpload from 'react-native-photo-upload'
export default class App extends Component {

  render() {
    //  const store = createStore(reducers,undefined, applyMiddleware(ReduxThunk));
    //   persistStore(store)
    const MainNavigator = StackNavigator({
      subCategoryDetails: { screen: SubCategoryDetailsPage },
      subCategoryList: { screen: SubCategoryList },
      rnCarousel: { screen: RNCarousel },
      screen: DrawerNavigator({
        Profile: {
          screen: CurrentDate,
          navigationOptions: {
            drawerLabel: "KhaleejTimes",
            drawerIcon: ({ tintColor }) => <ImageUpload/>
          }
        },
        Home: {
          screen: CurrentDate,
          navigationOptions: {
            drawerLabel: "Home",
            drawerIcon: ({ tintColor }) => <Image style={{ width: 25, height: 25 }} source={require('./src/components/images/icn_home.png')} />
          }
        },
        Local: {
          screen: SubCategoryList,
          navigationOptions: {
            drawerLabel: "Local",
            drawerIcon: ({ tintColor }) => <Image style={{ width: 25, height: 25 }} source={require('./src/components/images/icn_local_news.png')} />
          }
        },
        Sports: {
          screen: SubCategoryList,
          navigationOptions: {
            drawerLabel: "Sports",
            drawerIcon: ({ tintColor }) => <Image style={{ width: 25, height: 25 }} source={require('./src/components/images/icn_sports.png')} />
          }
        },
        Business: {
          screen: SubCategoryList,
          navigationOptions: {
            drawerLabel: "Business",
            drawerIcon: ({ tintColor }) => <Image style={{ width: 25, height: 25 }} source={require('./src/components/images/icn_business.png')} />
          }
        },
        Favourite: {
          screen: FavouriteList,
          navigationOptions: {
            drawerLabel: "Favourite",
            drawerIcon: ({ tintColor }) => <Image style={{ width: 25, height: 25 }} source={require('./src/components/images/icn_star_tap.png')} />
          }
        },
        Twitter: {
          screen: TwitterButton,
          navigationOptions: {
            drawerLabel: "Twitter",
            drawerIcon: ({ tintColor }) => <Image style={{ width: 25, height: 25 }} source={require('./src/components/images/icn_star_tap.png')} />
          }
        },
      VideoTest: {
          screen: VideoTest,
          navigationOptions: {
            drawerLabel: "VideoTest",
            drawerIcon: ({ tintColor }) => <Image style={{ width: 25, height: 25 }} source={require('./src/components/images/icn_star_tap.png')} />
          }
        },
         MapExample: {
          screen: MapExample,
          navigationOptions: {
            drawerLabel: "MapExample",
            drawerIcon: ({ tintColor }) => <Image style={{ width: 25, height: 25 }} source={require('./src/components/images/icn_star_tap.png')} />
          }
        },
         DownLoadTask: {
          screen: DownLoadTask,
          navigationOptions: {
            drawerLabel: "DownLoadTask",
            drawerIcon: ({ tintColor }) => <Image style={{ width: 25, height: 25 }} source={require('./src/components/images/icn_star_tap.png')} />
          }
        },
         CameraExample: {
          screen: CameraExample,
          navigationOptions: {
            drawerLabel: "CameraExample",
            drawerIcon: ({ tintColor }) => <Image style={{ width: 25, height: 25 }} source={require('./src/components/images/icn_star_tap.png')} />
          }
        },
      })
    },
      {
        initialRouteName: 'screen',
        navigationOptions: ({ navigation }) => ({
          //title: 'Home',
          headerTitle: (
            <Image style={{
              height: 50, alignItems: 'center', resizeMode: 'contain',
              justifyContent: 'center'
            }} source={require('./src/components/images/logo.png')} />
          ),
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#2F95D6',
          },
          headerTitleStyle: {
            fontSize: 18,
          },
          headerRight: (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => Linking.canOpenURL('https://sharingdemo').then(supported => {
                if (!supported) {
                  alert('Can\'t handle url: ' + 'https://sharingdemo');
                } else {
                  return Linking.openURL('https://sharingdemo');
                }
              }).catch(err => alert('An error occurred' + err))}>
                <Image style={{ width: 25, height: 25, marginRight: 15 }} source={require('./src/components/images/icn_search_normal.png')} />
              </TouchableOpacity>
              <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('./src/components/images/icn_setting_normal.png')} />

            </View>
          ),
          headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
              <Image style={{ width: 25, height: 25, marginLeft: 10 }} source={require('./src/components/images/icn_menu_normal.png')} />
            </TouchableOpacity>
          ),
        })
        // navigationOptions: ({ navigation }) => ({ header: <Header navigation={navigation} /> })
      });
    return (
      //IMAGE ROTATION 
      // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      // <RotateImage />
      // </View>

      //FADE EXAMPLE
      //  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      //   <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
      //     <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      //   </FadeInView>
      // </View>

 
      //APPLICATION
      <Provider store={store}>
          {/* <MainNavigator />   */}
          {/* <VideoTest1 /> */}
          <TodoListData />
        {/* <Router /> */}
      </Provider>
    );
  }
}


