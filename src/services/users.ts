/* eslint-disable no-param-reassign */
import type { Users } from '../types/entities.js';

import usersStaticJSON from '../../data/usersid.json' assert { type: 'json' };

const usersStaticData: Users = usersStaticJSON;

export function getUsers() {
	console.log('getUsers');


	// usersStaticData = displayName="User"&furigana="ユーザ"&birthday="00000000"

	return usersStaticData;
}
