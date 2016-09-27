export class MainController {
  $http;
  <%_ if(filters.socketio) { -%>
  socket;<% } %>
  awesomeThings = [];
  <%_ if(filters.models) { -%>
  newThing = '';<% } %>

  /*@ngInject*/
  constructor($http<% if(filters.socketio) { %>, $scope, socket<% } %>) {
    this.$http = $http;
    <%_ if(filters.socketio) { -%>
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });<% } %>
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;<% if (filters.socketio) { %>
      this.socket.syncUpdates('thing', this.awesomeThings);<% } %>
    });
  }<% if (filters.models) { %>

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }<% } %>
}
