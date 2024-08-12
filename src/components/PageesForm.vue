 <template>
  <section class="relative bg-[#070C10] w-full py-12 px-6 md:px-16 lg:px-24">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="relative flex flex-col items-center w-full h-[559px] p-4 text-white overflow-hidden group">
        <img src="../picture/earthDark.png" alt="earth" class="absolute inset-0 object-cover rounded-lg"/>
        <img src="../picture/Rectanglebg.png" alt="earth" class="image-mobile absolute inset-0 object-cover opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 z-0"/>
        <img src="../picture/earthBlu.png" alt="earth" class="image-center absolute inset-0 object-cover opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 z-10"/>
        <div class="absolute inset-0 flex flex-col gap-1 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 mt-12">
          <a href="#" class="text-[20px] font-roboto font-normal leading-[18px] text-white">Call Center</a>
          <a href="#" class="text-[20px] font-roboto font-normal leading-[18px] text-white">CRM</a>
          <a href="#" class="text-[20px] font-roboto font-normal leading-[18px] text-white">ERP</a>
        </div>
        <div class="relative flex flex-col items-start w-full mb-4 mt-[220px] z-20">
          <!-- <p class="text-base md:text-lg lg:text-xl font-bold leading-tight font-nicolo text-left">ԱՎՏՈՄԱՏԱՑՈՒՄ</p> -->
          <router-link to="/automation" class="text-item text-[20px] font-nicolo font-normal leading-[18px] text-white">ԱՎՏՈՄԱՏԱՑՈՒՄ</router-link>

          <div class="w-[300px] h-[3px] bg-[#41B663] rounded-t-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
        <div class="relative flex flex-col items-center w-full h-[559px] p-4 text-white overflow-hidden group">
        <img src="../picture/earthDark.png" alt="earth" class="absolute inset-0 object-cover rounded-lg"/>
        <img src="../picture/Rectanglebg.png" alt="earth" class="image-mobile absolute inset-0 object-cover opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 z-0"/>
        <img src="../picture/earthBlu.png" alt="earth" class="image-center absolute inset-0 object-cover opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 z-10"/>
        <div class="relative flex flex-col items-start w-full mb-4 mt-[220px] z-20">
          <!-- <p class="text-base md:text-lg lg:text-xl font-bold leading-tight font-nicolo text-left">ԹՎԱՅԻՆ ՄԱՐՔԵՏԻՆԳ</p> -->
          <router-link to="/digital-marketing" class="text-item text-[20px] font-nicolo font-normal leading-[18px] text-white">ԹՎԱՅԻՆ ՄԱՐՔԵՏԻՆԳ</router-link>

          <div class="w-[300px] h-[3px] bg-[#41B663] rounded-t-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <div class="relative flex flex-col items-center w-full h-[559px] p-4 text-white overflow-hidden group">
        <img src="../picture/earthDark.png" alt="earth" class="absolute inset-0 object-cover rounded-lg"/>
        <img src="../picture/Rectanglebg.png" alt="earth" class="image-mobile absolute inset-0 object-cover opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 z-0"/>
        <img src="../picture/earthBlu.png" alt="earth" class="image-center absolute inset-0 object-cover opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 z-10"/>
        <div class="relative flex flex-col items-start w-full mb-4 mt-[220px] z-20">
          <!-- <p class="text-base md:text-lg lg:text-xl font-bold leading-tight font-nicolo text-left">ԱՎԱՆԴԱԿԱՆ ՄԱՐՔԵՏԻՆԳ</p> -->
          <router-link to="/advanced-marketing" class="text-item text-[20px] font-nicolo font-normal leading-[18px] text-white">ԱՎԱՆԴԱԿԱՆ ՄԱՐՔԵՏԻՆԳ</router-link>

          <div class="w-[300px] h-[3px] bg-[#41B663] rounded-t-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <div class="relative flex flex-col items-center w-full h-[559px] p-4 text-white overflow-hidden group">
        <img src="../picture/earthDark.png" alt="earth" class="absolute inset-0 object-cover rounded-lg"/>
        <img src="../picture/Rectanglebg.png" alt="earth" class="image-mobile absolute inset-0 object-cover opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 z-0"/>
        <img src="../picture/earthBlu.png" alt="earth" class="image-center absolute inset-0 object-cover opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 z-10"/>
        <div class="relative flex flex-col items-start w-full mb-4 mt-[220px] z-20">
          <!-- <p class="text-base md:text-lg lg:text-xl font-bold leading-tight font-nicolo text-left">ԱՎԱՆԴԱԿԱՆ ՄԱՐՔԵՏԻՆԳ</p> -->
          <router-link to="/additional-page" class="text-item text-[20px]  font-normal leading-[18px] text-white font-nicolo">ԾՐԱԳՐԱՎՈՐՈՒՄ</router-link>

          <div class="w-[300px] h-[3px] bg-[#41B663] rounded-t-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  @media (max-width: 768px) {
    .image-center {
      max-width: 240px;
      width: 100%;
      height: auto;
      position: absolute;
      top: 22%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
