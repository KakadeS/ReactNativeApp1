import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Platform,
    Text,
    FlatList,
    Image,
    AsyncStorage,
    AppState
} from 'react-native';
import { addToDoList, deleteToDoList } from '../actions/fetchToDoList';
import CheckBox from 'react-native-checkbox';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
var getAddedItemData;
var arr = [];
var getarraydata = [];
const myArray = '';
const removeItem = '';
var removedItemArray = [];
var newTodolistArray = [];

class TodoListData extends Component {
    constructor() {
        super();
        this.state = {
            itemToAddArray: '',
            todolist: ''
        }
    }


    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {

        if (AppState.currentState == 'background') {
            alert('background mode');
            // this.setState({name:'back'});
        }

        if (AppState.currentState == 'active') {

            // this.activeStateList();
        }
    };

    async activeStateList() {
        //  alert("active");
        let value = await AsyncStorage.getItem('todokey');
        if (value != null) {
            newTodolistArray = await AsyncStorage.getItem('todokey');
            var checkArray = [];
            checkArray = JSON.parse(newTodolistArray);
            // arr.push(this.state.todolist);
            for (var i = 0; i < checkArray.length; i++) {
                arr.push(checkArray[i]);
            }
        }
    }

    async setKey() {
        arr.push(this.state.todolist);
        try {
            await AsyncStorage.setItem('todokey', JSON.stringify(arr));
            this.getKey();
        }
        catch (error) {
            alert("Error setting data" + error);
        }
    }

    async getKey() {
        try {
            myArray = await AsyncStorage.getItem('todokey');
            if (myArray !== null) {
                this.props.addToDoList(JSON.parse(myArray));
            }
        }
        catch (error) {
            alert("Error retrieving data" + error);
        }
    }

    async removeItemValue(key) {
        try {
            removeItem = await AsyncStorage.getItem('todokey');
            removedItemArray = JSON.parse(removeItem);
            removedItemArray.splice(key, 1);
            await AsyncStorage.setItem('todokey', JSON.stringify(removedItemArray));
            this.props.deleteToDoList(removedItemArray);
            // this.getKey();
            return true;
        }
        catch (exception) {
            return false;
        }
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <TextInput
                    placeholder="Enter an Item!"
                    style={styles.TextInputStyle}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => { this.setState({ todolist: text }) }}
                    onEndEditing={() => { this.setKey() }}
                />
                <FlatList
                    //data={this.state.itemToAddArray}
                    data={this.props.reduxFetchToDoListData}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 13,
                                flex: 1,
                                marginRight: 8,
                                height: 50
                            }} >

                                <Text numberOfLines={2} style={{
                                    fontSize: 16,
                                    width: 100,
                                    color: 'black',
                                    marginRight: 25,
                                    fontWeight: 'bold'
                                }} >
                                    {item}
                                </Text>
                                <CheckBox
                                    label='Label'
                                    onChange={(checked) => console.log('I am checked', checked)}
                                />
                                <TouchableOpacity onPress={() => { this.removeItemValue(index) }}>
                                    <Image style={{ width: 25, height: 25, }} source={require('./images/icn_menu_normal.png')} />
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                    keyExtractor={(item, index) => index.toString()}

                />
                {/* } */}
            </View>

        )
        // }
    }
}
const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        // justifyContent: 'center',
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        margin: 10

    },

    TextInputStyle:
    {
        borderWidth: 1,
        borderColor: '#009688',
        width: '100%',
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center',
    },

    button: {

        width: '100%',
        height: 40,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 7,
        marginTop: 12
    },

    TextStyle: {
        color: '#fff',
        textAlign: 'center',
    },

    textViewContainer: {

        textAlignVertical: 'center',
        padding: 10,
        fontSize: 20,
        color: '#000',

    }

});

const mapStateToProps = state => {
   // alert("mapStateToProps=" + JSON.stringify(state.todoResponseData))
    return {
        reduxFetchToDoListData: state.todoResponseData.todoResponseData,
    };

}
export default connect(mapStateToProps, { addToDoList, deleteToDoList })(TodoListData)

