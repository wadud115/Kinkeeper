import React from 'react';

const Banner = () => {
    return (
        <div className='bg-green-500'>
            <section class="bg-blue-50 py-10 md:py-16 px-4 min-h-screen">

  <div class="max-w-6xl mx-auto text-center">

    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
      Friends to keep close in your life
    </h1>

    <p class="text-sm md:text-base text-slate-500 max-w-lg mx-auto mb-8">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>

    <button class="btn bg-[#1d4336] hover:bg-[#153229] text-white border-none px-6 md:px-8 mb-10">
      <span class="text-lg md:text-xl">+</span> Add a Friend
    </button>

    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

      <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm border">
<h2 class="text-2xl md:text-4xl font-bold text-[#244D3F]">10</h2>     
   <p class="text-sm md:text-base text-slate-500">Total Friends</p>
      </div>

      <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm border">
<h2 class="text-2xl md:text-4xl font-bold text-[#244D3F]">3</h2>    
    <p class="text-sm md:text-base text-slate-500">On Track</p>
      </div>

      <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm border">
<h2 class="text-2xl md:text-4xl font-bold text-[#244D3F]">6</h2>     
   <p class="text-sm md:text-base text-slate-500">Need Attention</p>
      </div>

      <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm border">
<h2 class="text-2xl md:text-4xl font-bold text-[#244D3F]">12</h2>     
   <p class="text-sm md:text-base text-slate-500">Interactions This Month</p>
      </div>

    </div>
  </div>
</section>
        </div>
    );
};

export default Banner;