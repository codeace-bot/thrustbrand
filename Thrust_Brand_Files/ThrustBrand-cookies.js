var user_country;
country_check();
async function country_check() {
  const response = await fetch("https://country.simplesites.workers.dev", {
    cache: "force-cache",
  });
  user_country = await response.json();
  console.log(
    "EU country: " + user_country.EU + " (" + user_country.code + ")"
  );
  if (user_country.EU != false) {
  }
  if (typeof user_country !== "undefined" && user_country.code !== "") {
    if (document.getElementById("country_browser"))
      document.getElementById("country_browser").value = user_country.code;
  }
}
function includeJs(jsFilePath) {
  var js = document.createElement("script");
  js.type = "text/javascript";
  js.async = "true";
  js.src = jsFilePath;
  document.head.appendChild(js);
}
utm_cookie();
function utm_cookie() {
  $cookie_exp = 999;
  if (
    getUrlParameter("utm_campaign") != "" ||
    getUrlParameter("utm_source") != ""
  ) {
    setCookie("utm_campaign", getUrlParameter("utm_campaign"), $cookie_exp);
    setCookie("utm_medium", getUrlParameter("utm_medium"), $cookie_exp);
    setCookie("utm_source", getUrlParameter("utm_source"), $cookie_exp);
    setCookie("utm_term", getUrlParameter("utm_term"), $cookie_exp);
    setCookie("utm_content", getUrlParameter("utm_content"), $cookie_exp);
  }
  if (getUrlParameter("ref") !== "")
    setCookie("ref", getUrlParameter("ref"), 45);
  if (
    document.referrer != "" &&
    document.referrer.includes("brandpush.co") == false &&
    document.referrer.includes("paypal") == false &&
    document.referrer.includes("stripe") == false
  ) {
    setCookie("referrer", document.referrer, $cookie_exp);
  }
  if (getCookie("utm_campaign") !== "")
    console.log("Campaign: " + getCookie("utm_campaign"));
  if (getCookie("utm_medium") !== "")
    console.log("Medium: " + getCookie("utm_medium"));
  if (getCookie("utm_source") !== "")
    console.log("Source: " + getCookie("utm_source"));
  if (getCookie("utm_term") !== "")
    console.log("Term: " + getCookie("utm_term"));
  if (getCookie("utm_content") !== "")
    console.log("Content: " + getCookie("utm_content"));
  if (getCookie("ref") !== "") console.log("Affiliate ID: " + getCookie("ref"));
}
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
if (document.getElementById("utm_campaign"))
  document.getElementById("utm_campaign").value = getCookie("utm_campaign");
if (document.getElementById("utm_medium"))
  document.getElementById("utm_medium").value = getCookie("utm_medium");
if (document.getElementById("utm_source"))
  document.getElementById("utm_source").value = getCookie("utm_source");
if (document.getElementById("utm_term"))
  document.getElementById("utm_term").value = getCookie("utm_term");
if (document.getElementById("utm_content"))
  document.getElementById("utm_content").value = getCookie("utm_content");
if (document.getElementById("ref"))
  document.getElementById("ref").value = getCookie("ref");
if (document.getElementById("referrer"))
  document.getElementById("referrer").value = getCookie("referrer");
window.addEventListener("load", function () {
  var hash = window.location.hash.substr(1);
  switch (hash) {
    case "modal-writing-guidelines":
      if (document.getElementById("footer-writing-guidelines-link")) {
        document.getElementById("footer-writing-guidelines-link").click();
      }
      break;
    case "modal-news-sites":
      if (document.getElementById("footer-news-network-link")) {
        document.getElementById("footer-news-network-link").click();
      }
      break;
  }
});
