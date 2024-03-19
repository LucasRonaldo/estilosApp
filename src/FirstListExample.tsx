import React from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Item {
    id: string;
    nome: string;
    idade: string;
    email: string;
}

const dados: Item[] = [
    { id: '1', nome: 'Aparecida', idade: '77', email: 'aparecida@teste.com' }
    ,
    { id: '2', nome: 'silva', idade: '13', email: 'silva@teste.com' },

    { id: '3', nome: 'santos', idade: '56', email: 'santos@teste.com' },
    { id: '4', nome: 'Aparecida', idade: '77', email: 'aparecida@teste.com' }
    ,
    { id: '5', nome: 'silva', idade: '13', email: 'silva@teste.com' },

    { id: '6', nome: 'santos', idade: '56', email: 'santos@teste.com' },
    { id: '7', nome: 'Aparecida', idade: '77', email: 'aparecida@teste.com' }
    ,
    { id: '8', nome: 'silva', idade: '13', email: 'silva@teste.com' },

    { id: '9', nome: 'santos', idade: '56', email: 'santos@teste.com' },
    { id: '10', nome: 'Aparecida', idade: '77', email: 'aparecida@teste.com' }
    ,
    { id: '11', nome: 'silva', idade: '13', email: 'silva@teste.com' },


];


const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={[styles.colorText, styles.textNome]}>{item.nome}</Text>
        <Text style={styles.colorText}>{item.idade}</Text>
        <Text style={styles.colorText}>{item.email}</Text>
    </TouchableOpacity >

)
function FirstListExample(): React.JSX.Element {

    return (

        <View style={styles.container}>
            
                <StatusBar backgroundColor='green' barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.headerText}> Flat List</Text>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dados}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}

                />
            

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/home.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/orders.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/profile.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
            </View>

        </View>



    );






}

const styles = StyleSheet.create({
    container: {

        flex: 1
    },
    item: {
        backgroundColor: 'grey',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    colorText: {
        color: 'white'
    },
    textNome: {
        fontSize: 25
    },
    header: {
        backgroundColor: 'green',
        alignItems: 'center',
        paddingVertical: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    }


})

export default FirstListExample;