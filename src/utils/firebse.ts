
/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp} from 'firebase/app';
import type { FirebaseOptions } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
/* eslint-enable import/no-extraneous-dependencies */

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyA-vWJGn_m8PvxXQUy9o8SXDUzUY_2T6GU",
  authDomain: "tenxer-education.firebaseapp.com",
  projectId: "tenxer-education",
  storageBucket: "tenxer-education.firebasestorage.app",
  messagingSenderId: "211660721667",
  appId: "1:211660721667:web:f61c014c1117cf41158836",
  measurementId: "G-TWD7420PNE"
};


// firebase appの初期化
export const app = initializeApp(firebaseConfig);

// テストデータベース
export const db = getFirestore();

// 本番データベース
// export const db = getFirestore(app);

// リファレンス(参照)の取得
