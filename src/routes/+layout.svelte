<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Reagan Academic UIL</title>
</svelte:head>
<div>
	<Navbar {base} />
	<slot></slot>
</div>
