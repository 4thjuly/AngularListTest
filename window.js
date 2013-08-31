document.addEventListener('DOMContentLoaded', function () {
    // Do something
    console.log("DOM Content Loaded");  
});

function ListController($scope) {
    $scope.list = [
        {friendlyName:'HOMESERVER: 1 : Windows Media Connect', make:'Microsoft', model:'Windows Media Connect', ip:'192.168.1.1'},
        {friendlyName:'HOMESERVER', make:'Hewlett Packard', model:'Windows Home Server', ip:'192.168.1.2'},
        {friendlyName:'Whole House', make:'Logitech', model:'Squeezebox Touch', ip:'192.168.1.3'},
        {friendlyName:'Living Room Camera (192.168.1.164)', make:'TOSHIBA', model:'Wireless Network Camera', ip:'192.168.1.4'},
        {friendlyName:'Logitech Media Server [Homeserver]', make:'Logitech', model:'Logitech Media Server 7.7.2 r33893', ip:'192.168.1.5'}
    ];
 
  $scope.refresh = function() {
      console.log("Refresh");
      $scope.list.push({friendlyName:'Friendly Name', make:'Make', model:'Model', ip:'192.168.1.234'});
  };
 
}