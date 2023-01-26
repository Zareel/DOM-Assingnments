//*Topic - Form, Value, Submit
//todo Tadk - To search a topic in the MDN search bar. First add a text to search in the search bar and then hit the submit search to search the docs using DOM

let search_bar = (document.querySelector("#top-nav-search-input").value =
  "css selectors");
let submit_form = document.querySelector("#top-nav-search-form");
submit_form.submit();
