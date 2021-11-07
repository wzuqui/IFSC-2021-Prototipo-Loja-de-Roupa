function activeSnackbar(alert) {
  var snackbar = document.getElementById("snackbar");
  snackbar.innerHTML = alert;
  snackbar.className = "show";
  setTimeout(() => {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}
