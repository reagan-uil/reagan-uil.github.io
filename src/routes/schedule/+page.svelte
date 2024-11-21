<script>
  import Header from '../../lib/components/Header.svelte';
  let headers = ['Competition', 'Date', 'Location'];
  let rows = [
    [
      'TMSCA #3',
      'Saturday 11/2/2024',
      'Roosevelt High School (Math, Number Sense, Calculator, Science only)',
    ],
    ['TMSCA #6', 'Saturday 12/7/2024', 'Madison High School'],
    ['TMSCA #8', 'Saturday 1/25/2025', 'Johnson High School'],
    ['MacArthur Invitational', 'Saturday 2/8/2025', 'MacArthur High School'],
    ['UIL Districts', '3/28 to 3/29, 2025', 'Reagan High School'],
    ['UIL Regionals', '4/25 to 4/26, 2025', 'UTSA'],
    ['UIL State', '5/19 to 5/21, 2025', 'UT Austin'],
  ];
  let other = [
    ['AMC 10/12 A', 'Wednesday 11/6/2024', 'Hosted by Reagan'],
    ['AMC 10/12 B', 'Tuesday 11/12/2024', 'Hosted by Reagan'],
    ['USACO December', 'TBD', 'online'],
    ['USACO January', 'TBD', 'online'],
    ['USABO Open Round', 'Thursday 2/6/2025', 'online on AoPS'],
    ['AIME I/II', '2/6 and 2/12, 2025', 'hosted by Reagan'],
    ['F=ma', 'Wednesday 2/12/2025', 'TBD'],
    ['USACO Feburary', 'TBD', 'online'],
    ['USACO US Open', 'TBD', 'online'],
    ['USNCO Local Exam', 'TBD', 'TBD'],
    ['USAPhO', 'TBD', 'TBD'],
    ['USAMO/USAJMO', '3/19 to 3/20, 2025', 'Hosted by Reagan'],
    ['USABO Semifinals', 'Thursday 3/27/2025', 'online'],
    ['USNCO National Exam', 'TBD', 'TBD'],
  ];
</script>

<main class="prose m-auto">
  <Header name="Team Schedule" />
  <table>
    <thead>
      <tr>
        {#each headers as header}
          <th>{header}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as row}
        <tr>
          {#each row as cell}
            <td class="tablecell">{cell}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
  <h2>Events not affiliated with UIL/TMSCA</h2>
  <table>
    <thead>
      <tr>
        {#each headers as header}
          <th>{header}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each other as row}
        <tr>
          {#each row as cell}
            <td class="tablecell">{cell}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</main>
