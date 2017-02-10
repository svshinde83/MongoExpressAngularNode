var Tasks = require('../models/taskModels');

module.exports = function(app) {
    
   app.get('/api/setupTodos', function(req, res) {
       
       // initial data
       var starterTodos = [
           {
               username: 'test',
               todo: 'first task',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'test',
               todo: 'second task',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'test',
               todo: 'third task',
               isDone: false,
               hasAttachment: false
           }
       ];
       Tasks.create(starterTodos, function(err, results) {
           res.send(results);
       }); 
   });
    
}