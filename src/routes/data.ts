const Eastwood = {
  name: 'Mrs. Eastwood',
  email: 'keastw',
  room: 'TN317',
  time: 'Tuesdays 4:30 to 5:30',
};
export const posts = [
  {
    path: 'spelling',
    name: 'UIL Spelling',
    teacher: { name: 'Mrs. Newberg', email: 'gnewbe', room: 'KY128' },
    content: `<p>
        Spelling in UIL is not exactly your typical Spelling Bee anymore, rather
        having several twists. The first part of the spelling test has
        proofreading and vocab: identify misspelled words and fill in blanks
        with the proper choice. The other questions, as well as the tiebreaker,
        are like a written spelling bee: hear the word and its definition and
        spell it accordingly. UIL's Word Power changes every year, so make sure
        to find the latest one on the UIL site.
      </p>
      <ul>
        <li>100 questions + 20-question tiebreaker</li>
        <li>About 60 minutes</li>
        <li>Scoring:</li>
        <ul>
          <li>+1 for a correct question</li>
          <li>
            <b>No</b> deduction for getting a question wrong
          </li>
        </ul>
        <li>
          Part 1 will be 15 minutes of 15 proofreading and 15 vocab questions
        </li>
        <li>
          Part 2 will be 70 writing questions, and Part 3 will be 20 questions
          in similar format (note that neither of these have a set time, so it's
          really dependent on the meet itself)
        </li>
      </ul>`,
  },
  {
    path: 'accounting',
    name: 'UIL Accounting',
    content: `<p>
        Although this uses a lot of math, accounting is actually very vocabulary
        focused. With a basic calculator at your aid, competitors answer a
        variety of questions related to concepts like payrolls and checkbook
        balancing.
      </p>
      <ul>
        <li>80 questions</li>
        <li>60 minutes</li>
        <li>Scoring:</li>
        <ul>
          <li>+5 for a right answer</li>
          <li>
            An additional +1 for getting a question marked with an asterisk (*)
            right
          </li>
          <li>
            <b>No</b> deductions for getting a question wrong <i>or</i> not attempting
            it
          </li>
        </ul>
        <li>Competitors may use a four-function calculator</li>
      </ul>`,
  },
  {
    path: 'calculator',
    name: 'UIL Calculator Applications',
    teacher: Eastwood,
    content: `<p>
        As the name might suggest, this competition revolves a lot around
        calculators. Calculator's a competition that basically tests both your
        typing speed and your problem solving skills. Half of the 70 questions
        are Number Crunchers, aka "type equation into calculator and write
        answer", while the other half constitutes of word problems or geometry
        problems to solve with the aid of a calculator.
      </p>
      <ul>
        <li>70 questions</li>
        <li>30 minutes</li>
        <li>35 Number Crunchers</li>
        <li>21 Word Problems (Stated)</li>
        <li>14 Geometry</li>
        <li>Scoring:</li>
        <ul>
          <li>+5 for a right answer</li>
          <li>-2 for a wrong answer</li>
          <li>
            +3 for getting a question marked (SD) correct, but with the wrong #
            of sigfigs
          </li>
          <li>
            -2 for skipping a question (not answering a question before the last
            attempted)
          </li>
        </ul>
        <li>All answers in scientific notation</li>
        <li>Any calculator can be used, as long as...</li>
        <ul>
          <li>It's silent and doesn't require auxiliary power</li>
          <li>There aren't any user modifications</li>
          <li>
            At most two calculators can be used by the contestant at any point
            during the contest
          </li>
          <li>At Reagan, we most commonly use the TI-nspire.</li>
        </ul>
      </ul>
      <p>
        For more, see <a
          href="https://www.uiltexas.org/academics/stem/calculator-applications"
          >Calculator Applications.</a
        >
      </p>`,
  },
  {
    path: 'compsci',
    name: 'UIL Computer Science',
    teacher: { name: 'Mr. Hall', email: 'dhall2', room: 'IND321' },
    content: `<p>
        UIL's Computer Science competition is actually split into two parts. The
        written test is a mostly-MCQ test that assesses a contestant's ability
        to analyze and predict a code's output, alongside testing other general
        techniques such as two's complement, digital expressions, and graph
        theory. Although changing since the competition's introduction, UIL has
        utilized Java as the official language since the 2004 season.
      </p>
      <p>
        The other part is actually a team competition: programming! Although one
        can compete in CS individually and advance to even state, the
        programming section must be a team of 3. These three people work
        together on a single laptop to solve a series of problems within the
        two-hour limit. Each problem has a set point value, which decreases for
        wrong submissions, and typically range from basic printing to the
        equivalent of some USACO Gold & Platinum topics. Like the written,
        programming only allows competitors to use Java.
      </p>
      <h4>Written</h4>
      <ul>
        <li>40 questions</li>
        <li>45 minutes</li>
        <li>38 Multiple-Choice</li>
        <li>2 Free-Resopnse</li>
        <li>Scoring:</li>
        <ul>
          <li>+6 for a right answer</li>
          <li>-2 for a wrong answer</li>
          <li>
            <b>No</b> deductions for not answering a question
          </li>
        </ul>
        <li>Ranges from basic printing to program and OOP analysis</li>
      </ul>
      <h4>Programming</h4>
      <ul>
        <li>12 questions</li>
        <li>2 hours</li>
        <li>
          Base total of 60 points per question, decreasing by 5 for each wrong
          submission
        </li>
        <li>
          Deductions only affect your programming score if you eventually get
          the problem right
        </li>
      </ul>
      <h4>Resources</h4>
      <ul>
        <li>Basics of Java</li>
        <ul>
          <li>
            <a
              href="https://www.codecademy.com/learn/learn-java"
              target="_blank"
              >Codecademy
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/java/default.asp" target="_blank"
              >W3</a
            >
          </li>
          <li>
            <a
              href="https://docs.oracle.com/en/java/javase/17/docs/api/"
              target="_blank"
              >Java Docs
            </a> (not as basic)
          </li>
        </ul>
        <li>Written:</li>
        <ul>
          <li>
            <a
              href="https://www.uiltexas.org/files/academics/UILCS-JavaTopicList2425.pdf"
              target="_blank">UIL's Topic List</a
            >
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/16dFkdxcPZzVAwEaLS_4V10duEsx7VEVwQBfrSzF0saE/edit?usp=sharing"
              target="_blank">Google Docs Review Sheet</a
            >
          </li>
        </ul>
        <li>Programming:</li>
        <ul>
          <li>
            <a href="https://codeforces.com/" target="_blank">Codeforces</a>
          </li>
          <li>
            <a href="http://www.usaco.org/" target="_blank">USACO</a>
          </li>
          <li>
            <a href="http://www.usaco.guide/" target="_blank">USACO Guide</a>
          </li>
        </ul>
      </ul>
      <p>
        For more, see <a
          href="https://www.uiltexas.org/academics/stem/computer-science"
          target="_blank">Computer Science.</a
        >
      </p>`,
  },
  {
    path: 'currentevents',
    name: 'UIL Current Events',
    content: `<p>
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
      </ul>`,
  },
  {
    path: 'journalism',
    name: 'UIL Journalism',
    teacher: { name: 'Mrs. Perez', email: 'eperez7', room: 'HI126' },
    content: `<p>
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
      </ul>`,
  },
  {
    path: 'lit',
    name: 'UIL Literary Criticism',
    teacher: {
      name: 'Mr. DiPiazza',
      email: 'pdipia',
      room: 'FA101',
      time: 'Tuesdays 4:30 to 5:30',
    },
    content: `<p>
        Literary Criticism is about analyzing famous literary works and
        knowledge of literary terms & history. The contest has a section for
        literary terms+history, a section on questions from the annual UIL
        Reading List (Fiction, Poetry, Drama), a section on criticizing, and a
        tiebreaking essay.
      </p>
      <ul>
        <li>65 Questions + Essay</li>
        <li>90 minutes</li>
        <li>Scoring:</li>
        <ul>
          <li>+1 for a correct question in P1</li>
          <li>+2 for a correct question in P2</li>
          <li>+3 for a correct question in P3</li>
          <li>The essay is graded on its own rubric</li>
        </ul>
      </ul>`,
  },
  {
    path: 'math',
    name: 'UIL Mathematics',
    teacher: Eastwood,
    content: `<p>
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
      </p>`,
  },
  {
    path: 'numbersense',
    name: 'UIL Number Sense',
    teacher: Eastwood,
    content: `<p>
        This competition is quite literally the definition of speed. Number
        Sense is a test of quickly solving math problems, and even better you
        don't get to use a calculator, write down work, or change your answers!!
        All calculations have to be done manually, but of course with such a
        daunting contest there's a huge load of tricks to guide competitors
        along the way. Although doing 80 questions in 10 minutes seems very
        daunting, very few people finish all the questions within the time
        limit, and many still place high without it.
      </p>
      <ul>
        <li>80 questions</li>
        <li>10 minutes</li>
        <li>Scoring:</li>
        <ul>
          <li>+5 for a right answer</li>
          <li>-4 for a wrong answer</li>
          <li>
            -4 for skipping a question (not answering a question before the last
            attempted)
          </li>
        </ul>
        <li>
          Only mental math allowed i.e. scratch work or calculators will get you
          DQed
        </li>
        <li>
          Must write all answers with a blue ink pen, and no changing answers (a
          crossed-out answer will be counted as incorrect)
        </li>
      </ul>
      <h4>Resources</h4>
      <ul>
        <li>
          <a
            href="http://bryantheath.com/files/2018/04/Heath_NSTricks_revA.pdf"
            target="_blank">Bryant Heath NS Trick Manual</a
          >
        </li>
        <li>
          <a href="https://www.mathtrainer.io/about" target="_blank"
            >MathTrainer.io</a
          >
        </li>
      </ul>`,
  },
  {
    path: 'poetry',
    name: 'UIL Poetry and Prose Interpretation',
    teacher: { name: 'Mr. Eanes', email: 'beanes', room: 'FA100' },
    content: `Poetry and Prose Interpretation stimulates the student's ability to
        communicate ideas and information to an audience. The student is
        challenged to ascertain and communicate the ideas of an author through a
        literary selection, based on the student's understanding and research.`,
  },
  {
    path: 'social',
    name: 'UIL Social Studies',
    content: `Social Studies consists of an MCQ test and essay, centered around a yearly upating theme & reading list (2022 had the Olympics and 2023
          the Great Depression). The MCQ will typically cover questions related
          to the primary reading as well as general social studies term that may
          be recallable from APUSH, and the essay will typically relate to the
          annual theme.
          
* 45 Questions + Essay
* 90 minutes
* Scoring
    * Between +1 and +3 depending on the part the question is in, for a right answer
    * The essay is graded from a scale of 0 to 20`,
  },
  // I can use markdown!!!! :)
  {
    path: 'science',
    name: 'UIL Science',
    teacher: {
      name: 'Ms. McCormick',
      email: 'emccor',
      room: 'MT405',
      time: 'Thursdays 4:30 to 5:00',
    },
    content: `<p>
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
            href="https://docs.google.com/document/d/1ENO7_rRqqNzExXyGCaOo6ywLHQuBNMViB8sbvwolSlE/edit?usp=sharing"
            target="_blank">AP Bio Notes</a
          >
        </li>
        <li><i>Campbell Biology</i> 12th Edition</li>
      </ul>
      <h5>Chemistry</h5>
      <ul>
        <li>
          <a
            href="https://drive.google.com/drive/folders/1dvqE1xfcRV1PhXg8k5a9BN6T7p7wb-xQ?usp=sharing"
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
            href="https://docs.google.com/document/d/1IsvYwB02x4EAjMSTmVyu3dnjqUAs__-DNp-dBKAFiGw/edit?usp=sharing"
            target="_blank">UIL Physics Notes by Warith Rahman</a
          >
          (created based on the OpenStax books above)
        </li>
      </ul>`,
  }, // Not forced to migrate, Markdown supports inline HTML
  {
    path: 'readywrite',
    name: 'UIL Ready Writing',
    teacher: { name: 'Mrs. Newberg', email: 'gnewbe', room: 'KY128' },
    content: `Ready Writing builds students' skills and helps refine writing abilities
        through writing expository compositions, which explain, prove or explore
        a topic in a balanced way, allowing the argument and the evidence given
        to be the deciding factor in the paper.`,
  },
];
