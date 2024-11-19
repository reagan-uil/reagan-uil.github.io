<script>
	import About from '../../lib/components/About.svelte';
	import Teacher from '../../lib/components/Teacher.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<main class="prose m-auto">
	<Header name="UIL Literary Criticism" />
	<div class="container">
		<Teacher
			name="Mr. DiPiazza"
			email="pdipia"
			room="FA101"
			time="Tuesdays 4:30 to 5:30"
		/>
		<About>
			<p>
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
			</ul>
		</About>
	</div>
</main>
