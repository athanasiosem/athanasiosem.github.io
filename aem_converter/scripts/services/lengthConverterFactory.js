app.factory("lengthConverterFactory", () => {

    var factory = {};

    factory.units = ["Meter", "Kilometer", "Centimeter", "Millimeter", "Micrometer", "Nanometer", "Mile", "Yard",
        "Foot", "Inch", "Light Year"
    ];

    factory.checkInput = ($scope, input) => {

        let result = null;

        // If first unit is Meter
        if ($scope.unit === "Meter" && $scope.unit2 === "Meter") {
            result = aem_unit_converter.length.MeterToMeter(input);
        } else if ($scope.unit === "Meter" && $scope.unit2 === "Kilometer") {
            result = aem_unit_converter.length.MeterToKilometer(input);
        } else if ($scope.unit === "Meter" && $scope.unit2 === "Centimeter") {
            result = aem_unit_converter.length.MeterToCentimeter(input);
        } else if ($scope.unit === "Meter" && $scope.unit2 === "Millimeter") {
            result = aem_unit_converter.length.MeterToMillimeter(input);
        } else if ($scope.unit === "Meter" && $scope.unit2 === "Micrometer") {
            result = aem_unit_converter.length.MeterToMicrometer(input);
        } else if ($scope.unit === "Meter" && $scope.unit2 === "Nanometer") {
            result = aem_unit_converter.length.MeterToNanometer(input);
        } else if ($scope.unit === "Meter" && $scope.unit2 === "Mile") {
            result = aem_unit_converter.length.MeterToMile(input);
        } else if ($scope.unit === "Meter" && $scope.unit2 === "Yard") {
            result = aem_unit_converter.length.MeterToYard(input);
        } else if ($scope.unit === "Meter" && $scope.unit2 === "Foot") {
            result = aem_unit_converter.length.MeterToFoot(input);
        } else if ($scope.unit === "Meter" && $scope.unit2 === "Inch") {
            result = aem_unit_converter.length.MeterToInch(input);
        } else if ($scope.unit === "Meter" && $scope.unit2 === "Light Year") {
            result = aem_unit_converter.length.MeterToLightyear(input);
        }

        // TODO: If first unit is Kilometer
        else if ($scope.unit === "Kilometer" && $scope.unit2 === "Meter") {
            result = aem_unit_converter.length.KilometerToMeter(input);
        } else if ($scope.unit === "Kilometer" && $scope.unit2 === "Kilometer") {
            result = aem_unit_converter.length.KilometerToKilometer(input);
        } else if ($scope.unit === "Kilometer" && $scope.unit2 === "Centimeter") {
            result = aem_unit_converter.length.KilometerToCentimeter(input);
        } else if ($scope.unit === "Kilometer" && $scope.unit2 === "Millimeter") {
            result = aem_unit_converter.length.KilometerToMillimeter(input);
        } else if ($scope.unit === "Kilometer" && $scope.unit2 === "Micrometer") {
            result = aem_unit_converter.length.KilometerToMicrometer(input);
        } else if ($scope.unit === "Kilometer" && $scope.unit2 === "Nanometer") {
            result = aem_unit_converter.length.KilometerToNanometer(input);
        } else if ($scope.unit === "Kilometer" && $scope.unit2 === "Mile") {
            result = aem_unit_converter.length.KilometerToMile(input);
        } else if ($scope.unit === "Kilometer" && $scope.unit2 === "Yard") {
            result = aem_unit_converter.length.KilometerToYard(input);
        } else if ($scope.unit === "Kilometer" && $scope.unit2 === "Foot") {
            result = aem_unit_converter.length.KilometerToFoot(input);
        } else if ($scope.unit === "Kilometer" && $scope.unit2 === "Inch") {
            result = aem_unit_converter.length.KilometerToInch(input);
        } else if ($scope.unit === "Kilometer" && $scope.unit2 === "Light Year") {
            result = aem_unit_converter.length.KilometerToLightyear(input);
        }

        // If first unit is Centimeter
        else if ($scope.unit === "Centimeter" && $scope.unit2 === "Meter") {
            result = aem_unit_converter.length.CentimeterToMeter(input);
        } else if ($scope.unit === "Centimeter" && $scope.unit2 === "Kilometer") {
            result = aem_unit_converter.length.CentimeterToKilometer(input);
        } else if ($scope.unit === "Centimeter" && $scope.unit2 === "Centimeter") {
            result = aem_unit_converter.length.CentimeterToCentimeter(input);
        } else if ($scope.unit === "Centimeter" && $scope.unit2 === "Millimeter") {
            result = aem_unit_converter.length.CentimeterToMillimeter(input);
        } else if ($scope.unit === "Centimeter" && $scope.unit2 === "Micrometer") {
            result = aem_unit_converter.length.CentimeterToMicrometer(input);
        } else if ($scope.unit === "Centimeter" && $scope.unit2 === "Nanometer") {
            result = aem_unit_converter.length.CentimeterToNanometer(input);
        } else if ($scope.unit === "Centimeter" && $scope.unit2 === "Mile") {
            result = aem_unit_converter.length.CentimeterToMile(input);
        } else if ($scope.unit === "Centimeter" && $scope.unit2 === "Yard") {
            result = aem_unit_converter.length.CentimeterToYard(input);
        } else if ($scope.unit === "Centimeter" && $scope.unit2 === "Foot") {
            result = aem_unit_converter.length.CentimeterToFoot(input);
        } else if ($scope.unit === "Centimeter" && $scope.unit2 === "Inch") {
            result = aem_unit_converter.length.CentimeterToInch(input);
        } else if ($scope.unit === "Centimeter" && $scope.unit2 === "Light Year") {
            result = aem_unit_converter.length.CentimeterToLightyear(input);
        }

        // If first unit is Millimeter
        else if ($scope.unit === "Millimeter" && $scope.unit2 === "Meter") {
            result = aem_unit_converter.length.MillimeterToMeter(input);
        } else if ($scope.unit === "Millimeter" && $scope.unit2 === "Kilometer") {
            result = aem_unit_converter.length.MillimeterToKilometer(input);
        } else if ($scope.unit === "Millimeter" && $scope.unit2 === "Centimeter") {
            result = aem_unit_converter.length.MillimeterToCentimeter(input);
        } else if ($scope.unit === "Millimeter" && $scope.unit2 === "Millimeter") {
            result = aem_unit_converter.length.MillimeterToMillimeter(input);
        } else if ($scope.unit === "Millimeter" && $scope.unit2 === "Micrometer") {
            result = aem_unit_converter.length.MillimeterToMicrometer(input);
        } else if ($scope.unit === "Millimeter" && $scope.unit2 === "Nanometer") {
            result = aem_unit_converter.length.MillimeterToNanometer(input);
        } else if ($scope.unit === "Millimeter" && $scope.unit2 === "Mile") {
            result = aem_unit_converter.length.MillimeterToMile(input);
        } else if ($scope.unit === "Millimeter" && $scope.unit2 === "Yard") {
            result = aem_unit_converter.length.MillimeterToYard(input);
        } else if ($scope.unit === "Millimeter" && $scope.unit2 === "Foot") {
            result = aem_unit_converter.length.MillimeterToFoot(input);
        } else if ($scope.unit === "Millimeter" && $scope.unit2 === "Inch") {
            result = aem_unit_converter.length.MillimeterToInch(input);
        } else if ($scope.unit === "Millimeter" && $scope.unit2 === "Light Year") {
            result = aem_unit_converter.length.MillimeterToLightyear(input);
        }

        // If first unit is Micrometer
        else if ($scope.unit === "Micrometer" && $scope.unit2 === "Meter") {
            result = aem_unit_converter.length.MicrometerToMeter(input);
        } else if ($scope.unit === "Micrometer" && $scope.unit2 === "Kilometer") {
            result = aem_unit_converter.length.MicrometerToKilometer(input);
        } else if ($scope.unit === "Micrometer" && $scope.unit2 === "Centimeter") {
            result = aem_unit_converter.length.MicrometerToCentimeter(input);
        } else if ($scope.unit === "Micrometer" && $scope.unit2 === "Millimeter") {
            result = aem_unit_converter.length.MicrometerToMillimeter(input);
        } else if ($scope.unit === "Micrometer" && $scope.unit2 === "Micrometer") {
            result = aem_unit_converter.length.MicrometerToMicrometer(input);
        } else if ($scope.unit === "Micrometer" && $scope.unit2 === "Nanometer") {
            result = aem_unit_converter.length.MicrometerToNanometer(input);
        } else if ($scope.unit === "Micrometer" && $scope.unit2 === "Mile") {
            result = aem_unit_converter.length.MicrometerToMile(input);
        } else if ($scope.unit === "Micrometer" && $scope.unit2 === "Yard") {
            result = aem_unit_converter.length.MicrometerToYard(input);
        } else if ($scope.unit === "Micrometer" && $scope.unit2 === "Foot") {
            result = aem_unit_converter.length.MicrometerToFoot(input);
        } else if ($scope.unit === "Micrometer" && $scope.unit2 === "Inch") {
            result = aem_unit_converter.length.MicrometerToInch(input);
        } else if ($scope.unit === "Micrometer" && $scope.unit2 === "Light Year") {
            result = aem_unit_converter.length.MicrometerToLightyear(input);
        }

        // If first unit is Nanometer
        else if ($scope.unit === "Nanometer" && $scope.unit2 === "Meter") {
            result = aem_unit_converter.length.NanometerToMeter(input);
        } else if ($scope.unit === "Nanometer" && $scope.unit2 === "Kilometer") {
            result = aem_unit_converter.length.NanometerToKilometer(input);
        } else if ($scope.unit === "Nanometer" && $scope.unit2 === "Centimeter") {
            result = aem_unit_converter.length.NanometerToCentimeter(input);
        } else if ($scope.unit === "Nanometer" && $scope.unit2 === "Millimeter") {
            result = aem_unit_converter.length.NanometerToMillimeter(input);
        } else if ($scope.unit === "Nanometer" && $scope.unit2 === "Micrometer") {
            result = aem_unit_converter.length.NanometerToMicrometer(input);
        } else if ($scope.unit === "Nanometer" && $scope.unit2 === "Nanometer") {
            result = aem_unit_converter.length.NanometerToNanometer(input);
        } else if ($scope.unit === "Nanometer" && $scope.unit2 === "Mile") {
            result = aem_unit_converter.length.NanometerToMile(input);
        } else if ($scope.unit === "Nanometer" && $scope.unit2 === "Yard") {
            result = aem_unit_converter.length.NanometerToYard(input);
        } else if ($scope.unit === "Nanometer" && $scope.unit2 === "Foot") {
            result = aem_unit_converter.length.NanometerToFoot(input);
        } else if ($scope.unit === "Nanometer" && $scope.unit2 === "Inch") {
            result = aem_unit_converter.length.NanometerToInch(input);
        } else if ($scope.unit === "Nanometer" && $scope.unit2 === "Light Year") {
            result = aem_unit_converter.length.NanometerToLightyear(input);
        }

        // If first unit is Mile
        else if ($scope.unit === "Mile" && $scope.unit2 === "Meter") {
            result = aem_unit_converter.length.MileToMeter(input);
        } else if ($scope.unit === "Mile" && $scope.unit2 === "Kilometer") {
            result = aem_unit_converter.length.MileToKilometer(input);
        } else if ($scope.unit === "Mile" && $scope.unit2 === "Centimeter") {
            result = aem_unit_converter.length.MileToCentimeter(input);
        } else if ($scope.unit === "Mile" && $scope.unit2 === "Millimeter") {
            result = aem_unit_converter.length.MileToMillimeter(input);
        } else if ($scope.unit === "Mile" && $scope.unit2 === "Micrometer") {
            result = aem_unit_converter.length.MileToMicrometer(input);
        } else if ($scope.unit === "Mile" && $scope.unit2 === "Nanometer") {
            result = aem_unit_converter.length.MileToNanometer(input);
        } else if ($scope.unit === "Mile" && $scope.unit2 === "Mile") {
            result = aem_unit_converter.length.MileToMile(input);
        } else if ($scope.unit === "Mile" && $scope.unit2 === "Yard") {
            result = aem_unit_converter.length.MileToYard(input);
        } else if ($scope.unit === "Mile" && $scope.unit2 === "Foot") {
            result = aem_unit_converter.length.MileToFoot(input);
        } else if ($scope.unit === "Mile" && $scope.unit2 === "Inch") {
            result = aem_unit_converter.length.MileToInch(input);
        } else if ($scope.unit === "Mile" && $scope.unit2 === "Light Year") {
            result = aem_unit_converter.length.MileToLightyear(input);
        }

        // If first unit is Yard
        else if ($scope.unit === "Yard" && $scope.unit2 === "Meter") {
            result = aem_unit_converter.length.YardToMeter(input);
        } else if ($scope.unit === "Yard" && $scope.unit2 === "Kilometer") {
            result = aem_unit_converter.length.YardToKilometer(input);
        } else if ($scope.unit === "Yard" && $scope.unit2 === "Centimeter") {
            result = aem_unit_converter.length.YardToCentimeter(input);
        } else if ($scope.unit === "Yard" && $scope.unit2 === "Millimeter") {
            result = aem_unit_converter.length.YardToMillimeter(input);
        } else if ($scope.unit === "Yard" && $scope.unit2 === "Micrometer") {
            result = aem_unit_converter.length.YardToMicrometer(input);
        } else if ($scope.unit === "Yard" && $scope.unit2 === "Nanometer") {
            result = aem_unit_converter.length.YardToNanometer(input);
        } else if ($scope.unit === "Yard" && $scope.unit2 === "Mile") {
            result = aem_unit_converter.length.YardToMile(input);
        } else if ($scope.unit === "Yard" && $scope.unit2 === "Yard") {
            result = aem_unit_converter.length.YardToYard(input);
        } else if ($scope.unit === "Yard" && $scope.unit2 === "Foot") {
            result = aem_unit_converter.length.YardToFoot(input);
        } else if ($scope.unit === "Yard" && $scope.unit2 === "Inch") {
            result = aem_unit_converter.length.YardToInch(input);
        } else if ($scope.unit === "Yard" && $scope.unit2 === "Light Year") {
            result = aem_unit_converter.length.YardToLightyear(input);
        }

        // If first unit is Foot
        else if ($scope.unit === "Foot" && $scope.unit2 === "Meter") {
            result = aem_unit_converter.length.FootToMeter(input);
        } else if ($scope.unit === "Foot" && $scope.unit2 === "Kilometer") {
            result = aem_unit_converter.length.FootToKilometer(input);
        } else if ($scope.unit === "Foot" && $scope.unit2 === "Centimeter") {
            result = aem_unit_converter.length.FootToCentimeter(input);
        } else if ($scope.unit === "Foot" && $scope.unit2 === "Millimeter") {
            result = aem_unit_converter.length.FootToMillimeter(input);
        } else if ($scope.unit === "Foot" && $scope.unit2 === "Micrometer") {
            result = aem_unit_converter.length.FootToMicrometer(input);
        } else if ($scope.unit === "Foot" && $scope.unit2 === "Nanometer") {
            result = aem_unit_converter.length.FootToNanometer(input);
        } else if ($scope.unit === "Foot" && $scope.unit2 === "Mile") {
            result = aem_unit_converter.length.FootToMile(input);
        } else if ($scope.unit === "Foot" && $scope.unit2 === "Yard") {
            result = aem_unit_converter.length.FootToYard(input);
        } else if ($scope.unit === "Foot" && $scope.unit2 === "Foot") {
            result = aem_unit_converter.length.FootToFoot(input);
        } else if ($scope.unit === "Foot" && $scope.unit2 === "Inch") {
            result = aem_unit_converter.length.FootToInch(input);
        } else if ($scope.unit === "Foot" && $scope.unit2 === "Light Year") {
            result = aem_unit_converter.length.FootToLightyear(input);
        }

        // If first unit is Inch
        else if ($scope.unit === "Inch" && $scope.unit2 === "Meter") {
            result = aem_unit_converter.length.InchToMeter(input);
        } else if ($scope.unit === "Inch" && $scope.unit2 === "Kilometer") {
            result = aem_unit_converter.length.InchToKilometer(input);
        } else if ($scope.unit === "Inch" && $scope.unit2 === "Centimeter") {
            result = aem_unit_converter.length.InchToCentimeter(input);
        } else if ($scope.unit === "Inch" && $scope.unit2 === "Millimeter") {
            result = aem_unit_converter.length.InchToMillimeter(input);
        } else if ($scope.unit === "Inch" && $scope.unit2 === "Micrometer") {
            result = aem_unit_converter.length.InchToMicrometer(input);
        } else if ($scope.unit === "Inch" && $scope.unit2 === "Nanometer") {
            result = aem_unit_converter.length.InchToNanometer(input);
        } else if ($scope.unit === "Inch" && $scope.unit2 === "Mile") {
            result = aem_unit_converter.length.InchToMile(input);
        } else if ($scope.unit === "Inch" && $scope.unit2 === "Yard") {
            result = aem_unit_converter.length.InchToYard(input);
        } else if ($scope.unit === "Inch" && $scope.unit2 === "Foot") {
            result = aem_unit_converter.length.InchToFoot(input);
        } else if ($scope.unit === "Inch" && $scope.unit2 === "Inch") {
            result = aem_unit_converter.length.InchToInch(input);
        } else if ($scope.unit === "Inch" && $scope.unit2 === "Light Year") {
            result = aem_unit_converter.length.InchToLightyear(input);
        }

        // If first unit is Light Year
        else if ($scope.unit === "Light Year" && $scope.unit2 === "Meter") {
            result = aem_unit_converter.length.LightyearToMeter(input);
        } else if ($scope.unit === "Light Year" && $scope.unit2 === "Kilometer") {
            result = aem_unit_converter.length.LightyearToKilometer(input);
        } else if ($scope.unit === "Light Year" && $scope.unit2 === "Centimeter") {
            result = aem_unit_converter.length.LightyearToCentimeter(input);
        } else if ($scope.unit === "Light Year" && $scope.unit2 === "Millimeter") {
            result = aem_unit_converter.length.LightyearToMillimeter(input);
        } else if ($scope.unit === "Light Year" && $scope.unit2 === "Micrometer") {
            result = aem_unit_converter.length.LightyearToMicrometer(input);
        } else if ($scope.unit === "Light Year" && $scope.unit2 === "Nanometer") {
            result = aem_unit_converter.length.LightyearToNanometer(input);
        } else if ($scope.unit === "Light Year" && $scope.unit2 === "Mile") {
            result = aem_unit_converter.length.LightyearToMile(input);
        } else if ($scope.unit === "Light Year" && $scope.unit2 === "Yard") {
            result = aem_unit_converter.length.LightyearToYard(input);
        } else if ($scope.unit === "Light Year" && $scope.unit2 === "Foot") {
            result = aem_unit_converter.length.LightyearToFoot(input);
        } else if ($scope.unit === "Light Year" && $scope.unit2 === "Inch") {
            result = aem_unit_converter.length.LightyearToInch(input);
        } else if ($scope.unit === "Light Year" && $scope.unit2 === "Light Year") {
            result = aem_unit_converter.length.LightyearToLightyear(input);
        }

        return result;
    }

    return factory;
});