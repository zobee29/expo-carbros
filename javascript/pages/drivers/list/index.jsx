import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { DriverService } from 'services';
import HeaderButtons from 'pages/vehicles/components/header-buttons';
import styles from './style';

const DATA = [
    {
        id: '1',
        first_name: 'First Item',
        last_name: 'Last_Name'
    },
    {
        id: '2',
        first_name: 'Second Item',
        last_name: 'Last_Name'
    },
    {
        id: '3',
        first_name: 'Third Item',
        last_name: 'Last_Name'
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
    const [drivers, setDrivers] = React.useState([]);

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

    useEffect(() => {
        DriverService.list().then((drivers) => {
            setDrivers(drivers);
        });
    }, []);

    const getName = (driver) => `${driver.first_name} ${driver.last_name}`;
    

    const renderItem = ({ item }) => (
        <Item title={getName(item)} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    data={drivers}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};

export default DriversList;