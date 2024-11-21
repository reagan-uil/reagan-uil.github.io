<script>
  import About from '../../lib/components/About.svelte';
  import Teacher from '../../lib/components/Teacher.svelte';
  import Header from '../../lib/components/Header.svelte';
</script>

<main class="prose m-auto">
  <Header name="UIL Journalism" />
  <div class="container">
    <Teacher name="Mrs. Perez" email="eperez7" room="HI126" />
    <About>
      <p>
        This page actually has a couple of contests together, but they're pretty
        similar in competition style and idea. Many of these include being given
        a series of resources and having to write a paper about them, whether
        that might be an editorial or a news flash. There's also a few other
        competitions. Ready Writing is a 2-hour long contest where one is given
        two quotes and has to write an essay based on one. Copy Editing is
        another, which is about properly editing a document for any grammatical
        errors and related things.
      </p>
      <ul>
        <li>Ready Writing:</li>
        <ul>
          <li>2 hours</li>
          <li>Write a detailed essay regarding one of two quotes</li>
        </ul>

        <li>Copy Editing:</li>
        <ul>
          <li>15 minutes</li>
          <li>
            Carefully proofread and edit writing to make a piece crystal clear
          </li>
        </ul>

        <li>Editorial Writing:</li>
        <ul>
          <li>45 minutes</li>
          <li>Write a stylistic piece to defend a side in an argument</li>
        </ul>

        <li>Feature Writing:</li>
        <ul>
          <li>60 minutes</li>
          <li>Write a piece that descriptively portrays an event</li>
        </ul>

        <li>News Writing:</li>
        <ul>
          <li>45 minutes</li>
          <li>
            Write a piece that captures an event from a news flash, using a
            combination of quotes and higher-level lead writing
          </li>
        </ul>

        <li>Headline Writing:</li>
        <ul>
          <li>30 minutes</li>
          <li>
            Write a bold headline to accurately describe a series of different
            reports
          </li>
        </ul>

        <li>
          All contests are graded by a panel of judges, with no relative point
          scoring system
        </li>
      </ul>
      <h4>Resources</h4>
      <ul>
        <li>
          <a
            href="https://www.uiltexas.org/files/academics/journalism/Copy_editing_21-22b.pdf"
            target="_blank">Copy Editing PPT</a
          >
        </li>
        <li>
          <a
            href="https://www.uiltexas.org/files/academics/journalism/Editorial2021.pdf"
            target="_blank">Editorial Writing PPT</a
          >
        </li>
        <li>
          <a
            href="https://www.uiltexas.org/files/academics/journalism/feature_2021.pdf"
            target="_blank">Feature Writing PPT</a
          >
        </li>
        <li>
          <a
            href="https://www.uiltexas.org/files/academics/journalism/2021head.ppt"
            target="_blank">Headling Writing PPT</a
          >
        </li>
        <li>
          <a
            href="https://www.uiltexas.org/files/academics/journalism/2021_Newswritingedit.pdf"
            target="_blank">News Writing PPT</a
          >
        </li>
        <li>
          <a
            href="https://www.uiltexas.org/files/academics/4A-ready_writing_state_champ_06.pdf"
            target="_blank">2016 4A State Champion Ready Writing Essay</a
          >
        </li>
      </ul>
    </About>
  </div>
</main>
