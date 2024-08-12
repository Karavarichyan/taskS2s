<template>
  <form @submit.prevent="submitForm" class="relative z-10 space-y-4 rounded-lg border-[5px] border-[#00C9C9] p-8 box-shadow-custom">
    <h2 class="text-2xl font-bold mb-4 text-white font-nicolo">Ստանալ Առաջարկ</h2>
    <div class="flex flex-col space-y-2 text-white">
     <div class="flex items-center space-x-2">
      <img
        src="../picture/contact/person.png"
        alt=""
        class="w-18 h-15"
      />
      <label for="name" class="font-medium font-nicolo">Անուն Ազգանուն*</label>
    </div>
     <input
      v-model="form.name"
      id="name"
      type="text"
      @input="validateNameInput"
      placeholder="Enter your name"
      class="border-b-4 border-[#00C9C9] bg-transparent rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
    <div class="flex flex-col space-y-2 text-white">
       <div class="flex items-center space-x-2">
      <img
        src="../picture/contact/apartment.png"
        alt=""
        class="w-18 h-15"
      />
      <label for="organization" class="font-medium font-nicolo">Կազմակերպություն*</label>
    </div>
    <input
      v-model="form.organization"
      id="organization"
      type="text"
      required
      class="border-b-4 border-[#00C9C9] bg-transparent rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
    <div class="flex flex-col space-y-2 text-white">
    <div class="flex items-center space-x-2">
      <img
        src="../picture/contact/Frame 3669.png"
        alt=""
        class="w-18 h-15"
      />
      <label for="email" class="font-medium font-nicolo">Էլ. հասցե*</label>
    </div>

    <input
      v-model="form.email"
      id="email"
      type="email"
      placeholder="Enter your @mail"
      required
      class="border-b-4 border-[#00C9C9] bg-transparent rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div class="flex flex-col space-y-2 text-white">
       <div class="flex items-center space-x-2">
      <img
        src="../picture/contact/phone.png"
        alt=""
        class="w-18 h-15"
      />
      <label for="phone" class="font-medium font-nicolo">Հեռախոսահամար*</label>
    </div>
       <input
      v-model="form.phone"
      id="phone"
      type="tel"
      @input="validatePhoneInput"
      placeholder="Enter your phone number"
      class="border-b-4 border-[#00C9C9] bg-transparent rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div class="flex flex-col space-y-2 text-white">
    <div class="flex items-start space-x-2">
      <img
        src="../picture/contact/chat.png"
        alt=""
        class="w-18 h-15"
      />
      <div class="flex flex-col space-y-2 w-full">
        <label for="message" class="font-medium font-nicolo">Հաղորդագրություն*</label>
        <textarea
          v-model="form.message"
          id="message"
          required
          class="border-b-4 border-[#00C9C9] bg-transparent rounded-lg p-2 h-32 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
    </div>
  </div>
    <button
      type="submit"
      class="bg-white text-black p-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      Ստանալ Առաջարկ
    </button>
    <div class="absolute bottom-5 right-4 flex space-x-4 p-4 social-icons">
      <a href="https://www.facebook.com" target="_blank">
        <img src="../picture/wat.png" alt="Facebook" class="ml-4 w-8 h-8" />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <img src="../picture/vib.png" alt="Instagram" class="w-8 h-8" />
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <img src="../picture/tel.png" alt="LinkedIn" class="w-8 h-8" />
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <img src="../picture/mes.png" alt="LinkedIn" class="w-8 h-8" />
      </a>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const form = ref({
  name: '',
  organization: '',
  email: '',
  phone: '',
  message: ''
});

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
    if (response.data.status === 200) {
      console.log('Form submitted successfully:', response.data.message);
      resetForm();
    } else {
      console.error('Error submitting form:', response.data.message);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const resetForm = () => {
  form.value = {
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  };
};
</script>

<style scoped>
.box-shadow-custom {
  box-shadow: 0px 0px 35px 0px #00FFFF;
  filter: drop-shadow(0 35px 35px rgba(0, 0, 0, 0.25));
}

.social-icons {
  display: flex;
  flex-direction: row;
  gap: 10px
}

@media (max-width: 768px) {
  .social-icons {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .w-8 {
    width: 24px;
    height: 24px;
  }
}
</style>
