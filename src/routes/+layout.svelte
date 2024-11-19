<script>
	import '../app.css';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Reagan Academic UIL</title>
	<link rel="shortcut icon" type="shortcut icon" href="favicon.ico" />
</svelte:head>
<nav class="text-white">
	<ul class="flex flex-wrap bg-black">
		<li><a class="p-2" href="{base}/">Home</a></li>
		<li><a class="p-2" href="{base}/results">Results</a></li>
		<li><a class="p-2" href="{base}/schedule">Schedule</a></li>
		<li>
			<label class="peer cursor-pointer p-2">
				<input type="radio" name="dropdown" class="hidden" />
				Contests...
			</label>
			<ul class="absolute hidden bg-black peer-has-[:checked]:block">
				<li><a class="p-2" href="{base}/accounting">Accounting</a></li>
				<li><a class="p-2" href="{base}/currentevents">Current Events</a></li>
				<li><a class="p-2" href="{base}/journalism">Journalism Events</a></li>
				<li><a class="p-2" href="{base}/lit">Literary Criticism</a></li>
				<li>
					<a class="p-2" href="{base}/poetry">Poetry and Prose Interpretation</a
					>
				</li>
				<li><a class="p-2" href="{base}/readywrite">Ready Writing</a></li>
				<li><a class="p-2" href="{base}/social">Social Studies</a></li>
				<li><a class="p-2" href="{base}/spelling">Spelling</a></li>
			</ul>
		</li>
		<li>
			<label class="peer cursor-pointer p-2">
				<input type="radio" name="dropdown" class="hidden" />
				STEM Contests...
			</label>
			<ul class="absolute hidden bg-black peer-has-[:checked]:block">
				<li><a class="p-2" href="{base}/math">Mathematics</a></li>
				<li><a class="p-2" href="{base}/calculator">Calculator Apps</a></li>
				<li><a class="p-2" href="{base}/numbersense">Number Sense</a></li>
				<li><a class="p-2" href="{base}/science">Science</a></li>
				<li><a class="p-2" href="{base}/compsci">Computer Science</a></li>
			</ul>
		</li>
		<li><a class="p-2" href="{base}/resources">Resources</a></li>
	</ul>
</nav>
<label class="contents">
	<slot></slot>
	<footer class="text-center">
		<p>
			Contribute to this website at <a
				class="underline"
				href="https://github.com/reagan-uil/reagan-uil.github.io"
				target="_blank">our repo!</a
			>
		</p>
		<p>Built with Svelte</p>
	</footer>
	<input type="radio" name="dropdown" class="hidden" />
	<!-- to hide dropdown -->
</label>
