function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate 4 line poems  and separate each line with a <br>. Make sure to use user instruction. Add SheCodes AI as a <strong> element AT THE END of the poem";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let apiKey = "80oc158tb64caae306c6eb4bf7cef14f";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
