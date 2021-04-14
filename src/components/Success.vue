<template>
  <div class="min-h-screen bg-white p-4 flex items-center">
    <!-- Success -->
    <div
      class="bg-green-50 p-4 rounded flex items-start text-green-600 my-4 shadow-lg max-w-xl mx-auto">
      <div class="text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current w-5 pt-1"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
          />
        </svg>
      </div>
      <div class="px-3">
        <h3 class="text-green-800 font-semibold tracking-wider">Success</h3>
        <p class="py-2 text-green-700">
          Operation Successes.
        </p>
        <div class="space-x-6">
          <button 
            class="text-green-900 font-semibold tracking-wider hover:underline focus:outline-none">
            X
          </button>
        </div>
      </div>
    </div>
    <!-- Link on the right -->
  </div>
</template>