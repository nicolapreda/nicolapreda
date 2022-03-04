    <!-- Header -->
    <header>
        <nav class="container flex items-center py-4 mt-4 sm:mt-12">
          <div class="py-1"><img src="./imgs/logo-bookmark.svg" alt="" /></div>
          <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
            <li class="cursor-pointer">Features</li>
            <li class="cursor-pointer">Pricing</li>
            <li class="cursor-pointer">Contact</li>
            <button type="button" class="bg-bookmark-red text-white rounded-md px-7 py-3 uppercase">Login</button>
          </ul>
          <div class="flex sm:hidden flex-1 justify-end">
            <i class="text-2xl fas fa-bars"></i>
          </div>
        </nav>
    </header>
  
      <!-- Hero -->
      <section class="relative">
        <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <!-- Content -->
          <div class="flex flex-1 flex-col items-center lg:items-start">
            <h2 class="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              A Simple Bookmark Manager
            </h2>
            <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
              A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
              load instantly. Try it for free.
            </p>
            <div class="flex justify-center flex-wrap gap-6">
              <button type="button" class="btn btn-purple hover:bg-bookmark-white hover:text-black">
                Get it on Chrome
              </button>
              <button type="button" class="btn btn-white hover:bg-bookmark-purple hover:text-white">
                Get it on Firefox
              </button>
            </div>
          </div>
          <!-- Image -->
          <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./imgs/hero-bg.png" alt="" />
          </div>
        </div>
        <!-- Rounded Rectangle -->
        <div
          class="
            hidden
            md:block
            overflow-hidden
            bg-bookmark-purple
            rounded-l-full
            absolute
            h-80
            w-2/4
            top-32
            right-0
            lg:
            -bottom-28
            lg:-right-36
          "
        ></div>
      </section>