import type { APIRoute } from 'astro';
import * as operations from '../../services/index.js';

/* Map REST API endpoints to internal operations
  (GETs only for illustration purpose) */
export const endpointsToOperations = {
	products: operations.getProducts,
	users: operations.getUsers,
};

function parseTypeParam(endpoint: string | undefined) {
	// デバッグ: endpointの値をログに出力
	console.log('parseTypeParam: endpoint:', endpoint);

	if (!endpoint || !(endpoint in endpointsToOperations)) {
		console.warn(`parseTypeParam: Invalid endpoint "${endpoint}"`);
		return undefined;
	}
	return endpoint as keyof typeof endpointsToOperations;
}

/* Controllers */
export const GET: APIRoute = ({ params /* , request */ }) => {
	// デバッグ: リクエストされたエンドポイントを出力
	console.log('get: params.entity:', params.entity);

	const operationName = parseTypeParam(params.entity);

	if (!operationName) {
		console.error(`get: Invalid operationName derived from entity "${params.entity}"`);
		return new Response('404', { status: 404 });
	}

	// デバッグ: 実行する関数名を出力
	console.log('get: operationName:', operationName);

	// 実際に対応する関数を呼び出し
	let body;
	try {
		body = endpointsToOperations[operationName]();
		console.log('get: Successfully retrieved data:', body);
	} catch (error) {
		console.error('get: Error while calling operation function:', error);
		return new Response('Internal Server Error', { status: 500 });
	}

	// レスポンスを返す
	return new Response(JSON.stringify(body), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

/* Astro's static build helper, can be removed for SSR mode */
export function getStaticPaths() {
	// デバッグ: 生成する静的パスを出力
	const paths = Object.keys(endpointsToOperations).map((endpoint) => ({
		params: { entity: endpoint },
	}));
	console.log('getStaticPaths: paths:', paths);
	return paths;
}