app.factory("areaConverterFactory", () => {

    var factory = {};

    factory.units = ["Square Meter", "Square Kilometer", "Square Centimeter", "Square Millimeter",
        "Square Micrometer", "Hectare", "Square Mile", "Square Yard", "Square Foot", "Square Inch", "Acre"
    ];

    factory.checkInput = ($scope, input) => {

        let result = null;

        // If first unit is Square Meter
        if ($scope.unit === "Square Meter" && $scope.unit2 === "Square Meter") {
            result = aem_unit_converter.area.SquareMeterToSquareMeter(input);
        } else if ($scope.unit === "Square Meter" && $scope.unit2 === "Square Kilometer") {
            result = aem_unit_converter.area.SquareMeterToSquareKilometer(input);
        } else if ($scope.unit === "Square Meter" && $scope.unit2 === "Square Centimeter") {
            result = aem_unit_converter.area.SquareMeterToSquareCentimeter(input);
        } else if ($scope.unit === "Square Meter" && $scope.unit2 === "Square Millimeter") {
            result = aem_unit_converter.area.SquareMeterToSquareMillimeter(input);
        } else if ($scope.unit === "Square Meter" && $scope.unit2 === "Square Micrometer") {
            result = aem_unit_converter.area.SquareMeterToSquareMicrometer(input);
        } else if ($scope.unit === "Square Meter" && $scope.unit2 === "Hectare") {
            result = aem_unit_converter.area.SquareMeterToHectare(input);
        } else if ($scope.unit === "Square Meter" && $scope.unit2 === "Square Mile") {
            result = aem_unit_converter.area.SquareMeterToSquareMile(input);
        } else if ($scope.unit === "Square Meter" && $scope.unit2 === "Square Yard") {
            result = aem_unit_converter.area.SquareMeterToSquareYard(input);
        } else if ($scope.unit === "Square Meter" && $scope.unit2 === "Square Foot") {
            result = aem_unit_converter.area.SquareMeterToSquareFoot(input);
        } else if ($scope.unit === "Square Meter" && $scope.unit2 === "Square Inch") {
            result = aem_unit_converter.area.SquareMeterToSquareInch(input);
        } else if ($scope.unit === "Square Meter" && $scope.unit2 === "Acre") {
            result = aem_unit_converter.area.SquareMeterToAcre(input);
        }

        // If first unit is Square Kilometer
        else if ($scope.unit === "Square Kilometer" && $scope.unit2 === "Square Meter") {
            result = aem_unit_converter.area.SquareKilometerToSquareMeter(input);
        } else if ($scope.unit === "Square Kilometer" && $scope.unit2 === "Square Kilometer") {
            result = aem_unit_converter.area.SquareKilometerToSquareKilometer(input);
        } else if ($scope.unit === "Square Kilometer" && $scope.unit2 === "Square Centimeter") {
            result = aem_unit_converter.area.SquareKilometerToSquareCentimeter(input);
        } else if ($scope.unit === "Square Kilometer" && $scope.unit2 === "Square Millimeter") {
            result = aem_unit_converter.area.SquareKilometerToSquareMillimeter(input);
        } else if ($scope.unit === "Square Kilometer" && $scope.unit2 === "Square Micrometer") {
            result = aem_unit_converter.area.SquareKilometerToSquareMicrometer(input);
        } else if ($scope.unit === "Square Kilometer" && $scope.unit2 === "Hectare") {
            result = aem_unit_converter.area.SquareKilometerToHectare(input);
        } else if ($scope.unit === "Square Kilometer" && $scope.unit2 === "Square Mile") {
            result = aem_unit_converter.area.SquareKilometerToSquareMile(input);
        } else if ($scope.unit === "Square Kilometer" && $scope.unit2 === "Square Yard") {
            result = aem_unit_converter.area.SquareKilometerToSquareYard(input);
        } else if ($scope.unit === "Square Kilometer" && $scope.unit2 === "Square Foot") {
            result = aem_unit_converter.area.SquareKilometerToSquareFoot(input);
        } else if ($scope.unit === "Square Kilometer" && $scope.unit2 === "Square Inch") {
            result = aem_unit_converter.area.SquareKilometerToSquareInch(input);
        } else if ($scope.unit === "Square Kilometer" && $scope.unit2 === "Acre") {
            result = aem_unit_converter.area.SquareKilometerToAcre(input);
        }

        // If first unit is Square Centimeter
        else if ($scope.unit === "Square Centimeter" && $scope.unit2 === "Square Meter") {
            result = aem_unit_converter.area.SquareCentimeterToSquareMeter(input);
        } else if ($scope.unit === "Square Centimeter" && $scope.unit2 === "Square Kilometer") {
            result = aem_unit_converter.area.SquareCentimeterToSquareKilometer(input);
        } else if ($scope.unit === "Square Centimeter" && $scope.unit2 === "Square Centimeter") {
            result = aem_unit_converter.area.SquareCentimeterToSquareCentimeter(input);
        } else if ($scope.unit === "Square Centimeter" && $scope.unit2 === "Square Millimeter") {
            result = aem_unit_converter.area.SquareCentimeterToSquareMillimeter(input);
        } else if ($scope.unit === "Square Centimeter" && $scope.unit2 === "Square Micrometer") {
            result = aem_unit_converter.area.SquareCentimeterToSquareMicrometer(input);
        } else if ($scope.unit === "Square Centimeter" && $scope.unit2 === "Hectare") {
            result = aem_unit_converter.area.SquareCentimeterToHectare(input);
        } else if ($scope.unit === "Square Centimeter" && $scope.unit2 === "Square Mile") {
            result = aem_unit_converter.area.SquareCentimeterToSquareMile(input);
        } else if ($scope.unit === "Square Centimeter" && $scope.unit2 === "Square Yard") {
            result = aem_unit_converter.area.SquareCentimeterToSquareYard(input);
        } else if ($scope.unit === "Square Centimeter" && $scope.unit2 === "Square Foot") {
            result = aem_unit_converter.area.SquareCentimeterToSquareFoot(input);
        } else if ($scope.unit === "Square Centimeter" && $scope.unit2 === "Square Inch") {
            result = aem_unit_converter.area.SquareCentimeterToSquareInch(input);
        } else if ($scope.unit === "Square Centimeter" && $scope.unit2 === "Acre") {
            result = aem_unit_converter.area.SquareCentimeterToAcre(input);
        }

        // If first unit is Square Millimeter
        else if ($scope.unit === "Square Millimeter" && $scope.unit2 === "Square Meter") {
            result = aem_unit_converter.area.SquareMillimeterToSquareMeter(input);
        } else if ($scope.unit === "Square Millimeter" && $scope.unit2 === "Square Kilometer") {
            result = aem_unit_converter.area.SquareMillimeterToSquareKilometer(input);
        } else if ($scope.unit === "Square Millimeter" && $scope.unit2 === "Square Centimeter") {
            result = aem_unit_converter.area.SquareMillimeterToSquareCentimeter(input);
        } else if ($scope.unit === "Square Millimeter" && $scope.unit2 === "Square Millimeter") {
            result = aem_unit_converter.area.SquareMillimeterToSquareMillimeter(input);
        } else if ($scope.unit === "Square Millimeter" && $scope.unit2 === "Square Micrometer") {
            result = aem_unit_converter.area.SquareMillimeterToSquareMicrometer(input);
        } else if ($scope.unit === "Square Millimeter" && $scope.unit2 === "Hectare") {
            result = aem_unit_converter.area.SquareMillimeterToHectare(input);
        } else if ($scope.unit === "Square Millimeter" && $scope.unit2 === "Square Mile") {
            result = aem_unit_converter.area.SquareMillimeterToSquareMile(input);
        } else if ($scope.unit === "Square Millimeter" && $scope.unit2 === "Square Yard") {
            result = aem_unit_converter.area.SquareMillimeterToSquareYard(input);
        } else if ($scope.unit === "Square Millimeter" && $scope.unit2 === "Square Foot") {
            result = aem_unit_converter.area.SquareMillimeterToSquareFoot(input);
        } else if ($scope.unit === "Square Millimeter" && $scope.unit2 === "Square Inch") {
            result = aem_unit_converter.area.SquareMillimeterToSquareInch(input);
        } else if ($scope.unit === "Square Millimeter" && $scope.unit2 === "Acre") {
            result = aem_unit_converter.area.SquareMillimeterToAcre(input);
        }

        // If first unit is Square Micrometer
        else if ($scope.unit === "Square Micrometer" && $scope.unit2 === "Square Meter") {
            result = aem_unit_converter.area.SquareMicrometerToSquareMeter(input);
        } else if ($scope.unit === "Square Micrometer" && $scope.unit2 === "Square Kilometer") {
            result = aem_unit_converter.area.SquareMicrometerToSquareKilometer(input);
        } else if ($scope.unit === "Square Micrometer" && $scope.unit2 === "Square Centimeter") {
            result = aem_unit_converter.area.SquareMicrometerToSquareCentimeter(input);
        } else if ($scope.unit === "Square Micrometer" && $scope.unit2 === "Square Millimeter") {
            result = aem_unit_converter.area.SquareMicrometerToSquareMillimeter(input);
        } else if ($scope.unit === "Square Micrometer" && $scope.unit2 === "Square Micrometer") {
            result = aem_unit_converter.area.SquareMicrometerToSquareMicrometer(input);
        } else if ($scope.unit === "Square Micrometer" && $scope.unit2 === "Hectare") {
            result = aem_unit_converter.area.SquareMicrometerToHectare(input);
        } else if ($scope.unit === "Square Micrometer" && $scope.unit2 === "Square Mile") {
            result = aem_unit_converter.area.SquareMicrometerToSquareMile(input);
        } else if ($scope.unit === "Square Micrometer" && $scope.unit2 === "Square Yard") {
            result = aem_unit_converter.area.SquareMicrometerToSquareYard(input);
        } else if ($scope.unit === "Square Micrometer" && $scope.unit2 === "Square Foot") {
            result = aem_unit_converter.area.SquareMicrometerToSquareFoot(input);
        } else if ($scope.unit === "Square Micrometer" && $scope.unit2 === "Square Inch") {
            result = aem_unit_converter.area.SquareMicrometerToSquareInch(input);
        } else if ($scope.unit === "Square Micrometer" && $scope.unit2 === "Acre") {
            result = aem_unit_converter.area.SquareMicrometerToAcre(input);
        }

        // If first unit is Hectare
        else if ($scope.unit === "Hectare" && $scope.unit2 === "Square Meter") {
            result = aem_unit_converter.area.HectareToSquareMeter(input);
        } else if ($scope.unit === "Hectare" && $scope.unit2 === "Square Kilometer") {
            result = aem_unit_converter.area.HectareToSquareKilometer(input);
        } else if ($scope.unit === "Hectare" && $scope.unit2 === "Square Centimeter") {
            result = aem_unit_converter.area.HectareToSquareCentimeter(input);
        } else if ($scope.unit === "Hectare" && $scope.unit2 === "Square Millimeter") {
            result = aem_unit_converter.area.HectareToSquareMillimeter(input);
        } else if ($scope.unit === "Hectare" && $scope.unit2 === "Square Micrometer") {
            result = aem_unit_converter.area.HectareToSquareMicrometer(input);
        } else if ($scope.unit === "Hectare" && $scope.unit2 === "Hectare") {
            result = aem_unit_converter.area.HectareToHectare(input);
        } else if ($scope.unit === "Hectare" && $scope.unit2 === "Square Mile") {
            result = aem_unit_converter.area.HectareToSquareMile(input);
        } else if ($scope.unit === "Hectare" && $scope.unit2 === "Square Yard") {
            result = aem_unit_converter.area.HectareToSquareYard(input);
        } else if ($scope.unit === "Hectare" && $scope.unit2 === "Square Foot") {
            result = aem_unit_converter.area.HectareToSquareFoot(input);
        } else if ($scope.unit === "Hectare" && $scope.unit2 === "Square Inch") {
            result = aem_unit_converter.area.HectareToSquareInch(input);
        } else if ($scope.unit === "Hectare" && $scope.unit2 === "Acre") {
            result = aem_unit_converter.area.HectareToAcre(input);
        }

        // If first unit is Square Mile
        else if ($scope.unit === "Square Mile" && $scope.unit2 === "Square Meter") {
            result = aem_unit_converter.area.SquareMileToSquareMeter(input);
        } else if ($scope.unit === "Square Mile" && $scope.unit2 === "Square Kilometer") {
            result = aem_unit_converter.area.SquareMileToSquareKilometer(input);
        } else if ($scope.unit === "Square Mile" && $scope.unit2 === "Square Centimeter") {
            result = aem_unit_converter.area.SquareMileToSquareCentimeter(input);
        } else if ($scope.unit === "Square Mile" && $scope.unit2 === "Square Millimeter") {
            result = aem_unit_converter.area.SquareMileToSquareMillimeter(input);
        } else if ($scope.unit === "Square Mile" && $scope.unit2 === "Square Micrometer") {
            result = aem_unit_converter.area.SquareMileToSquareMicrometer(input);
        } else if ($scope.unit === "Square Mile" && $scope.unit2 === "Hectare") {
            result = aem_unit_converter.area.SquareMileToHectare(input);
        } else if ($scope.unit === "Square Mile" && $scope.unit2 === "Square Mile") {
            result = aem_unit_converter.area.SquareMileToSquareMile(input);
        } else if ($scope.unit === "Square Mile" && $scope.unit2 === "Square Yard") {
            result = aem_unit_converter.area.SquareMileToSquareYard(input)
        } else if ($scope.unit === "Square Mile" && $scope.unit2 === "Square Foot") {
            result = aem_unit_converter.area.SquareMileToSquareFoot(input);
        } else if ($scope.unit === "Square Mile" && $scope.unit2 === "Square Inch") {
            result = aem_unit_converter.area.SquareMileToSquareInch(input);
        } else if ($scope.unit === "Square Mile" && $scope.unit2 === "Acre") {
            result = aem_unit_converter.area.SquareMileToAcre(input);
        }

        // If first unit is Square Yard
        else if ($scope.unit === "Square Yard" && $scope.unit2 === "Square Meter") {
            result = aem_unit_converter.area.SquareYardToSquareMeter(input);
        } else if ($scope.unit === "Square Yard" && $scope.unit2 === "Square Kilometer") {
            result = aem_unit_converter.area.SquareYardToSquareKilometer(input);
        } else if ($scope.unit === "Square Yard" && $scope.unit2 === "Square Centimeter") {
            result = aem_unit_converter.area.SquareYardToSquareCentimeter(input);
        } else if ($scope.unit === "Square Yard" && $scope.unit2 === "Square Millimeter") {
            result = aem_unit_converter.area.SquareYardToSquareMillimeter(input);
        } else if ($scope.unit === "Square Yard" && $scope.unit2 === "Square Micrometer") {
            result = aem_unit_converter.area.SquareYardToSquareMicrometer(input);
        } else if ($scope.unit === "Square Yard" && $scope.unit2 === "Hectare") {
            result = aem_unit_converter.area.SquareYardToHectare(input);
        } else if ($scope.unit === "Square Yard" && $scope.unit2 === "Square Mile") {
            result = aem_unit_converter.area.SquareYardToSquareMile(input);
        } else if ($scope.unit === "Square Yard" && $scope.unit2 === "Square Yard") {
            result = aem_unit_converter.area.SquareYardToSquareYard(input);
        } else if ($scope.unit === "Square Yard" && $scope.unit2 === "Square Foot") {
            result = aem_unit_converter.area.SquareYardToSquareFoot(input);
        } else if ($scope.unit === "Square Yard" && $scope.unit2 === "Square Inch") {
            result = aem_unit_converter.area.SquareYardToSquareInch(input);
        } else if ($scope.unit === "Square Yard" && $scope.unit2 === "Acre") {
            result = aem_unit_converter.area.SquareYardToAcre(input);
        }

        // If first unit is Square Foot
        else if ($scope.unit === "Square Foot" && $scope.unit2 === "Square Meter") {
            result = aem_unit_converter.area.SquareFootToSquareMeter(input);
        } else if ($scope.unit === "Square Foot" && $scope.unit2 === "Square Kilometer") {
            result = aem_unit_converter.area.SquareFootToSquareKilometer(input);
        } else if ($scope.unit === "Square Foot" && $scope.unit2 === "Square Centimeter") {
            result = aem_unit_converter.area.SquareFootToSquareCentimeter(input);
        } else if ($scope.unit === "Square Foot" && $scope.unit2 === "Square Millimeter") {
            result = aem_unit_converter.area.SquareFootToSquareMillimeter(input);
        } else if ($scope.unit === "Square Foot" && $scope.unit2 === "Square Micrometer") {
            result = aem_unit_converter.area.SquareFootToSquareMicrometer(input);
        } else if ($scope.unit === "Square Foot" && $scope.unit2 === "Hectare") {
            result = aem_unit_converter.area.SquareFootToHectare(input);
        } else if ($scope.unit === "Square Foot" && $scope.unit2 === "Square Mile") {
            result = aem_unit_converter.area.SquareFootToSquareMile(input);
        } else if ($scope.unit === "Square Foot" && $scope.unit2 === "Square Yard") {
            result = aem_unit_converter.area.SquareFootToSquareYard(input);
        } else if ($scope.unit === "Square Foot" && $scope.unit2 === "Square Foot") {
            result = aem_unit_converter.area.SquareFootToSquareFoot(input);
        } else if ($scope.unit === "Square Foot" && $scope.unit2 === "Square Inch") {
            result = aem_unit_converter.area.SquareFootToSquareInch(input);
        } else if ($scope.unit === "Square Foot" && $scope.unit2 === "Acre") {
            result = aem_unit_converter.area.SquareFootToAcre(input);
        }

        // If first unit is Square Inch
        else if ($scope.unit === "Square Inch" && $scope.unit2 === "Square Meter") {
            result = aem_unit_converter.area.SquareInchToSquareMeter(input);
        } else if ($scope.unit === "Square Inch" && $scope.unit2 === "Square Kilometer") {
            result = aem_unit_converter.area.SquareInchToSquareKilometer(input);
        } else if ($scope.unit === "Square Inch" && $scope.unit2 === "Square Centimeter") {
            result = aem_unit_converter.area.SquareInchToSquareCentimeter(input);
        } else if ($scope.unit === "Square Inch" && $scope.unit2 === "Square Millimeter") {
            result = aem_unit_converter.area.SquareInchToSquareMillimeter(input);
        } else if ($scope.unit === "Square Inch" && $scope.unit2 === "Square Micrometer") {
            result = aem_unit_converter.area.SquareInchToSquareMicrometer(input);
        } else if ($scope.unit === "Square Inch" && $scope.unit2 === "Hectare") {
            result = aem_unit_converter.area.SquareInchToHectare(input);
        } else if ($scope.unit === "Square Inch" && $scope.unit2 === "Square Mile") {
            result = aem_unit_converter.area.SquareInchToSquareMile(input);
        } else if ($scope.unit === "Square Inch" && $scope.unit2 === "Square Yard") {
            result = aem_unit_converter.area.SquareInchToSquareYard(input);
        } else if ($scope.unit === "Square Inch" && $scope.unit2 === "Square Foot") {
            result = aem_unit_converter.area.SquareInchToSquareFoot(input);
        } else if ($scope.unit === "Square Inch" && $scope.unit2 === "Square Inch") {
            result = aem_unit_converter.area.SquareInchToSquareInch(input);
        } else if ($scope.unit === "Square Inch" && $scope.unit2 === "Acre") {
            result = aem_unit_converter.area.SquareInchToAcre(input);
        }

        // If first unit is Acre
        else if ($scope.unit === "Acre" && $scope.unit2 === "Square Meter") {
            result = aem_unit_converter.area.AcreToSquareMeter(input);
        } else if ($scope.unit === "Acre" && $scope.unit2 === "Square Kilometer") {
            result = aem_unit_converter.area.AcreToSquareKilometer(input);
        } else if ($scope.unit === "Acre" && $scope.unit2 === "Square Centimeter") {
            result = aem_unit_converter.area.AcreToSquareCentimeter(input);
        } else if ($scope.unit === "Acre" && $scope.unit2 === "Square Millimeter") {
            result = aem_unit_converter.area.AcreToSquareMillimeter(input);
        } else if ($scope.unit === "Acre" && $scope.unit2 === "Square Micrometer") {
            result = aem_unit_converter.area.AcreToSquareMicrometer(input);
        } else if ($scope.unit === "Acre" && $scope.unit2 === "Hectare") {
            result = aem_unit_converter.area.AcreToHectare(input);
        } else if ($scope.unit === "Acre" && $scope.unit2 === "Square Mile") {
            result = aem_unit_converter.area.AcreToSquareMile(input);
        } else if ($scope.unit === "Acre" && $scope.unit2 === "Square Yard") {
            result = aem_unit_converter.area.AcreToSquareYard(input);
        } else if ($scope.unit === "Acre" && $scope.unit2 === "Square Foot") {
            result = aem_unit_converter.area.AcreToSquareFoot(input);
        } else if ($scope.unit === "Acre" && $scope.unit2 === "Square Inch") {
            result = aem_unit_converter.area.AcreToSquareInch(input);
        } else if ($scope.unit === "Acre" && $scope.unit2 === "Acre") {
            result = aem_unit_converter.area.AcreToAcre(input);
        }

        return result;
    };

    return factory;
});