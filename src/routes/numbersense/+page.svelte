<script>
	import About from '../../lib/components/About.svelte';
	import Teacher from '../../lib/components/Teacher.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<main class="prose m-auto">
	<Header name="UIL Number Sense" />
	<div class="container">
		<Teacher
			name="Mrs. Eastwood"
			email="keastw"
			room="TN317"
			time="Tuesdays 4:30 to 5:30"
		/>
		<About>
			<p>
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
			</ul>
		</About>
	</div>
</main>
