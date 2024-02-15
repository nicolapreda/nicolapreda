<script lang="ts">
	import * as config from '$lib/config';
	import logo from '$lib/assets/img/logo.svg';
    import perlage_logo from '$lib/assets/img/perlage_logo.svg';
</script>

<nav class="mx-[5%] md:mx-[20%] mt-5">
	<ul class="flex justify-center">
		<li class="flex">
			<a href="/" class="m-auto">
				<img src={logo} alt="nik" class="h-20 " />
			</a>

            <div class="mx-5 border border-gray-50 h-full rounded-full">

            </div>
            
            <a href="/perlage">
				<img src={perlage_logo} alt="Perlage" class="h-32 " />
			</a>

		</li>
	</ul>
</nav>


<slot />
