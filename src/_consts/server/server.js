export let localServerURI;
if (process.env.NODE_ENV !== "production") {
  localServerURI = "http://localhost:8080";
} else {
  localServerURI = "http://tagada.com";
}
