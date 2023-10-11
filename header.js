let appHeader = `
<head>
<script src="https://cdn.tailwindcss.com"></script>
</head>

<nav class="flex flex-wrap
w-full p-4 text-lg text-gray-700 justify-end

bg-blue-400 mx-auto">
  <div class="max-w-screen-xl flex flex-wrap items-center m-auto">
      <span class="font-semibold text-xl text-white">Human BenchMarker</span>


  </div>



  <a href="./reactionTimeTest.html"
      class="m-2 hover:no-underline hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Reaction Time</a>
  <a href="./timerGuesser.html"
      class=" m-2 hover:no-underline hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Time Guesser</a>
  <a href="./timerGuesser.html"
      class=" m-2 hover:no-underline hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Log In</a>
  <a href="./timerGuesser.html"
      class=" m-2 hover:no-underline hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Leaderboard</a>

</nav>
`;
document.getElementById("app-header").innerHTML = appHeader;