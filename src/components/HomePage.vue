<template>
    <HeaderForm/>

  <section class="relative bg-[#070C10] w-full h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0">
       <img src="../picture/lefthi.png" alt="gradient">
    </div>
    <div class="relative z-10 text-left px-1 md:px-4 lg:px-24">
  <h1 class="text-white font-roboto text-[68px] font-light leading-[95.2px] mb-4">
    <span class="text-green-500 text-[68px] font-light font-roboto">MARKETING AGENCY</span>
    <br />
    ARMENIA’S LEADING DIGITAL
  </h1>
  <h2 class="text-white text-[68px] font-bold leading-[95.2px] font-roboto">
    BRINGS BIG RESULTS THAT
  </h2>
</div>
    <div class="absolute bottom-0 right-0 flex flex-col items-end space-y- p-4">
      <div class="flex flex-col space-y-4">
    <a href="https://www.facebook.com" target="_blank">
      <img src="../picture/ffacebook.png" alt="Facebook" />
    </a>
    <a href="https://www.instagram.com" target="_blank">
      <img src="../picture/Instagram.png" alt="Instagram" />
    </a>
    <a href="https://www.linkedin.com" target="_blank">
      <img src="../picture/LinkedIn.png" alt="LinkedIn" />
    </a>
  </div>
        <img src="../picture/Groupp.png" alt="Person" class="w-3/4 opacity-80" />
    </div>
  </section>
  <PageesForm/>

    <SocialLinksForm/>

  <section class="relative bg-[#070C10] w-full py-24 px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-[30px]">
     <div class="flex-1 text-white flex flex-col justify-center md:pr-12 mb-12 md:mb-0">
  <img
    src="../picture/earthHalf.png"
    alt="earth"
    class="absolute inset-0  object-cover"
  />
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-sky-700 font-grapalat">SEO</h1>
    <p class="text-xl text-green-500 md:text-2xl lg:text-3xl mb-6 font-grapalat">
      SEO արշավներ, որոնք իսկապես աշխատում են
      <br />
      <span class="text-white font-grapalat">Մենք մշտապես հետևում ենք թե ինչպես են փոխվում Google-ի և Yandex-ի ալգորիթմերը և դրան համապատասխան կազմում ենք մեր ռազմավարությունը, որպեսզի մեր հաճախորդի կայքը լինի իր ոլորտի լավագույններից մեկը որոնման արդյունքներում այլ ոչ թե մնա անհայտ Google-ի արդյունքների երկրորդ էջում.</span>
    </p>
</div>
<img
      src="../picture/Rectangle 9.png"
      alt=""
      class="absolute inset-0  object-contain opacity-80"
    />

    <div class="flex flex-col md:flex-row ">
      <div class="flex-1 relative p-6 rounded-lg shadow-lg bg-[url('../picture/Frame36.png')] bg-no-repeat bg-cover">
  <div class="bg-[#d9d9d9]/10 absolute inset-0 rounded-lg backdrop-blur-[105px]"></div>
  <ContaktForm/>
</div>
    </div>
  </section>
  <FooterForm/>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import HeaderForm from './HeaderForm.vue';
import ContaktForm from './ContaktForm.vue';
import FooterForm from './FooterForm.vue';
import SocialLinksForm from './SocialLinksForm.vue';
import PageesForm from './PageesForm.vue';

const phone = ref('');
const validateNameInput = (event) => {
  const input = event.target.value.replace(/[^a-zA-Z\u0600-\u06FF\s]/g, '');
  event.target.value = input;
  form.value.name = input;
};

const validatePhoneInput = (event) => {
  const input = event.target.value.replace(/[^\d\s+]/g, '');
  event.target.value = input;
  form.value.phone = input;
};

const form = ref({
  name: '',
  organization: '',
  email: '',
  phone: '',
  message: ''
});

const submitForm = async () => {
  try {
    const response = await axios.post(
      'https://test-admin.s2s.am/api/sendMessage',
      {
        name: form.value.name,
        company: form.value.organization,
        phone: form.value.phone,
        email: form.value.email,
        message: form.value.message
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        auth: {
          username: 's2s_test_exercise',
          password: 'xE1727}IHxiO'
        }
      }
    );
    console.log('Form submitted successfully:', response.data);

  } catch (error) {
    console.error('Error submitting form:', error);

  }
};
const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

const closeNav = () => {
  isNavOpen.value = false;
};


</script>

<style scoped>
.box-shadow-custom {
  box-shadow: 0px 0px 35px 0px #00FFFF;
  filter: drop-shadow(0 35px 35px rgba(0, 0, 0, 0.25));
}
@media (min-width: 768px) {
  .text-wight-800 {
    color: #e5e7eb;
  }
}
</style>
