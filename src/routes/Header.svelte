<script>
	import { page } from '$app/stores';
	import { Home, MagnifyingGlass, User } from 'svelte-heros-v2';
</script>

<header>
	<nav id="menu">
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="feature-link {$page.url.pathname === '/' ? 'activate' : ''}">
					<div class="navbar-icon">
						<Home variation="solid" size="32" />
					</div>
					<span>首頁</span>
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/search' ? 'page' : undefined}>
				<a href="/search" class="feature-link {$page.url.pathname === '/search' ? 'activate' : ''}">
					<div class="navbar-icon">
						<MagnifyingGlass variation="solid" size="32" />
					</div>
					<span>搜尋</span>
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about" class="feature-link {$page.url.pathname === '/about' ? 'activate' : ''}">
					<div class="navbar-icon">
						<User variation="outline" size="32" />
					</div>
					<span>我的</span>
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	:root {
		--menu-height: 5em;
	}
	#menu {
		/* put the navbar bottom of the screen and place in the center */
		position: fixed;
		bottom: 0;
		left: 0px;
		/* left: 50%; */
		/* transform: translateX(-50%); */
		border-top: 1px solid #DBD6D1;
		width: 100%;
		background: var(--white-f);
	}

	#menu > ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: var(--menu-height);
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
		top: 1rem;
	}

	#menu > ul > li {
		position: relative;
		height: 100%;
		width: calc(100% / 3);
		text-align: center;
	}

	#menu > ul > li > a {
		position: relative;
		font-size: 0.7rem;
		color: var(--black-0);
	}

	.navbar-icon {
		--size: 2rem;

		position: relative;
		left: calc(50% - var(--size)/2);
		width: var(--size);
		height: var(--size);
	}

	a {
		text-decoration: none;
	}

	a.feature-link:hover:not(.activate) > * {
		color: var(--blue-2);
		background: var(--linear-1);

		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	a.activate > * {
		color: var(--blue-4);
		background: var(--linear-1);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
