import React, { useState } from 'react';

import {View, ScrollView, TextInput, Text} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

/* Expo - Picker -> Select */


function TeacherList(){

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    
    function hanldeToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible)
    }
    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={hanldeToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF"/>
                    </BorderlessButton>
                )}
            >

                { isFiltersVisible && (

                    <View style={styles.searchForm}>
                        <Text style={styles.label}>
                            Matéria
                        </Text>

                        <TextInput 
                            style={styles.input} 
                            placeholder="Ex: Química" 
                            placeholderTextColor="#c1bccc"
                        />
                    
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>
                                    Dia da Semana
                                </Text>

                                <TextInput 
                                    style={styles.input} 
                                    placeholder="Ex: Segunda-feira"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>
                                    Horário
                                </Text>

                                <TextInput 
                                    style={styles.input} 
                                    placeholder="Ex: 9:00"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                            
                            <RectButton style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>
                                    Filtrar
                                </Text>
                            </RectButton>
                        </View>
                    </View>
                )};
            </PageHeader>

            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </ScrollView>
        </View>

    );
}

export default TeacherList;