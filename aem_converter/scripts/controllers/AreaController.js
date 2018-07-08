app.controller("AreaController", ['$scope', 'areaConverterFactory', function ($scope, areaConverterFactory) {

    //define units
    $scope.units = areaConverterFactory.units;

    //set default units
    $scope.unit = $scope.units[0];
    $scope.unit2 = $scope.units[0];

    //convert method
    $scope.convert = () => {

        let input = $scope.input1;

        // If input is not present do not show any result
        if (input == "" || input == undefined || input == null) {
            $scope.result = "";
        }

        $scope.inputIsGiven = () => {
            if (input != null) {
                return true;
            } else {
                return false;
            }
        };

        // check input here
        let result = areaConverterFactory.checkInput($scope, input);

        // Show result only if input is given
        if (input != null) {
            $scope.resultStart = input1.value + " " + select1.value + " = ";
            $scope.result = result;
        }

    };

}]);