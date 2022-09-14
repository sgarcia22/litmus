<template>
    <div class="">
        <h2 class="flex justify-center pt-6">Skill: Software Engineer</h2>
        <div class="flex flex-row items-center justify-center">
        <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-10 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
            <span>Reject</span>
        </button>
        <div
        class="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16"
      >
        <div class="card">
            
          <div class="card-header mx-4 -mt-6">
            <a
              href="https://www.material-tailwind.com"
              blur-shadow-image="true"
            >
              <img
                class="w-auto rounded-lg"
                src="../assets/cv/sam_fake_cv-1.jpg"
                alt="tailwind-card-image"
              />
            </a>
          </div>
          <!-- <div class="card-body">
            <a href="#">
              <h4 class="font-semibold">Material Design 3</h4>
            </a>
            <p class="opcacity-60 mb-4">
              The time is now for it to be okay to be great. People in this
              world shun people for being great. For being a bright color. For
              standing out.
            </p>
            <button class="button button-pink" data-ripple-light="true">
              Read More
            </button>
          </div> -->
        </div>
        </div>
        <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-10 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="rgb(13.729858%, 12.159729%, 12.548828%)" d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
            <span>Accept</span>
        </button>
      </div>
    <!-- <div class="min-h-screen justify-center">
        <img class="w-7/12 " src="../assets/cv/sam_fake_cv-1.jpg" />
        <button>
            Skip
        </button>
    </div> -->
</div>
</template>
<script>
import Vue from 'vue';
import { nftMint } from '~/near/near-interface.js';

export default Vue.extend({
    name: 'Judge',
    methods: {
        accept() {
            // Assume we have the wallet address, needs to be stored in a database
            nftMint(this.$near.wallet)
        },
        reject() {
            // Skip to the next one on the list 
        }
    }
});

</script>