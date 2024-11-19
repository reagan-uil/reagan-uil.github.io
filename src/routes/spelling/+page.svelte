<script>
	import About from '../../lib/components/About.svelte';
	import Teacher from '../../lib/components/Teacher.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<main class="prose m-auto">
	<Header name="UIL Spelling" />
	<div class="container">
		<Teacher name="Mrs. Newberg" email="gnewbe" room="KY128" />
		<About>
			<p>
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
					<li><b>No</b> deduction for getting a question wrong</li>
				</ul>
				<li>
					Part 1 will be 15 minutes of 15 proofreading and 15 vocab questions
				</li>
				<li>
					Part 2 will be 70 writing questions, and Part 3 will be 20 questions
					in similar format (note that neither of these have a set time, so it's
					really dependent on the meet itself
				</li>
			</ul>
		</About>
	</div>
</main>
