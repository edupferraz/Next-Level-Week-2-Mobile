import React, { useState, useEffect } from 'react';

import {View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'

import landingImg from '../../assets/landing.png';
import studyIcon from '../../assets/icons/study.png';

import classesIcon from '../../assets/icons/give-classes.png';
import heartIcon from '../../assets/icons/heart.png';

import styles from "./styles";
;

//{'n'} -> <br/>

function Landing(){

    const { navigate } = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    function handleNavigateToGiveClassesPage(){
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPage(){
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>

            <Text style={styles.title}>
                Seja bem vindo, {'\n'}
                <Text style={styles.titleBold}>
                    O que deseja fazer?
                </Text>
            </Text>
        

            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={handleNavigateToStudyPage} style={[styles.button, styles.buttonPrimary]}>

                    <Image source={studyIcon}/>

                    <Text style={styles.buttonText}>
                        Estudar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>

                    <Image source={classesIcon}/>

                    <Text style={styles.buttonText}>
                        Dar Aulas
                    </Text>
                </TouchableOpacity>
            </View>
        

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>

        </View>
    )
}

export default Landing;