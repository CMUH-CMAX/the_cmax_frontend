export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".well-known/assetlinks.json","CMAX_logo-128.png","CMAX_logo-16.png","CMAX_logo-256.png","CMAX_logo-32.png","CMAX_logo-512.png","CMAX_logo-64.png","CMAX_logo-96.png","CMAX_logo.svg","Stars.svg","favicon.png","iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png","manifest.json","robots.txt","sw.js"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".js":"application/javascript"},
	_: {
		client: {"start":"_app/immutable/entry/start.3da9a01e.js","app":"_app/immutable/entry/app.9590ad2d.js","imports":["_app/immutable/entry/start.3da9a01e.js","_app/immutable/chunks/index.c6096ada.js","_app/immutable/chunks/singletons.ebaa247a.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/entry/app.9590ad2d.js","_app/immutable/chunks/index.c6096ada.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
