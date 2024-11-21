<script>
  import About from '../../lib/components/About.svelte';
  import Teacher from '../../lib/components/Teacher.svelte';
  import Header from '../../lib/components/Header.svelte';
</script>

<main class="prose m-auto">
  <Header name="UIL Ready Writing" />
  <div class="container">
    <Teacher name="Mrs. Newberg" email="gnewbe" room="KY128" />
    <About>
      <p>
        Ready Writing builds students’ skills and helps refine writing abilities
        through writing expository compositions, which explain, prove or explore
        a topic in a balanced way, allowing the argument and the evidence given
        to be the deciding factor in the paper.
      </p>
    </About>
  </div>
</main>
