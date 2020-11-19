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

function doneTodo(todoID){
    const newArray = [...list];
    const todoIndex = newArray.findIndex(item => item.id == todoID)

    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

    setlist(newArray);

}

function removeTodo (todoId){
    const newArray = [...list];
    const todoIndex = list.findIndex(t=> t.id ==todoId);

    newArray.splice(todoIndex,1);
    setlist(newArray);
}

const renderTodo = ({item}) => {
        return(
        <TodoCard 
            data= {item} 
            onDone={()=>doneTodo(item.id)}
            onRemove={() => removeTodo(item.id)}
        />
        )}

    return (
        <SafeAreaView style={main.container} >
            <View style={main.container}>

                <View style={main.banner}>
                    <Text style={main.todoText}>TODO</Text>
                    <Text style={main.todoCount}>{list.filter(t=>t.isDone===false).length}</Text>
                </View>  

                <FlatList
                keyExtractor={(item, index) => index.toString() }
                data={list}
                renderItem={renderTodo}
                ListEmptyComponent= {() => <Text style={main.textEmpty}>Nothing to do...</Text> }
                />

                <TodoInput 
                    onTodoEnter = {todoText => addTodo(todoText)}
                />


            </View>
        </SafeAreaView>
    )
}

export default Main;