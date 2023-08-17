<script lang="ts">
	import * as config from '$lib/config';
	import logo from '$lib/assets/img/logo.svg';
</script>

<nav class="lg:mx-32 mx-5 mt-5">
	<ul class="flex justify-between">
		<li>
			<a href="/">
				<img src={logo} alt="nik" class="h-20" />
			</a>
		</li>
		<li class="my-auto uppercase text-2xl font-briceregular">
			<a
				class="text-primary hover:text-primary-hover transition mr-12 cursor-pointer hover:underline hover:underline-offset-1"
				href="/#dipiu">dipiu'</a
			>
			<a
				class="text-primary hover:text-primary-hover transition cursor-pointer hover:underline hover:underline-offset-1"
				href="./blog">blog</a
			>
		</li>
	</ul>
</nav>
