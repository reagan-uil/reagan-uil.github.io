<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>Reagan Academic UIL</title>
  <link rel="shortcut icon" type="shortcut icon" href="/favicon.ico" />
</svelte:head>
<div id="__next">
  <Navbar/>
  <main>
    {@render children()}
  </main>
  <footer>
    <p>
      Contribute to this website at <a
        class="underline"
        href="https://github.com/reagan-uil/reagan-uil.github.io"
        target="_blank">our repo!</a
      >
    </p>
    <p>Built with Svelte</p>
  </footer>
</div>
