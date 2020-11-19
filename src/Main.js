import React, {useState} from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import {main,} from './styles'

import {TodoInput, TodoCard} from './components';

const Main = () => {

const [list, setlist] = useState([]);

function addTodo(text) {
    const element = {
        id: list.length,
        todo: text,
        isDone:false,
    }
    list
    const newArray = [element, ...list]
    
    console.log(newArray)

    setlist(newArray);
    
}
const renderTodo = ({item}) => <TodoCard data= {item} />

    return (
        <SafeAreaView style={main.container} >
            <View style={main.container}>

                <View style={main.banner}>
                    <Text style={main.todoText}>TODO</Text>
                    <Text style={main.todoCount}>{list.length}</Text>
                </View>  

                <FlatList
                data={list}
                renderItem={renderTodo}
                />

                <TodoInput 
                    onTodoEnter = {todoText => addTodo(todoText)}
                />


            </View>
        </SafeAreaView>
    )
}

export default Main;