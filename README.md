NodeJS Restful Webservice
=========================

A Restful WebService build with Node.js

## Getting started

Clone the rep
```
git clone git://github.com/emmanuelgautier/node-rest-webservice.git
```

Install packages and start server
```
npm install && node app.js
```

## Documentation

### API

URI                | HTTP Method | Response   | Action
------------------ | ----------- | ---------- | -------------
/authors           | GET         | [{author}] | List the authors
/authors           | POST        | {author}   | Create author
/authors/:id       | GET         | {author}   | Get one author
/authors/:id       | PUT         |            | Update one author
/authors/:id       | DELETE      |            | Delete one author
/authors/:id/books | GET         | [{book}]   | List the author's books
/editors/:id/books | GET         | [{book}]   | List the editor's books
/books             | GET         | [{book}]   | List the books
/books             | POST        | {book}     | Create book
/books/:id         | GET         | {book}     | Get one book
/books/:id         | PUT         |            | Update one book
/books/:id         | DELETE      |            | Delete one book
/editors           | GET         | [{editor}] | List the editors
/editors           | POST        | {editor}   | Create editor
/editors/:id       | GET         | {editor}   | Get one editor
/editors/:id       | PUT         |            | Update one editor
/editors/:id       | DELETE      |            | Delete one editor

### Response Status Code

Code | Message
---- | -------------
200  | Ok
201  | Created
401  | InvalidArgumentError
404  | ResourceNotFoundError
500  | InternalError

## Copyright and license

[GNU GPL version 2](LICENSE).
