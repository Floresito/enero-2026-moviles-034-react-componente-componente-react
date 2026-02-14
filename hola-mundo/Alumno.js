import { StyleSheet, Text, View, Button } from 'react-native';
 
export default function Alumno(props){
    return(
        <View style={styles.container}>
            <Text>{props.nombre}</Text>
            <Text>{props.matricula}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
        backgroundColor: '#c993f7',
        alignItems: 'center',
        justifyContent: 'center',
        border: '.2vw solid black',
        width: '90%',
        margin: '1vw',
        padding: '1vw',
        borderRadius: '.5vw',
    },
});