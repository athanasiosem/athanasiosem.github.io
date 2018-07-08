app.factory("volumeConverterFactory", () => {

    var factory = {};

    factory.units = ["Cubic Meter", "Cubic Kilometer", "Cubic Centimeter", "Cubic Millimeter",
        "Litter", "Millilitter", "US Galon", "US Quart", "US Pint", "US Cup", "US Fluid Ounce", "US Table Spoon",
        "US Tea Spoon", "Imperial Galon", "Imperial Quart", "Imperial Pint", "Imperial Fluid Ounce", 
        "Cubic Mile", "Cubic Yard", "Cubic Foot", "Cubic Inch"
    ];

    factory.checkInput = ($scope, input) => {

        let result;

        // If first unit is Cubic Meter
        if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.CubicMeterToCubicMeter(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.CubicMeterToCubicKilometer(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.CubicMeterToCubicCentimeter(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.CubicMeterToCubicMillimeter(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.CubicMeterToLitter(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.CubicMeterToMillilitter(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.CubicMeterToUSGalon(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.CubicMeterToUSQuart(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.CubicMeterToUSPint(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.CubicMeterToUSCup(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.CubicMeterToUSFluidOunce(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.CubicMeterToUSTableSpoon(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.CubicMeterToUSTeaSpoon(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.CubicMeterToImperialGalon(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.CubicMeterToImperialQuart(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.CubicMeterToImperialPint(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.CubicMeterToImperialFluidOunce(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.CubicMeterToImperialTableSpoon(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.CubicMeterToImperialTeaSpoon(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.CubicMeterToCubicMile(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.CubicMeterToCubicYard(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.CubicMeterToCubicFoot(input);
        } else if ($scope.unit === "Cubic Meter" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.CubicMeterToCubicInch(input);
        }

        // If first unit is Cubic Kilometer
        if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.CubicKilometerToCubicMeter(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.CubicKilometerToCubicKilometer(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.CubicKilometerToCubicCentimeter(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.CubicKilometerToCubicMillimeter(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.CubicKilometerToLitter(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.CubicKilometerToMillilitter(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.CubicKilometerToUSGalon(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.CubicKilometerToUSQuart(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.CubicKilometerToUSPint(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.CubicKilometerToUSCup(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.CubicKilometerToUSFluidOunce(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.CubicKilometerToUSTableSpoon(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.CubicKilometerToUSTeaSpoon(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.CubicKilometerToImperialGalon(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.CubicKilometerToImperialQuart(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.CubicKilometerToImperialPint(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.CubicKilometerToImperialFluidOunce(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.CubicKilometerToImperialTableSpoon(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.CubicKilometerToImperialTeaSpoon(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.CubicKilometerToCubicMile(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.CubicKilometerToCubicYard(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.CubicKilometerToCubicFoot(input);
        } else if ($scope.unit === "Cubic Kilometer" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.CubicKilometerToCubicInch(input);
        }

        // If first unit is Cubic Centimeter
        if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.CubicCentimeterToCubicMeter(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.CubicCentimeterToCubicKilometer(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.CubicCentimeterToCubicCentimeter(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.CubicCentimeterToCubicMillimeter(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.CubicCentimeterToLitter(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.CubicCentimeterToMillilitter(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.CubicCentimeterToUSGalon(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.CubicCentimeterToUSQuart(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.CubicCentimeterToUSPint(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.CubicCentimeterToUSCup(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.CubicCentimeterToUSFluidOunce(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.CubicCentimeterToUSTableSpoon(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.CubicCentimeterToUSTeaSpoon(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.CubicCentimeterToImperialGalon(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.CubicCentimeterToImperialQuart(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.CubicCentimeterToImperialPint(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.CubicCentimeterToImperialFluidOunce(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.CubicCentimeterToImperialTableSpoon(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.CubicCentimeterToImperialTeaSpoon(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.CubicCentimeterToCubicMile(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.CubicCentimeterToCubicYard(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.CubicCentimeterToCubicFoot(input);
        } else if ($scope.unit === "Cubic Centimeter" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.CubicCentimeterToCubicInch(input);
        }

        // If first unit is Cubic Millimeter
        if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.CubicMillimeterToCubicMeter(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.CubicMillimeterToCubicKilometer(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.CubicMillimeterToCubicCentimeter(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.CubicMillimeterToCubicMillimeter(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.CubicMillimeterToLitter(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.CubicMillimeterToMillilitter(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.CubicMillimeterToUSGalon(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.CubicMillimeterToUSQuart(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.CubicMillimeterToUSPint(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.CubicMillimeterToUSCup(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.CubicMillimeterToUSFluidOunce(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.CubicMillimeterToUSTableSpoon(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.CubicMillimeterToUSTeaSpoon(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.CubicMillimeterToImperialGalon(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.CubicMillimeterToImperialQuart(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.CubicMillimeterToImperialPint(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.CubicMillimeterToImperialFluidOunce(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.CubicMillimeterToImperialTableSpoon(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.CubicMillimeterToImperialTeaSpoon(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.CubicMillimeterToCubicMile(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.CubicMillimeterToCubicYard(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.CubicMillimeterToCubicFoot(input);
        } else if ($scope.unit === "Cubic Millimeter" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.CubicMillimeterToCubicInch(input);
        }

        // If first unit is Litter
        if ($scope.unit === "Litter" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.LitterToCubicMeter(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.LitterToCubicKilometer(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.LitterToCubicCentimeter(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.LitterToCubicMillimeter(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.LitterToLitter(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.LitterToMillilitter(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.LitterToUSGalon(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.LitterToUSQuart(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.LitterToUSPint(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.LitterToUSCup(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.LitterToUSFluidOunce(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.LitterToUSTableSpoon(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.LitterToUSTeaSpoon(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.LitterToImperialGalon(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.LitterToImperialQuart(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.LitterToImperialPint(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.LitterToImperialFluidOunce(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.LitterToImperialTableSpoon(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.LitterToImperialTeaSpoon(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.LitterToCubicMile(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.LitterToCubicYard(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.LitterToCubicFoot(input);
        } else if ($scope.unit === "Litter" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.LitterToCubicInch(input);
        }

        // If first unit is Millilitter
        if ($scope.unit === "Millilitter" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.MillilitterToCubicMeter(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.MillilitterToCubicKilometer(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.MillilitterToCubicCentimeter(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.MillilitterToCubicMillimeter(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.MillilitterToLitter(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.MillilitterToMillilitter(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.MillilitterToUSGalon(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.MillilitterToUSQuart(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.MillilitterToUSPint(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.MillilitterToUSCup(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.MillilitterToUSFluidOunce(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.MillilitterToUSTableSpoon(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.MillilitterToUSTeaSpoon(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.MillilitterToImperialGalon(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.MillilitterToImperialQuart(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.MillilitterToImperialPint(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.MillilitterToImperialFluidOunce(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.MillilitterToImperialTableSpoon(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.MillilitterToImperialTeaSpoon(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.MillilitterToCubicMile(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.MillilitterToCubicYard(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.MillilitterToCubicFoot(input);
        } else if ($scope.unit === "Millilitter" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.MillilitterToCubicInch(input);
        }

        // If first unit is US Galon
        if ($scope.unit === "US Galon" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.USGalonToCubicMeter(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.USGalonToCubicKilometer(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.USGalonToCubicCentimeter(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.USGalonToCubicMillimeter(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.USGalonToLitter(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.USGalonToMillilitter(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.USGalonToUSGalon(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.USGalonToUSQuart(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.USGalonToUSPint(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.USGalonToUSCup(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.USGalonToUSFluidOunce(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.USGalonToUSTableSpoon(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.USGalonToUSTeaSpoon(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.USGalonToImperialGalon(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.USGalonToImperialQuart(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.USGalonToImperialPint(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.USGalonToImperialFluidOunce(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.USGalonToImperialTableSpoon(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.USGalonToImperialTeaSpoon(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.USGalonToCubicMile(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.USGalonToCubicYard(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.USGalonToCubicFoot(input);
        } else if ($scope.unit === "US Galon" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.USGalonToCubicInch(input);
        }

        // If first unit is US Quart
        if ($scope.unit === "US Quart" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.USQuartToCubicMeter(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.USQuartToCubicKilometer(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.USQuartToCubicCentimeter(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.USQuartToCubicMillimeter(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.USQuartToLitter(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.USQuartToMillilitter(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.USQuartToUSGalon(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.USQuartToUSQuart(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.USQuartToUSPint(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.USQuartToUSCup(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.USQuartToUSFluidOunce(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.USQuartToUSTableSpoon(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.USQuartToUSTeaSpoon(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.USQuartToImperialGalon(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.USQuartToImperialQuart(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.USQuartToImperialPint(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.USQuartToImperialFluidOunce(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.USQuartToImperialTableSpoon(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.USQuartToImperialTeaSpoon(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.USQuartToCubicMile(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.USQuartToCubicYard(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.USQuartToCubicFoot(input);
        } else if ($scope.unit === "US Quart" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.USQuartToCubicInch(input);
        }


        // If first unit is US Pint
        if ($scope.unit === "US Pint" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.USPintToCubicMeter(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.USPintToCubicKilometer(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.USPintToCubicCentimeter(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.USPintToCubicMillimeter(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.USPintToLitter(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.USPintToMillilitter(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.USPintToUSGalon(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.USPintToUSQuart(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.USPintToUSPint(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.USPintToUSCup(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.USPintToUSFluidOunce(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.USPintToUSTableSpoon(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.USPintToUSTeaSpoon(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.USPintToImperialGalon(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.USPintToImperialQuart(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.USPintToImperialPint(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.USPintToImperialFluidOunce(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.USPintToImperialTableSpoon(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.USPintToImperialTeaSpoon(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.USPintToCubicMile(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.USPintToCubicYard(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.USPintToCubicFoot(input);
        } else if ($scope.unit === "US Pint" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.USPintToCubicInch(input);
        }

        // If first unit is US Cup
        if ($scope.unit === "US Cup" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.USCupToCubicMeter(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.USCupToCubicKilometer(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.USCupToCubicCentimeter(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.USCupToCubicMillimeter(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.USCupToLitter(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.USCupToMillilitter(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.USCupToUSGalon(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.USCupToUSQuart(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.USCupToUSPint(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.USCupToUSCup(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.USCupToUSFluidOunce(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.USCupToUSTableSpoon(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.USCupToUSTeaSpoon(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.USCupToImperialGalon(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.USCupToImperialQuart(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.USCupToImperialPint(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.USCupToImperialFluidOunce(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.USCupToImperialTableSpoon(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.USCupToImperialTeaSpoon(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.USCupToCubicMile(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.USCupToCubicYard(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.USCupToCubicFoot(input);
        } else if ($scope.unit === "US Cup" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.USCupToCubicInch(input);
        }

        // If first unit is US Fluid Ounce
        if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.USFluidOunceToCubicMeter(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.USFluidOunceToCubicKilometer(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.USFluidOunceToCubicCentimeter(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.USFluidOunceToCubicMillimeter(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.USFluidOunceToLitter(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.USFluidOunceToMillilitter(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.USFluidOunceToUSGalon(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.USFluidOunceToUSQuart(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.USFluidOunceToUSPint(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.USFluidOunceToUSCup(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.USFluidOunceToUSFluidOunce(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.USFluidOunceToUSTableSpoon(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.USFluidOunceToUSTeaSpoon(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.USFluidOunceToImperialGalon(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.USFluidOunceToImperialQuart(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.USFluidOunceToImperialPint(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.USFluidOunceToImperialFluidOunce(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.USFluidOunceToImperialTableSpoon(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.USFluidOunceToImperialTeaSpoon(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.USFluidOunceToCubicMile(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.USFluidOunceToCubicYard(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.USFluidOunceToCubicFoot(input);
        } else if ($scope.unit === "US Fluid Ounce" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.USFluidOunceToCubicInch(input);
        }

        // If first unit is US Table Spoon
        if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.USTableSpoonToCubicMeter(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.USTableSpoonToCubicKilometer(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.USTableSpoonToCubicCentimeter(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.USTableSpoonToCubicMillimeter(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.USTableSpoonToLitter(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.USTableSpoonToMillilitter(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.USTableSpoonToUSGalon(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.USTableSpoonToUSQuart(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.USTableSpoonToUSPint(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.USTableSpoonToUSCup(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.USTableSpoonToUSFluidOunce(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.USTableSpoonToUSTableSpoon(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.USTableSpoonToUSTeaSpoon(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.USTableSpoonToImperialGalon(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.USTableSpoonToImperialQuart(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.USTableSpoonToImperialPint(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.USTableSpoonToImperialFluidOunce(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.USTableSpoonToImperialTableSpoon(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.USTableSpoonToImperialTeaSpoon(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.USTableSpoonToCubicMile(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.USTableSpoonToCubicYard(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.USTableSpoonToCubicFoot(input);
        } else if ($scope.unit === "US Table Spoon" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.USTableSpoonToCubicInch(input);
        }

        // If first unit is US Tea Spoon
        if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.USTeaSpoonToCubicMeter(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.USTeaSpoonToCubicKilometer(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.USTeaSpoonToCubicCentimeter(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.USTeaSpoonToCubicMillimeter(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.USTeaSpoonToLitter(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.USTeaSpoonToMillilitter(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.USTeaSpoonToUSGalon(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.USTeaSpoonToUSQuart(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.USTeaSpoonToUSPint(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.USTeaSpoonToUSCup(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.USTeaSpoonToUSFluidOunce(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.USTeaSpoonToUSTableSpoon(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.USTeaSpoonToUSTeaSpoon(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.USTeaSpoonToImperialGalon(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.USTeaSpoonToImperialQuart(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.USTeaSpoonToImperialPint(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.USTeaSpoonToImperialFluidOunce(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.USTeaSpoonToImperialTableSpoon(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.USTeaSpoonToImperialTeaSpoon(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.USTeaSpoonToCubicMile(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.USTeaSpoonToCubicYard(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.USTeaSpoonToCubicFoot(input);
        } else if ($scope.unit === "US Tea Spoon" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.USTeaSpoonToCubicInch(input);
        }

         // If first unit is Imperial Galon
        if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.ImperialGalonToCubicMeter(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.ImperialGalonToCubicKilometer(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.ImperialGalonToCubicCentimeter(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.ImperialGalonToCubicMillimeter(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.ImperialGalonToLitter(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.ImperialGalonToMillilitter(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.ImperialGalonToUSGalon(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.ImperialGalonToUSQuart(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.ImperialGalonToUSPint(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.ImperialGalonToUSCup(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.ImperialGalonToUSFluidOunce(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.ImperialGalonToUSTableSpoon(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.ImperialGalonToUSTeaSpoon(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.ImperialGalonToImperialGalon(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.ImperialGalonToImperialQuart(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.ImperialGalonToImperialPint(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.ImperialGalonToImperialFluidOunce(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.ImperialGalonToImperialTableSpoon(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.ImperialGalonToImperialTeaSpoon(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.ImperialGalonToCubicMile(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.ImperialGalonToCubicYard(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.ImperialGalonToCubicFoot(input);
        } else if ($scope.unit === "Imperial Galon" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.ImperialGalonToCubicInch(input);
        }

         // If first unit is Imperial Quart
        if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.ImperialQuartToCubicMeter(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.ImperialQuartToCubicKilometer(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.ImperialQuartToCubicCentimeter(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.ImperialQuartToCubicMillimeter(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.ImperialQuartToLitter(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.ImperialQuartToMillilitter(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.ImperialQuartToUSGalon(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.ImperialQuartToUSQuart(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.ImperialQuartToUSPint(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.ImperialQuartToUSCup(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.ImperialQuartToUSFluidOunce(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.ImperialQuartToUSTableSpoon(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.ImperialQuartToUSTeaSpoon(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.ImperialQuartToImperialGalon(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.ImperialQuartToImperialQuart(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.ImperialQuartToImperialPint(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.ImperialQuartToImperialFluidOunce(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.ImperialQuartToImperialTableSpoon(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.ImperialQuartToImperialTeaSpoon(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.ImperialQuartToCubicMile(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.ImperialQuartToCubicYard(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.ImperialQuartToCubicFoot(input);
        } else if ($scope.unit === "Imperial Quart" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.ImperialQuartToCubicInch(input);
        }

        // If first unit is Imperial Pint
        if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.ImperialPintToCubicMeter(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.ImperialPintToCubicKilometer(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.ImperialPintToCubicCentimeter(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.ImperialPintToCubicMillimeter(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.ImperialPintToLitter(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.ImperialPintToMillilitter(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.ImperialPintToUSGalon(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.ImperialPintToUSQuart(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.ImperialPintToUSPint(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.ImperialPintToUSCup(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.ImperialPintToUSFluidOunce(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.ImperialPintToUSTableSpoon(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.ImperialPintToUSTeaSpoon(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.ImperialPintToImperialGalon(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.ImperialPintToImperialQuart(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.ImperialPintToImperialPint(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.ImperialPintToImperialFluidOunce(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.ImperialPintToImperialTableSpoon(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.ImperialPintToImperialTeaSpoon(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.ImperialPintToCubicMile(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.ImperialPintToCubicYard(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.ImperialPintToCubicFoot(input);
        } else if ($scope.unit === "Imperial Pint" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.ImperialPintToCubicInch(input);
        }

        // If first unit is Imperial Fluid Ounce
        if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.ImperialFluidOunceToCubicMeter(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.ImperialFluidOunceToCubicKilometer(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.ImperialFluidOunceToCubicCentimeter(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.ImperialFluidOunceToCubicMillimeter(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.ImperialFluidOunceToLitter(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.ImperialFluidOunceToMillilitter(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.ImperialFluidOunceToUSGalon(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.ImperialFluidOunceToUSQuart(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.ImperialFluidOunceToUSPint(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.ImperialFluidOunceToUSCup(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.ImperialFluidOunceToUSFluidOunce(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.ImperialFluidOunceToUSTableSpoon(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.ImperialFluidOunceToUSTeaSpoon(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.ImperialFluidOunceToImperialGalon(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.ImperialFluidOunceToImperialQuart(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.ImperialFluidOunceToImperialPint(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.ImperialFluidOunceToImperialFluidOunce(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.ImperialFluidOunceToImperialTableSpoon(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.ImperialFluidOunceToImperialTeaSpoon(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.ImperialFluidOunceToCubicMile(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.ImperialFluidOunceToCubicYard(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.ImperialFluidOunceToCubicFoot(input);
        } else if ($scope.unit === "Imperial Fluid Ounce" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.ImperialFluidOunceToCubicInch(input);
        }

        // If first unit is Imperial Table Spoon
        if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.ImperialTableSpoonToCubicMeter(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.ImperialTableSpoonToCubicKilometer(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.ImperialTableSpoonToCubicCentimeter(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.ImperialTableSpoonToCubicMillimeter(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.ImperialTableSpoonToLitter(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.ImperialTableSpoonToMillilitter(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.ImperialTableSpoonToUSGalon(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.ImperialTableSpoonToUSQuart(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.ImperialTableSpoonToUSPint(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.ImperialTableSpoonToUSCup(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.ImperialTableSpoonToUSFluidOunce(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.ImperialTableSpoonToUSTableSpoon(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.ImperialTableSpoonToUSTeaSpoon(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.ImperialTableSpoonToImperialGalon(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.ImperialTableSpoonToImperialQuart(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.ImperialTableSpoonToImperialPint(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.ImperialTableSpoonToImperialFluidOunce(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.ImperialTableSpoonToImperialTableSpoon(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.ImperialTableSpoonToImperialTeaSpoon(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.ImperialTableSpoonToCubicMile(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.ImperialTableSpoonToCubicYard(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.ImperialTableSpoonToCubicFoot(input);
        } else if ($scope.unit === "Imperial Table Spoon" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.ImperialTableSpoonToCubicInch(input);
        }

         // If first unit is Imperial Tea Spoon
        if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToCubicMeter(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToCubicKilometer(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToCubicCentimeter(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToCubicMillimeter(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToLitter(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToMillilitter(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToUSGalon(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToUSQuart(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToUSPint(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToUSCup(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToUSFluidOunce(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToUSTableSpoon(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToUSTeaSpoon(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToImperialGalon(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToImperialQuart(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToImperialPint(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToImperialFluidOunce(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToImperialTableSpoon(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToImperialTeaSpoon(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToCubicMile(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToCubicYard(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToCubicFoot(input);
        } else if ($scope.unit === "Imperial Tea Spoon" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.ImperialTeaSpoonToCubicInch(input);
        }

        // If first unit is Cubic Mile
        if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.CubicMileToCubicMeter(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.CubicMileToCubicKilometer(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.CubicMileToCubicCentimeter(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.CubicMileToCubicMillimeter(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.CubicMileToLitter(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.CubicMileToMillilitter(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.CubicMileToUSGalon(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.CubicMileToUSQuart(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.CubicMileToUSPint(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.CubicMileToUSCup(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.CubicMileToUSFluidOunce(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.CubicMileToUSTableSpoon(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.CubicMileToUSTeaSpoon(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.CubicMileToImperialGalon(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.CubicMileToImperialQuart(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.CubicMileToImperialPint(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.CubicMileToImperialFluidOunce(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.CubicMileToImperialTableSpoon(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.CubicMileToImperialTeaSpoon(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.CubicMileToCubicMile(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.CubicMileToCubicYard(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.CubicMileToCubicFoot(input);
        } else if ($scope.unit === "Cubic Mile" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.CubicMileToCubicInch(input);
        }

        // If first unit is Cubic Yard
        if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.CubicYardToCubicMeter(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.CubicYardToCubicKilometer(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.CubicYardToCubicCentimeter(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.CubicYardToCubicMillimeter(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.CubicYardToLitter(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.CubicYardToMillilitter(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.CubicYardToUSGalon(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.CubicYardToUSQuart(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.CubicYardToUSPint(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.CubicYardToUSCup(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.CubicYardToUSFluidOunce(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.CubicYardToUSTableSpoon(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.CubicYardToUSTeaSpoon(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.CubicYardToImperialGalon(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.CubicYardToImperialQuart(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.CubicYardToImperialPint(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.CubicYardToImperialFluidOunce(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.CubicYardToImperialTableSpoon(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.CubicYardToImperialTeaSpoon(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.CubicYardToCubicMile(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.CubicYardToCubicYard(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.CubicYardToCubicFoot(input);
        } else if ($scope.unit === "Cubic Yard" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.CubicYardToCubicInch(input);
        }

        // If first unit is Cubic Foot
        if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.CubicFootToCubicMeter(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.CubicFootToCubicKilometer(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.CubicFootToCubicCentimeter(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.CubicFootToCubicMillimeter(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.CubicFootToLitter(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.CubicFootToMillilitter(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.CubicFootToUSGalon(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.CubicFootToUSQuart(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.CubicFootToUSPint(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.CubicFootToUSCup(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.CubicFootToUSFluidOunce(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.CubicFootToUSTableSpoon(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.CubicFootToUSTeaSpoon(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.CubicFootToImperialGalon(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.CubicFootToImperialQuart(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.CubicFootToImperialPint(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.CubicFootToImperialFluidOunce(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.CubicFootToImperialTableSpoon(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.CubicFootToImperialTeaSpoon(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.CubicFootToCubicMile(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.CubicFootToCubicYard(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.CubicFootToCubicFoot(input);
        } else if ($scope.unit === "Cubic Foot" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.CubicFootToCubicInch(input);
        }

        // TODO Cubic Inch
        // If first unit is Cubic Inch
        if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Cubic Meter") {
            result = aem_unit_converter.volume.CubicInchToCubicMeter(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Cubic Kilometer") {
            result = aem_unit_converter.volume.CubicInchToCubicKilometer(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Cubic Centimeter") {
            result = aem_unit_converter.volume.CubicInchToCubicCentimeter(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Cubic Millimeter") {
            result = aem_unit_converter.volume.CubicInchToCubicMillimeter(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Litter") {
            result = aem_unit_converter.volume.CubicInchToLitter(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Millilitter") {
            result = aem_unit_converter.volume.CubicInchToMillilitter(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "US Galon") {
            result = aem_unit_converter.volume.CubicInchToUSGalon(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "US Quart") {
            result = aem_unit_converter.volume.CubicInchToUSQuart(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "US Pint") {
            result = aem_unit_converter.volume.CubicInchToUSPint(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "US Cup") {
            result = aem_unit_converter.volume.CubicInchToUSCup(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "US Fluid Ounce") {
            result = aem_unit_converter.volume.CubicInchToUSFluidOunce(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "US Table Spoon") {
            result = aem_unit_converter.volume.CubicInchToUSTableSpoon(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "US Tea Spoon") {
            result = aem_unit_converter.volume.CubicInchToUSTeaSpoon(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Imperial Galon") {
            result = aem_unit_converter.volume.CubicInchToImperialGalon(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Imperial Quart") {
            result = aem_unit_converter.volume.CubicInchToImperialQuart(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Imperial Pint") {
            result = aem_unit_converter.volume.CubicInchToImperialPint(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Imperial Fluid Ounce") {
            result = aem_unit_converter.volume.CubicInchToImperialFluidOunce(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Imperial Table Spoon") {
            result = aem_unit_converter.volume.CubicInchToImperialTableSpoon(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Imperial Tea Spoon") {
            result = aem_unit_converter.volume.CubicInchToImperialTeaSpoon(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Cubic Mile") {
            result = aem_unit_converter.volume.CubicInchToCubicMile(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Cubic Yard") {
            result = aem_unit_converter.volume.CubicInchToCubicYard(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Cubic Foot") {
            result = aem_unit_converter.volume.CubicInchToCubicFoot(input);
        } else if ($scope.unit === "Cubic Inch" && $scope.unit2 === "Cubic Inch") {
            result = aem_unit_converter.volume.CubicInchToCubicInch(input);
        }


        return result;

    };

    return factory;
});