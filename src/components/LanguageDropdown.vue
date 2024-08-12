<template>
  <div class="relative">
    <button
      @click="toggleMenu"
      class="flex items-center text-white font-nicolo text-lg font-bold cursor-pointer hover:text-gray-300"
    >
      {{ selectedLanguage }}
      <svg
        class="w-4 h-4 ml-2 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        :class="{'rotate-180': isMenuOpen}"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    <div
      v-if="isMenuOpen"
      class="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg z-50"
    >
      <a
        v-for="lang in languages"
        :key="lang.code"
        @click="selectLanguage(lang)"
        class="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
      >
        {{ lang.name }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMenuOpen = ref(false);
const selectedLanguage = ref('ՀԱՅ');
const languages = [
  { code: 'hy', name: 'Հայերեն' },
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const selectLanguage = (language) => {
  selectedLanguage.value = language.name;
  isMenuOpen.value = false;
};

const handleClickOutside = (event) => {
  const button = document.querySelector('button');
  const menu = document.querySelector('div[role="menu"]');
  if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.svg-icon {
  transition: transform 0.3s;
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>
