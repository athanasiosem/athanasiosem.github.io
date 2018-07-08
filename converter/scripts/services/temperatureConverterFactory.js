app.factory("temperatureConverterFactory", () => {

    var factory = {};

    factory.units = ["Celsius", "Kelvin", "Fahrenheit"];
    
    factory.checkInput = ($scope, input) => {

        let result = null;

        // If first unit is Celsius
        if ($scope.unit === "Celsius" && $scope.unit2 === "Celsius") {
            result = aem_unit_converter.temperature.CelsiusToCelsius(input);
        } else if ($scope.unit === "Celsius" && $scope.unit2 === "Kelvin") {
            result = aem_unit_converter.temperature.CelsiusToKelvin(input);
        } else if ($scope.unit === "Celsius" && $scope.unit2 === "Fahrenheit") {
            result = aem_unit_converter.temperature.CelsiusToFahrenheit(input);
        }

        // If first unit is Kelvin
        else if ($scope.unit === "Kelvin" && $scope.unit2 === "Celsius") {
            result = aem_unit_converter.temperature.KelvinToCelsius(input);
        } else if ($scope.unit === "Kelvin" && $scope.unit2 === "Kelvin") {
            result = aem_unit_converter.temperature.KelvinToKelvin(input);
        } else if ($scope.unit === "Kelvin" && $scope.unit2 === "Fahrenheit") {
            result = aem_unit_converter.temperature.KelvinToFahrenheit(input);
        }

        // If first unit is Fahrenheit
        else if ($scope.unit === "Fahrenheit" && $scope.unit2 === "Celsius") {
            result = aem_unit_converter.temperature.FahrenheitToCelsius(input);
        } else if ($scope.unit === "Fahrenheit" && $scope.unit2 === "Kelvin") {
            result = aem_unit_converter.temperature.FahrenheitToKelvin(input);
        } else if ($scope.unit === "Fahrenheit" && $scope.unit2 === "Fahrenheit") {
            result = aem_unit_converter.temperature.FahrenheitToFahrenheit(input);
        }

        return result;

    };

    return factory;
})