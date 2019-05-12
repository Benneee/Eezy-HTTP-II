const http = new EezyHTTP();
const url = 'http://jsonplaceholder.typicode.com/users/';

// A Typical GET Request
http
  .get(url)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// A Typical POST Request
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'johndoe@aol.com'
};

http
  .post(url, data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// A Typical PUT Request
http
  .put(`${url}/2`, data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// A Typical DELETE Request
http
  .delete(`${url}/2`)
  .then(data => console.log(data))
  .catch(err => console.log(err));
