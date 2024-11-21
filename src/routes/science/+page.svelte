<script>
  import About from '../../lib/components/About.svelte';
  import Teacher from '../../lib/components/Teacher.svelte';
  import Header from '../../lib/components/Header.svelte';
</script>

<main class="prose m-auto">
  <Header name="UIL Science" />
  <div class="container">
    <Teacher
      name="Ms. McCormick"
      email="emccor"
      room="MT405"
      time="Thursdays 4:30 to 5:00"
    />
    <About>
      <p>
        Science is a very vast field, so as you'd expect UIL Science covers a
        lot of things. 20 questions are biology, which cover a variety of
        concepts introduced in AP Biology as well as more "wildcard" questions
        that are less commonly known. The chemistry questions cover a lot of
        material typically from Advanced and AP Chemistry, and apply many of the
        ideas to solve problems from lattice structure to thermodynamic
        favorability. Physics covers practically everything from the AP Physics
        series (1, 2, C Mech, C E&M) and more; this section tests a combination
        of problems from an annually assigned reading, Mechanics and E&M
        problems, and wrapping it up with linearization. As there are three
        different subjects covered, contestants can additionally advance from
        Districts to Regionals to State through an individual topic, placing 1st
        in the competition for one of the aforementioned subjects.
      </p>
      <ul>
        <li>60 questions</li>
        <ul>
          <li>20 Biology</li>
          <li>20 Chemistry</li>
          <li>20 Physics</li>
        </ul>
        <li>120 minutes</li>
        <li>Scoring:</li>
        <ul>
          <li>+6 for a right answer</li>
          <li>-2 for a wrong answer</li>
          <li>
            <b>No</b> deductions for not attempting a question
          </li>
        </ul>
        <li>Scientific calculators are allowed on this test:</li>
        <ul>
          <li>Casio fx-260 Solar II</li>
          <li>Sharp EL-501X</li>
          <li>TI-30Xa</li>
          <li>TI-30 XIIS</li>
        </ul>
      </ul>
      <p>Becoming a member of this team also makes you eligible for SNHS.</p>
      <h4>Resources</h4>
      <h5>Biology</h5>
      <ul>
        <li>
          <a
            href="https://docs.google.com/document/d/1IGtNLeaih5Dkkjaq_052apVOUmgKNyYujydRHWnM_uw/edit?usp=sharing"
            target="_blank">AP Bio Notes</a
          >
        </li>
        <li><i>Campbell Biology</i> 12th Edition</li>
      </ul>
      <h5>Chemistry</h5>
      <ul>
        <li>
          <a
            href="https://drive.google.com/drive/folders/1ZzIzEef6SGjYGkuH6fIBae7dNbiG2R7n?usp=sharing"
            target="_blank">AP Chem Notes</a
          >
        </li>
        <li>
          <a href="https://chem.libretexts.org/Bookshelves"
            >Chemistry LibreTexts</a
          >
        </li>
      </ul>
      <h5>Physics</h5>
      <ul>
        <li>
          OpenStax <a
            href="https://openstax.org/books/college-physics-2e/pages/1-introduction-to-science-and-the-realm-of-physics-physical-quantities-and-units"
            target="_blank"><i>College Physics</i></a
          >
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1MEwJeOkqCpbIS94lG1Nobapq43j62eHWrkVVespq-PU/edit?usp=sharing"
            target="_blank">UIL Physics Notes by Warith Rahman</a
          >
          (created based on the OpenStax books above)
        </li>
      </ul>
    </About>
  </div>
</main>
