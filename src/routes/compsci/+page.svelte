<script>
	import About from '../../lib/components/About.svelte';
	import Teacher from '../../lib/components/Teacher.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<main>
	<Header name="UIL Computer Science" />
	<div class="container">
		<Teacher name="Mr. Hall" email="dhall2" room="IND321" />
		<About>
			<p>
				We do multiple-choice computer science questions in Java and code
				solutions to problems.
			</p>
			<p>
				Besides UIL, we also prepare students for USACO and other competitive
				programming contests.
			</p>
			<p>
				For more, see <a
					href="https://www.uiltexas.org/academics/stem/computer-science"
					target="_blank">Computer Science.</a
				>
			</p>
		</About>
	</div>
</main>
