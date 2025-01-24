/* eslint-disable no-param-reassign */
import type { Users } from '../types/entities.js';
import db from '../utils/firebse.js';
import { initializeApp } from 'firebase-admin/app';
import usersStaticJSON from '../../data/usersid.json' assert { type: 'json' };
import { collection } from 'firebase/firestore';


const usersStaticData: string = JSON.stringify(usersStaticJSON);

export function getUsers() {
	console.log('getUsers');


	// usersStaticData = displayName="User"&furigana="ユーザ"&birthday="00000000"

	return usersStaticData;
}
