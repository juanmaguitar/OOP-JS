function handleResponse(response) {
  console.log(JSON.stringify(response));
}

function handleError(error) {
  console.log(error.message);
}

module.exports = { handleResponse, handleError }