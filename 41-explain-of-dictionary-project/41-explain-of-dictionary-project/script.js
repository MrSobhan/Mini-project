const $ = document;

const inputElem = $.querySelector("#inp-word");
const btn = $.querySelector("#search-btn");

const result = $.querySelector(".result");
const word = $.querySelector(".word h3");
const details = $.querySelector(".details");
const word__meaning = $.querySelector(".word-meaning");
const word__example = $.querySelector(".word-example");

btn.addEventListener("click", () => {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputElem.value}`)
    .then((res) => res.json())
    .then((api) => {
      console.log(api);
      result.hidden = false;

      word.innerHTML = api[0].word;
      details.innerHTML = `
        <p>${api[0].meanings[0].partOfSpeech}</p>
        <p>${api[0].phonetic}</p>
    `;
      word__meaning.innerHTML = api[0].meanings[0].definitions[0].definition;

      if (api[0].meanings[1].synonyms[0] != undefined) {
        word__example.hidden = false;
        word__example.innerHTML = api[0].meanings[1].synonyms[0];
      } else {
        word__example.hidden = true;
      }
    })
    .catch((err) => {
      console.log(err);
      result.hidden = true;
    });
});


// ! Sobhan Musazadeh (Mr.Legend) :)) 
// * Code Js
// ? End Code Mini Project