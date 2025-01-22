import type { endpointsToOperations } from '../pages/api/[...entity].js';
import type { playgroundActions } from '../pages/playground/_actions.js';

export type EndpointsToOperations = typeof endpointsToOperations;
export type Endpoint = keyof EndpointsToOperations;

export type Products = Product[];
export interface Product {
	name: string;
	category: string;
	technology: string;
	id: number;
	description: string;
	price: string;
	discount: string;
}

// export const skills: string[] = [
//   "集中力",
//   "創造性",
//   "習得度",
//   "コミュニケーション能力",
//   "問題解決能力",
// ];

// export interface Achievement {
//   created_at: Date;
//   updated_at: Date;
//   student_name: string;
//   date: string;
// //   teacher: string;
// //   activity: string;
// //   goal: string;
// //   progress: string;
// //   progress_percentage: number;
//   ratings: number[];
//   xp_earned: number;
// //   teacher_comment: string;
//   start_time: number;
//   end_time: number;
//   duration: number;
// }

export type Users = User[];
export interface User {
	id: number;
	name: string;
	avatar: string;
	email: string;
	biography: string;
	position: string;
	country: string;
	status: string;
}


export type PlaygroundAction = (typeof playgroundActions)[number];
