import React, {useState} from "react";
import { Button, View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const options = [
    'Follow Basic Recipes',
    'Follow Any Recipe',
    'Add/Subtract From Any Recipe with Some Success',
    'Prepare Most Packaged Foods',
    'Cook Without A Recipe',
];


const CustomButton = ({ title, onPress, isChecked }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {isChecked && (
            <Ionicons
                name='checkbox'
                size={24}
                color='white'
                style = {styles.checkbox}
            />
            )}
            <Text style ={styles.buttonText}> {title} </Text>
        </TouchableOpacity>
    );
};
const StartAssesment = () => {
    // [isChecked, setIsChecked] = useState(false);
    const [selectedButton, setSelectedButton] = useState([]);

    const handleButtonPress = (index) => {
       // setSelectedButton(index==selectedButton ? null : index);
       const newSelectedButtons = [...selectedButton]; //copy of selected buttons array

       const indexInSelected = newSelectedButtons.indexOf(index); //check if button is already selected

       if (indexInSelected !== -1) {
        newSelectedButtons.splice(indexInSelected, 1);
       }
       else {
        newSelectedButtons.push(index);
       }

       setSelectedButton(newSelectedButtons);
    };

    return (
        <View style={styles.container}>
            <Text>You Can... (Choose All That Apply)</Text>
            {options.map((option, index) => ( 
                <CustomButton 
                    key={index}
                    title={option}
                    onPress={() => handleButtonPress(index)}
                    isChecked={selectedButton.includes(index)}
                />
             ))}
        </View>

    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightsalmon',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: '10%',
        paddingHorizontal: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        textDecorationLine: 'none', //underline for button text
        marginLeft: 10,
    },
    checkbox: {
        marginLeft: -5,
    },

});

export default StartAssesment; 
