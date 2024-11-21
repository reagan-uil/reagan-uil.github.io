<script>
  import About from '../../lib/components/About.svelte';
  import Teacher from '../../lib/components/Teacher.svelte';
  import Header from '../../lib/components/Header.svelte';
</script>

<main class="prose m-auto">
  <Header name="UIL Current Events" />
  <div class="container">
    <Teacher />
    <About>
      <p>
        Current Events is a test that quizzes students on their knowledge of
        events from approximately the past 12 months. The multiple-choice test
        will ask students to identify aspects of recent news, such as the CEO of
        a company that may have gained popularity within the past months, and
        the essay portion will ask students to synthesize information given to
        them about a recent occurrence, such as the effects of COVID-19 on the
        modern-day economy.
      </p>
      <ul>
        <li>40 questions + essay</li>
        <li>60 minutes combined</li>
        <li>Scoring:</li>
        <ul>
          <li>+1 for a correct MCQ</li>
          <li>
            <b>No</b> deductions for getting a question wrong <i>or</i> not attempting
            it
          </li>
          <li>Essay is graded on a scale from 0 to 10</li>
        </ul>
        <li>
          Note that although individual rankings will aggregate the MCQ and
          essay, team scores will only consider the non-essay portion
        </li>
      </ul>
      <h4>Resources</h4>
      <ul>
        <li>
          <a
            href="https://twitter.com/uilciande?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            >Current Events Twitter</a
          >
        </li>
        <li>
          Recommended Sites and Sources:
          <ul>
            <li>
              <a href="https://www.texastribune.org/" target="_blank"
                >Texas Tribune</a
              >
            </li>
            <li>
              <a href="http://www.mystatesman.com/" target="_blank"
                >Austin American-Statesman
              </a>
            </li>
            <li>
              <a href="https://www.dallasnews.com/" target="_blank"
                >Dallas Morning News
              </a>
            </li>
            <li>
              <a href="http://www.chron.com/" target="_blank"
                >Houston Chronicle</a
              >
            </li>
            <li>
              <a href="https://www.nytimes.com/" target="_blank"
                >New York Times</a
              >
            </li>
            <li>
              <a href="https://www.washingtonpost.com/" target="_blank"
                >Washington Post
              </a>
            </li>
            <li>
              <a href="https://www.usatoday.com/" target="_blank">USA Today</a>
            </li>
            <li>
              <a href="http://www.bbc.com/news" target="_blank">BBC</a>
            </li>
            <li>
              <a href="http://www.pbs.org/newshour/" target="_blank"
                >PBS News Hour</a
              >
            </li>
            <li>
              <a href="http://www.npr.org/" target="_blank"
                >National Public Radio</a
              >
            </li>
            <li>
              <a href="http://www.cnn.com/" target="_blank">CNN</a>
            </li>
            <li>
              <a href="http://www.msnbc.com/" target="_blank">MSNBC</a>
            </li>
            <li>
              <a href="http://www.foxnews.com/" target="_blank">Fox News</a>
            </li>
            <ul></ul>
          </ul>
        </li>
      </ul>
    </About>
  </div>
</main>
