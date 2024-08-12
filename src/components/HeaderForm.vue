<template>
  <header class="bg-black shadow-md w-full h-24 px-6 flex items-center justify-between">
    <div class="text-white text-2xl font-nicolo">Logo</div>
    <div class="flex items-center space-x-8 font-nicolo">
          <nav class="text-white space-x-6 hidden md:flex">
        <a v-for="(item, index) in navLinks" :key="index" :href="item.href" class="hover:text-blue-500">
          {{ item.text }}
        </a>
      </nav>
      <LanguageDropdown />
      <img :src="phoneImageSrc" alt="phone" class="hidden md:block" />
      <div class="relative w-[140px] h-[40px] bg-white rounded-lg  items-center justify-center hidden md:block">
      <a href="#" class="text-black hover:underline text-center block mt-2">Կապ մեզ հետ</a>
    </div>
      <button class="md:hidden text-white p-2" @click="toggleNav">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <div :class="['fixed inset-0 bg-black bg-opacity-75 z-50 transition-transform duration-300', { 'translate-x-0': isNavOpen, '-translate-x-full': !isNavOpen }]">
      <div class="flex flex-col items-center py-8 space-y-6">
        <button class="text-white text-3xl absolute top-4 right-4" @click="toggleNav">
          &times;
        </button>
        <nav class="text-white space-y-6">
          <a v-for="(item, index) in navLinks" :key="index" :href="item.href" class="hover:text-blue-500 block text-center">
            {{ item.text }}
          </a>
        </nav>
        <a href="#" class="text-white block text-center mt-1">Կապ մեզ հետ</a>

        <img :src="phoneImageSrc" alt="phone" class="w-8 h-8" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import LanguageDropdown from './LanguageDropdown.vue';
import phoneImageSrc from '../picture/Vector.svg';

const navLinks = [
  { href: '#', text: 'Ծառայություններ' },
  { href: '#', text: 'Մեր Մասին' },
  { href: '#', text: 'Պորտֆոլիո' },
  { href: '#', text: 'Ռեսուրսներ' },
  { href: '#', text: 'Բլոգ' },
  { href: '#', text: 'Կապ' }
];

const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};
</script>

<style scoped>
@media (max-width: 767px) {
  .mobile-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    background-color: #000;
    color: #fff;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .mobile-menu.open {
    transform: translateX(0);
  }

  .mobile-menu .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
