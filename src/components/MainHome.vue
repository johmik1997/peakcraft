<template>
    <section class=" h-[100vh] w-full flex flex-col justify-center">
       
        <!-- Background Image -- h-[100vh] sm:w-auto flex flex-col justify-center items-center  relative>
        <div>
            <img src="../assets/Mountain-Small.png" loading="lazy" width="2880" height="2080" 
                 class="logo absolute -z-10 top-0 left-0 w-full h-full object-cover sm:top-2" style="color: transparent"/>
        </div>-->
        <picture><source media="(max-width: 480px)" srcset="../assets/Mountain-Small.png">
<img alt="" loading="lazy" width="2880" height="202" decoding="async" data-nimg="1" 
class="absolute -z-10 top-0 left-0 lg:-top-24" style="color:transparent" 
src="../assets/Mountain.jpg">
</picture>
      
<div class="px-4 flex flex-col items-center  mb-56 md:w-[80%] md:self-center md:mb-0 md:mt-72 lg:w-1/3 lg:self-start lg:ml-20 lg:mt-24">
<picture>
<source media="(max-width: 1024px)" srcset="../assets/Motto.png">
<img alt="" loading="lazy" width="1106" height="300" decoding="async" data-nimg="1" class="mt-56" style="color:transparent" 
 src="../assets/Motto-Large.png"/>
 </picture>
 <p class="text-center font-poppins font-light px-8 mdd:text-2xl md:mt-8 lg:text-start lg:px-2 lg:text-lg lg:mt-10">Join Hawassa University's vibrant community, where bold ideas spark, teamwork thrives, and we rise together!</p>
 </div>

        <!-- Buttons Section -->
        <div class="flex w-full justify-evenly absolute mb-10 bottom-[10%] md:relative md:bottom-0 md:justify-center md:space-x-10 md:mt-18 lg:justify-start lg:mt-20 lg:px-8  lg:space-x-4">
            <button class="bg-red-800 text-lg text-white font-poppins font-semibold w-fit px-14 py-2 rounded-full md:text-3xl  md:px-20 md:py-5 lg:text-base lg:px-16 lg/:py-2">
                Apply
            </button>
            <button class="bg-transparentborder-white border-2 text-white font-poppins font-semibold w-fit px-10 py-2 rounded-full md:text-3xl  md:px-14 md:py-5 lg:text-base lg:min-w-fit lg:py-2 lg:px-12">
                Learn More
            </button>
        </div>
        <div class="flex w-full h-2 md:mt-32">
  <div class="h-2 w-1/3 bg-orange-700 glowOrange"></div>
  <div class="h-2 w-1/3 bg-orange-400 glowOrange"></div>
  <div class="h-2 w-1/3 bg-blue-800 glowBlue"></div>
</div>


    </section>
</template>
<style scoped>
@media (min-width:700px) {
    .logo{
        background-image: url('../assets/Mountain.jpg');
    }
}

</style>


 <!-- <div class="flex w-full justify-evenly absolute bottom-[10%] mdd:relative mdd:bottom-0 mdd:justify-center mdd:space-x-10 mdd:mt-10 lgd:justify-start lgd:mt-3 lgd:space-x-4">
 <button class="bg-accentRed text-lg text-white font-poppins font-semibold w-fit px-14 py-2 rounded-full mdd:text-3xl  mdd:px-20 mdd:py-5 lgd:text-base lgd:px-16 lgd:py-2">Apply</button>
 <button class="bg-transparen border-white border-2 text-white font-poppins font-semibold w-fit px-10 py-2 rounded-full mdd:text-3xl  mdd:px-14 mdd:py-5 lgd:text-base lgd:min-w-fit lgd:py-2 lgd:px-12">Learn More</button>
</div>
</div> -->