function isEmpty() {
  var search = document.querySelector(".search").value;
  if (search.length == "") {
    document.querySelector(".searchError").innerHTML =
      "Please Write Something In..!!";
  }
}
