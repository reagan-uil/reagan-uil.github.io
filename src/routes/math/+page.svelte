<script>
  import About from '../../lib/components/About.svelte';
  import Teacher from '../../lib/components/Teacher.svelte';
  import Header from '../../lib/components/Header.svelte';
</script>

<main>
  <Header name="UIL Mathematics" />
  <div class="container">
    <Teacher
      name="Mrs. Eastwood"
      email="keastw"
      room="TN317"
      time="Tuesdays 4:30 to 5:30"
    />
    <About>
      <p>
        Math in general! If you've seen TMSCA middle school tests, think about
        it as those with like 20 times as many topics. The first few questions
        can be solved easily by anyone who has an understanding of basic Algebra
        I/II, but these questions can quickly advance to AP Calculus BC or AP
        Statistics information. The trick to these is to answer to the best of
        your knowledge, and play to your fore. Freshmen without precalculus have
        beaten seniors to UIL team spots, and sophomores without calculus or
        stats have topped regional rankings. This test has a wide variety of
        problems, and it's up to the competitors to strategize skillfully.
      </p>
      <ul>
        <li>60 questions</li>
        <li>40 minutes</li>
        <li>Scoring:</li>
        <ul>
          <li>+6 for a right answer</li>
          <li>-2 for a wrong answer</li>
          <li>
            <b>No</b> deductions for not answering a question
          </li>
        </ul>
        <li>Ranging from Algebra I/II to BC Calculus and AP Statistics</li>
      </ul>
      <p>
        For more, see <a
          href="https://www.uiltexas.org/academics/stem/mathematics"
          >Mathematics</a
        >
      </p>
    </About>
  </div>
</main>
