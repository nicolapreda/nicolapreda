<script lang="ts">
	import * as config from '$lib/config';
	import logo from '$lib/assets/img/logo.svg';
</script>

<nav class="mx-[5%] md:mx-[20%] mt-5">
	<ul class="flex justify-between">
		<li>
			<a href="/">
				<img src={logo} alt="nik" class="h-20 " />
			</a>
		</li>
		<li class="my-auto uppercase text-2xl font-poppins font-bold">
			<a
				class="text-primary-footer hover:text-primary-hover transition cursor-pointer hover:underline hover:underline-offset-1"
				href="./blog">blog</a
			>
		</li>
	</ul>
</nav>
