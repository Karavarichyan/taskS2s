<template>
  <section class="relative bg-[#070C10] w-full py-24 px-6 md:px-16 lg:px-24">
    <div class="flex flex-wrap justify-center gap-4">
       <a
        v-for="(item, index) in links"
        :key="index"
        :href="item.href"
        target="_blank"
        class="w-full sm:w-[260px] h-[175px] bg-[rgba(217,217,217,0.1)] rounded-lg flex items-center justify-center text-center opacity-100 hover:opacity-90 transition-opacity duration-300"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          class="w-[100px] h-[100px] object-contain"
        />
      </a>
    </div>

  </section>
</template>
<script setup>
import FacebookImg from '../picture/facebook.png';
import LinkedInImg from '../picture/linkdin.png';
import HarvardImg from '../picture/har.png';
import appleImg from '../picture/app.png';
import GoogleImg from '../picture/Googl.png';
import HubSpotImg from '../picture/HubSpot.png';

const links = [
  {
    href: "https://www.facebook.com",
    src: FacebookImg,
    alt: "Facebook"
  },
  {
    href: "https://www.linkedin.com",
    src: LinkedInImg,
    alt: "LinkedIn"
  },
  {
    href: "https://www.harvard.edu",
    src: HarvardImg,
    alt: "Harvard"
  },
  {
    href: "https://www.apple.com",
    src: appleImg,
    alt: "Apple"
  },
  {
    href: "https://www.google.com",
    src: GoogleImg,
    alt: "Google"
  },
  {
    href: "https://www.hubspot.com",
    src: HubSpotImg,
    alt: "HubSpot"
  }
];
</script>
