angular.module('app', [])
  .controller("TabController", function ($http) {
    this.tab = 1;
    this.activeTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
    $http.get('http://rs.hankyates.com:3000/content')
      .success(function(response) {
          $.each(response, function(key, value){
            $("#" + value.name).empty().html("<p>" + value.content + "</p");
          });
      });
});
