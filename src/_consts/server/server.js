export let localServerURI;
if (process.env.NODE_ENV !== "production") {
  localServerURI = "http://localhost:8080";
} else {
  localServerURI = "https://morning-everglades-87292.herokuapp.com";
}
