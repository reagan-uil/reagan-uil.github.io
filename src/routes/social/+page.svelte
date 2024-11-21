<script>
  import About from '../../lib/components/About.svelte';
  import Teacher from '../../lib/components/Teacher.svelte';
  import Header from '../../lib/components/Header.svelte';
</script>

<main>
  <Header name="UIL Social Studies" />
  <div class="container">
    <Teacher />
    <About>
      <div class="row">
        <p>
          Social Studies consists of an MCQ test and essay, centered around a
          yearly upating theme & reading list (2022 had the Olympics and 2023
          the Great Depression). The MCQ will typically cover questions related
          to the primary reading as well as general social studies term that may
          be recallable from APUSH, and the essay will typically relate to the
          annual theme.
        </p>
        <ul>
          <li>45 Questions + Essay</li>
          <li>90 minutes</li>
          <li>Scoring:</li>
          <ul>
            <li>
              Between +1 and +3 depending on the part the question is in, for a
              right answer
            </li>
            <li>The essay is graded from a scale of 0 to 20</li>
          </ul>
        </ul>
      </div>
    </About>
  </div>
</main>
