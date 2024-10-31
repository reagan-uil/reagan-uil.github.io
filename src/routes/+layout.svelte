<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>William Liu</title>
</svelte:head>
<div>
	<Navbar {base} />
	<slot></slot>
</div>
