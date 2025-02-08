/* eslint-disable no-param-reassign */
// import type { Users } from '../types/entities.js';
import { db } from '../utils/firebase-admin.js';;
// import usersStaticJSON from '../../data/usersid.json' assert { type: 'json' };
// import { collection } from 'firebase/firestore';


// const usersStaticData: string = JSON.stringify(usersStaticJSON);

export async function getUsers() {
    console.log('getUsers');

    try {
        const snapshot = await db.collection('Students').get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            return [];
        }

        console.log('success snapshot');

        // IDだけを取得
        const documentIds = snapshot.docs.map(doc => doc.id);
        console.log('documentIds:', documentIds);
        return documentIds;
    } catch (error) {
        console.error('Error fetching document IDs:', error);
        return [];
    }


    // usersStaticData = displayName="User"&furigana="ユーザ"&birthday="00000000"
}
