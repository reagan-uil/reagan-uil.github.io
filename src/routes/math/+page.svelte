<script>
	import About from '../../lib/components/About.svelte';
	import Teacher from '../../lib/components/Teacher.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<main>
	<Header name="UIL Mathematics, Number Sense, and Calculator Applications" />
	<div class="container">
		<Teacher
			name="Mrs. Eastwood"
			email="keastw"
			room="TN317"
			time="Tuesdays 4:30 to 5:30"
		/>
		<About>
			<p>
				Mathematics is intended to encourage interest in math, to develop talent
				in problem solving skills and to inspire students to excel in all areas
				of mathematics. It is based on a 60-question multiple choice test.
			</p>
			<p>
				Number Sense emphasizes the mental processes used to achieve
				mathematical calculations with no help from calculators, computers, or
				pen and paper and to develop the use of specific techniques and
				strategies to make mathematical judgments and develop useful strategies
				for handling numbers and operations.
			</p>
			<p>
				Calculator Applications trains students in efficient problem solving
				strategies involving calculations in the areas of engineering, science
				and mathematics.
			</p>
			<p>For more, see:</p>
			<ul>
				<li>
					<a href="https://www.uiltexas.org/academics/stem/mathematics"
						>Mathematics</a
					>
				</li>
				<li>
					<a href="https://www.uiltexas.org/academics/stem/number-sense"
						>Number Sense</a
					>
				</li>
				<li>
					<a
						href="https://www.uiltexas.org/academics/stem/calculator-applications"
						>Calculator Applications</a
					>
				</li>
			</ul>
		</About>
	</div>
</main>
