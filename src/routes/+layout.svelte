<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>Reagan Academic UIL</title>
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
  <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="/favicon-192x192.png"
  />

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
