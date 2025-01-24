
/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp} from 'firebase-admin/app';
export GOOGLE_APPLICATION_CREDENTIALS="/Users/kota/Documents/10xer/10Xer-service-account-file.json";
import { getFirestore } from "firebase/firestore";
/* eslint-enable import/no-extraneous-dependencies */



// firebase appの初期化
export const app = initializeApp();

// テストデータベース
export const db = getFirestore();

// 本番データベース
// export const db = getFirestore(app);

// リファレンス(参照)の取得
