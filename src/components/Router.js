import React, { Component } from "react";
import { Text } from "react-native";
import { Router, Scene, Drawer, backAndroidHandler } from 'react-native-router-flux';
import Header from './Header';
import { Actions } from 'react-native-router-flux';
import CurrentDate from './CurrentDate';
import KhaleejCategory from './KhaleejCategory';
import RNCarousel from './RNCarousel';
import CategoryImage from './CategoryImage';
import CategoryFlatList from './CategoryFlatList';
import SubCategoryList from './SubCategoryList';
import KhaleejCategoryName from './KhaleejCategoryName';
import SubCategoryDetailsPage from './SubCategoryDetailsPage';
import DrawerView from './DrawerView';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                    <Scene key="rootOne">
                        <Scene
                            key="currentDate"
                            component={CurrentDate}
                            hideNavBar={true}
                            initial
                        />
                        <Scene
                            key="categoryListLocal"
                            hideNavBar={true}
                            component={SubCategoryList}
                        />
                        <Scene
                            key="categoryDetailPage"
                            hideNavBar={true}
                            component={SubCategoryDetailsPage}
                            title="SubCategoryDetailsPage">>
                </Scene>
                    </Scene>
            </Scene>
        </Router>
    );
}


export default RouterComponent;