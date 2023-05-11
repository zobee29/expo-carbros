import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import HeaderButtons from 'pages/vehicles/components/header-buttons';
import styles from './style';

const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const DriversList = ({ route, navigation }) => {
    const [openSearch, setOpenSearch] = React.useState(false);
    const [search, setSearch] = React.useState('');

    useEffect(() => {
        navigation.setOptions({
        headerRight: () => (
            <HeaderButtons
            setOpenSearch={setOpenSearch}
            onAdd={() => navigation.navigate("Add Driver")}
            />
        ),
        });
    }, []);

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};

export default DriversList;