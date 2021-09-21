let movieData;

const $title = $("#title");
const $year = $("#year");
const $rated = $("#rated");
const $input = $('input[type=text]');

function handleGetData(event) {
  event.preventDefault();

  userInput = $input.val();

  $.ajax({
    url: "https://www.omdbapi.com/?apikey=53aa2cd6&t=" + userInput
  }).then(
    (data) => {
      console.log(data);
      movieData = data;
      render();
    },
    (error) => {
      console.log("Oops something went wrong: ", error);
    }
  );
}

function render() {
  $title.text(movieData.Title);
  $year.text(movieData.Year);
  $rated.text(movieData.Rated);
}

$('form').on('submit', handleGetData);



// const promise = $.ajax({
//   url:'https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
// });

// promise.then(
// (data) => {
//  console.log(data);
// },
// (error) => {
//  console.log('bad request: ', error);
// }
// );