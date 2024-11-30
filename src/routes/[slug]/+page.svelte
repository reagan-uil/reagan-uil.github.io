<script>
  import { marked } from 'marked';
  import About from '$lib/components/About.svelte';
  import Header from '$lib/components/Header.svelte';
  import Teacher from '$lib/components/Teacher.svelte';

  let { data } = $props();
</script>

<Header name={data.name} />
<div class="container">
  <Teacher {...data.teacher} />
  <About>
    <!--get to use markdown!-->
    {@html marked(data.content)}
  </About>
</div>
