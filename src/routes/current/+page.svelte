<script>
	import About from '../../lib/components/About.svelte';
	import Teacher from '../../lib/components/Teacher.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<main>
	<Header name="UIL Current Events" />
	<div class="container">
		<Teacher />
		<About>
			<p>
				Current Issues and Events focuses on basic knowledge of current state,
				national and world events/issues through the study of national and
				international online news sites and/or hard copy, daily newspapers,
				specialized periodicals, weekly news magazines, journals of political or
				social nature, and other periodicals that report, summarize or explain
				world events.
			</p>
		</About>
	</div>
</main>
