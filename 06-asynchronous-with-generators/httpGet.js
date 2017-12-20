function httpGet(url, callback) {
  var httpReq = new XMLHttpRequest();

  httpReq.onreadystatechange = function() {
    var data;
    
    if (httpReq.readyState == 4 && httpReq.status == 200) {
      data = JSON.parse(httpReq.responseText);
      callback(data);
    } else {
    throw new Error(httpReq.statusText);
  }
  };

  httpReq.open("GET", url, true);
  httpReq.send();
}