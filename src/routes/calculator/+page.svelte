<script>
	import About from '../../lib/components/About.svelte';
	import Teacher from '../../lib/components/Teacher.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<main>
	<Header name="UIL Calculator Applications" />
	<div class="container">
		<Teacher
			name="Mrs. Eastwood"
			email="keastw"
			room="TN317"
			time="Tuesdays 4:30 to 5:30"
		/>
		<About>
			<p>
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
			</p>
		</About>
	</div>
</main>
