<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>Reagan Academic UIL</title>
  <link rel="shortcut icon" type="shortcut icon" href="/favicon.ico" />
  <meta
    name="google-site-verification"
    content="1DNu9e5DGIMB-kTv1OlTyWpkv76NKQ3Lqpp_D_2Y3d8"
  />
</svelte:head>
<div id="__next">
  <Navbar />
  <main>
    {@render children()}
  </main>
</div>
