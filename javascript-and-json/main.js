var arrayBook = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('arrayBook: ', arrayBook);
console.log('type of arrayBook: ', typeof arrayBook);

var arrayBookJSON = JSON.stringify(arrayBook);
console.log('arrayBookJSON: ', arrayBookJSON);
console.log('type of arrayBookJSON: ', typeof arrayBookJSON);

var arrayStudentJSON = '[{"id":1,"name":"Christine Tina Park"}]';
console.log('arrayStudentJSON: ', arrayStudentJSON);
console.log('arrayStudentJSON: ', typeof arrayStudentJSON);

var arrayStudentParse = JSON.parse(arrayStudentJSON);
console.log('arrayStudentParse: ', arrayStudentParse);
console.log('arrayStudentParse: ', typeof arrayStudentParse);
