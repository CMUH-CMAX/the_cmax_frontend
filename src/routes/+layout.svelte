<script>
	import Header from './Header.svelte';
	import './styles.css';
	// set maximum window size to 800x600
	const app_onload = ( el ) => {
		el.addEventListener( 'load', () => {
			// set window size
			let width = 400,
					height = 800;
			let isBrowser = matchMedia("(display-mode: browser)").matches;
			if (!isBrowser) {
					window.moveTo(16, 16);
					window.resizeTo(width, height);
			}
		});
	}
</script>

<svelte:head>
	<!-- Google fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap" rel="stylesheet">
	<!-- Google fonts end -->
	<title>CMAX 中醫地圖</title>
	<link rel="manifest" href="/manifest.json">
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="application-name" content="CMAX 中醫地圖">
	<meta name="apple-mobile-web-app-title" content="CMAX 中醫地圖">
	<meta name="msapplication-starturl" content="/">
	<link rel="icon" type="image/png" sizes="128x128" href="/CMAX_logo-128.png">
	<link rel="apple-touch-icon" type="image/png" sizes="128x128" href="/CMAX_logo-128.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/CMAX_logo-16.png">
	<link rel="apple-touch-icon" type="image/png" sizes="16x16" href="/CMAX_logo-16.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/CMAX_logo-32.png">
	<link rel="apple-touch-icon" type="image/png" sizes="32x32" href="/CMAX_logo-32.png">
	<link rel="icon" type="image/png" sizes="64x64" href="/CMAX_logo-64.png">
	<link rel="apple-touch-icon" type="image/png" sizes="64x64" href="/CMAX_logo-64.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/CMAX_logo-96.png">
	<link rel="apple-touch-icon" type="image/png" sizes="96x96" href="/CMAX_logo-96.png">
	<link rel="icon" type="image/png" sizes="256x256" href="/CMAX_logo-256.png">
	<link rel="apple-touch-icon" type="image/png" sizes="256x256" href="/CMAX_logo-256.png">
	<link rel="icon" type="image/png" sizes="512x512" href="/CMAX_logo-512.png">
	<link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/CMAX_logo-512.png">
	<link rel="icon" type="image/svg" href="/CMAX_logo.svg">
	<link rel="apple-touch-icon" type="image/svg" href="/CMAX_logo.svg">
</svelte:head>

<div class="app" use:app_onload>
	<Header />

	<main>	
		<slot />
	</main>

	<footer>
		<p>ZoneTwelve Here</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		/* padding: 1rem; */
		width: 100%;
		height:100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		/* background: var(--radial-1); */
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
