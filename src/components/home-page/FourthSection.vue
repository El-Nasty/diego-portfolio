<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div id="home-page-contact-section" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red1 to-red3 border-4 border-red2 rounded-2xl">

        <div class="grid grid-cols-1 lg:grid-cols-3">
            <!-- Contact information -->
            <div class="relative overflow-hidden py-10 px-6 sm:px-10 xl:p-12">

              <h3 class="font-medium text-white text-center lg:text-left">Get in touch</h3>
              <p class="mt-6 text-base max-w-3xl">
                  I’m very approachable and would love to speak to you. Feel free to send me an email.
              </p>
            </div>

            <!-- Contact form -->
            <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 class="font-medium">Send me a message</h3>
              <!-- the long number at end of url is my email that has been disguised -->
              <form action="https://formsubmit.co/0910064910178291d9b9c919bdf78828" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                <div class="sm:col-span-2">
                  <div class="mt-1">
                    <input required type="text" name="name" id="name" placeholder="Name" class="py-3 px-4 block w-full bg-light-grey text-black placeholder:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-md">
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <div class="mt-1">
                    <input required type="email" name="email" id="email" placeholder="Email Address" class="py-3 px-4 block w-full bg-light-grey text-black placeholder:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-md">
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <div class="mt-1">
                    <input type="text" name="subject" id="subject" placeholder="Subject" class="py-3 px-4 block w-full bg-light-grey text-black placeholder:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-md">
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <div class="mt-1">
                    <textarea required id="message" name="message" rows="4" placeholder="Your message" class="py-3 px-4 block w-full bg-light-grey text-black placeholder:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-md" aria-describedby="message-max"></textarea>
                  </div>
                </div>
                
                <input type="hidden" name="_next" value="https://el-nasty.github.io/diego-portfolio/">

                <div class="sm:col-span-2 flex justify-center">
                  <button @submit="test()" type="submit" class="inline-flex justify-center items-center min-w-[11.5%] px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm bg-red1 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                    send message
                  </button>
                </div>
              </form>
            </div>
        </div>

    </div>
</template>
