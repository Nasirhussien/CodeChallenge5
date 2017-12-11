app.controller('ForumController', function($http){
    var self = this;
    self.message = 'Welcome to the message board!';    

    self.results= {};
    
    self.get = function () {
            $http.get('/messages').then(function (response) {
                self.results.data = response.data;
                console.log(self.results.data);
            })
        }


  self.submitForum = function(forum) {
    console.log(forum);
    $http.post('/messages', forum).then(function(response){
       console.log('sending new post');
       self.get();
    })
    
}
self.get()
});