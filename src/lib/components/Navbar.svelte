<script>
	export let base;
</script>

<div id="nav">
	<nav class="navbar">
		<link rel="shortcut icon" type="shortcut icon" href="favicon.ico" />
		<a href={base}
			><img src="reaganlogo.png" alt="Reagan HS Logo" height="20px" /></a
		>
		<a href={base}>Home</a>
		<a href="{base}/results">Results</a>
		<div class="dropdown">
			<button class="dropbtn">Contests</button>
			<div class="dropdown-content">
				<a href="{base}/current">Current Events</a>
				<a href="{base}/lit">Literary Criticism</a>
				<a href="{base}/poetry">Poetry Interpretation</a>
				<a href="{base}/readywrite">Ready Writing</a>
				<a href="{base}/social">Social Studies</a>
				<a href="{base}/spelling">Spelling</a>
			</div>
		</div>
		<div class="dropdown">
			<button class="dropbtn">STEM Contests</button>
			<div class="dropdown-content">
				<a href="{base}/math">Math</a>
				<a href="{base}/science">Science</a>
				<a href="{base}/compsci">Computer Science</a>
			</div>
		</div>
		<a href="{base}/journalism">Journalism</a>
		<a href="{base}/resources">Resources</a>
	</nav>
</div>
