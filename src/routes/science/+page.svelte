<script>
	import About from '../../lib/components/About.svelte';
	import Teacher from '../../lib/components/Teacher.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<main>
	<Header name="UIL Science" />
	<div class="container">
		<Teacher
			name="Ms. McCormick"
			email="emccor"
			room="MT405"
			time="Thursdays 4:30 to 5:00"
		/>
		<About>
			<p>
				Science challenges students in the basic fundamental principles of
				science, promotes learning in biology, chemistry, and physics, fosters a
				sense of enthusiasm about advanced topics and courses in the sciences
				and prepares students for the rigor of college level courses.
			</p>
			<p>Becoming a member of this team also makes you eligible for SNHS.</p>
		</About>
	</div>
</main>
