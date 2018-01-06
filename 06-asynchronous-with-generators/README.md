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

Another option to run generators is using a function that will manage the calls to the `next` methods of the iterators once we have values _yielded_

There are some libraries that do this, for example the [`co`](https://github.com/tj/co) library

[Example](https://jsfiddle.net/juanma/k2t8youa/) 

```javascript
function getAsyncRandomNumber( secondsDelay, cb ) {
  setTimeout( () => {
    const random = Math.floor( Math.random()*10 )	    	
    cb(random)
  }, secondsDelay*1000)
}

function getRandomNumber( secondsDelay ) {
  return new Promise( resolve => getAsyncRandomNumber(secondsDelay, resolve) ) 
}

const INITIAL_DELAY = 3

co( function *() {
    const randomNumber1 = yield getRandomNumber(INITIAL_DELAY)
    console.log(`After ${INITIAL_DELAY}s we got number ${randomNumber1}`)
    const randomNumber2 = yield getRandomNumber(randomNumber1)
    console.log(`After ${randomNumber1}s we got number ${randomNumber2}`)
    const randomNumber3 = yield getRandomNumber(randomNumber2)
    console.log(`[LAST] After ${randomNumber2}s we got number ${randomNumber3}`)
})
```


# Run the demo

## Example1
To run the demo just load `example1/index.html` in the browser. 
You can try different usernames of github that have gists avaliable (for example → `juanmaguitar`)

## Example2

To run the demo just load `example2/index.html` in the browser. 
You'll see several executions of async operations in order