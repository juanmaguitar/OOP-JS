# Asynchronous handling with generators

This example demonstrate the use of [_Generators_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) for handling asynchronous operations such as AJAX requests

Our `dataGenerator` will return a _generator_ that will do several operations stopping and reactivating itself (in every `yield`) once we have a response from the ajax request

```javascript
 function request(url) {
  httpGet(url, function(response) {
    myDataGenerator.next(response);
  });
}

function *dataGenerator() {
  const urlUserGithub = 'https://api.github.com/users/' + userNameInput.value
  const { gists_url } = yield request(urlUserGithub);
  const urlUserGists = gists_url.replace(/\{.*\}/,'')
  var [ { html_url: lastGistUrl } ] = yield request(urlUserGists);
  latestGistLink.innerHTML = latestGistLink.href = lastGistUrl
}

const myDataGenerator = dataGenerator();  

myDataGenerator.next();
```

# Run the demo

To run the demo just load `index.html` in the browser. You can try different usernames of github that have gists avaliable (for example → `juanmaguitar`)