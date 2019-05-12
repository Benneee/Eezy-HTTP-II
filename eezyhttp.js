/**
 * Eezy-HTTP-II Library
 * Library for making HTTP Requests
 *
 * @version 2.0.0
 *
 * @author Benedict Nkeonye
 * @license MIT
 **/

class EezyHTTP {
  // Make an HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP Post Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        // Never forget to stringify the data being sent!
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make an HTTP Put Request
  // This is not so different from the POST Request, just update the method name and method type
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
        // Since we are not sending any data, we won't have a body
      })
        .then(res => res.json())
        .then(() => resolve('User details deleted'))
        .catch(err => reject(err));
    });
  }
}
