<script>
	export let base;
</script>

<div id="nav">
	<nav class="navbar">
		<link rel="shortcut icon" type="shortcut icon" href="favicon.ico" />
		<a href="{base}/"
			><img src="reaganlogo.png" alt="Reagan HS Logo" height="20px" /></a
		>
		<a href="{base}/">Home</a>
		<a href="{base}/results">Results</a>
		<a href="{base}/schedule">Schedule</a>
		<div class="dropdown">
			<button class="dropbtn">Contests</button>
			<div class="dropdown-content">
				<a href="{base}/accounting">Accounting</a>
				<a href="{base}/currentevents">Current Events</a>
				<a href="{base}/journalism">Journalism Events</a>
				<a href="{base}/lit">Literary Criticism</a>
				<a href="{base}/poetry">Poetry and Prose Interpretation</a>
				<a href="{base}/readywrite">Ready Writing</a>
				<a href="{base}/social">Social Studies</a>
				<a href="{base}/spelling">Spelling</a>
			</div>
		</div>
		<div class="dropdown">
			<button class="dropbtn">STEM Contests</button>
			<div class="dropdown-content">
				<a href="{base}/math">Mathematics</a>
				<a href="{base}/calculator">Calculator Applications</a>
				<a href="{base}/numbersense">Number Sense</a>
				<a href="{base}/science">Science</a>
				<a href="{base}/compsci">Computer Science</a>
			</div>
		</div>
		<a href="{base}/resources">Resources</a>
	</nav>
</div>