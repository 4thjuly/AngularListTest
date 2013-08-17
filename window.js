document.addEventListener('DOMContentLoaded', function () {
    // Do something
    console.log("DOM Content Loaded");  
});

function ListController($scope) {
    $scope.list = [
        {name:'Item One'},
        {name:'Item Two'},
        {name:'Item Three'}
    ];
 
  $scope.refresh = function() {
      // TODO Refresh something
      console.log("Refresh");
      $scope.list.push({name:'Another'});
  };
 
}