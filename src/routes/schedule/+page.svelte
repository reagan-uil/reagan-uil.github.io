<script>
	import Header from '../../lib/components/Header.svelte';
	let headers = ['Competition', 'Date', 'Location'];
	let rows = [
		[
			'TMSCA #3',
			'Saturday 11/2/2024',
			'Roosevelt High School (Math, Number Sense, Calculator, Science only)'
		],
		['TMSCA #6', 'Saturday 12/7/2024', 'Madison High School'],
		['TMSCA #8', 'Saturday 1/25/2025', 'Johnson High School'],
		['MacArthur Invitational', 'Saturday 2/8/2025', 'MacArthur High School'],
		['UIL Districts', '3/28 to 3/29, 2025', 'Reagan High School'],
		['UIL Regionals', '4/25 to 4/26, 2025', 'UTSA'],
		['UIL State', '5/19 to 5/21, 2025', 'UT Austin']
	];
</script>

<main class="prose m-auto">
	<Header name="Team Schedule" />
	<div class="container">
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
	</div>
</main>
