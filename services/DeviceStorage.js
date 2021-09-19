import AsyncStorageStatic from "@react-native-async-storage/async-storage";
import React from 'react';

const DeviceStorage = {

    async saveItem (key, value) {
        try {
            await AsyncStorageStatic.setItem(key, value);
        }catch (err) {
            console.error(err);
        }

    }
};

export default DeviceStorage;