<script>
	import About from '../../lib/components/About.svelte';
	import Teacher from '../../lib/components/Teacher.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<main>
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
				Literary Criticism challenges students to acquire a thorough knowledge
				of literary history and of critical terms, and encourages development of
				abilities through critically thinking about literary texts.
			</p>
		</About>
	</div>
</main>
