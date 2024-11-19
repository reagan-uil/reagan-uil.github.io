<script>
	import About from '../../lib/components/About.svelte';
	import Teacher from '../../lib/components/Teacher.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<main class="prose m-auto">
	<Header name="UIL Accounting" />
	<div class="container">
		<Teacher />
		<About>
			<p>
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
			</ul>
		</About>
	</div>
</main>
