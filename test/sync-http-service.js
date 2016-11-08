/**
 * Created by austin on 05/11/2016.
 */
var request = require('sync-request');

class SyncHttpService {

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(url) {
    var returnedObj = null;
    var res = request('GET', this.baseUrl + url , { timeout:50000}  );
    if (res.statusCode < 300) {
      returnedObj = JSON.parse(res.getBody('utf8'));
    }

    return returnedObj;
  }

  post(url, obj) {
    var returnedObj = null;
    var res = request('POST', this.baseUrl + url, { json: obj , timeout:50000});
    if (res.statusCode < 300) {
      returnedObj = JSON.parse(res.getBody('utf8'));
    }
    return returnedObj;
  }

  delete (url){
    var res = request('DELETE', this.baseUrl + url,{ timeout:50000});
    return res.statusCode;
  }
}

module.exports = SyncHttpService;