app.factory("weightConverterFactory", () => {

    var factory = {};

    factory.units = ["Kilogram", "Gram", "Milligram", "Metric Ton",
        "Long Ton", "Short Ton", "Pound", "Ounce", "Carrat", "Atomic Mass Unit"
    ];

    factory.checkInput = ($scope, input) => {

        let result = null;

        // If first unit is Kilogram
        if ($scope.unit === "Kilogram" && $scope.unit2 === "Kilogram") {
            result = aem_unit_converter.weight.KilogramToKilogram(input);
        } else if ($scope.unit === "Kilogram" && $scope.unit2 === "Gram") {
            result = aem_unit_converter.weight.KilogramToGram(input);
        } else if ($scope.unit === "Kilogram" && $scope.unit2 === "Milligram") {
            result = aem_unit_converter.weight.KilogramToMilligram(input);
        } else if ($scope.unit === "Kilogram" && $scope.unit2 === "Metric Ton") {
            result = aem_unit_converter.weight.KilogramToMetricTon(input);
        } else if ($scope.unit === "Kilogram" && $scope.unit2 === "Long Ton") {
            result = aem_unit_converter.weight.KilogramToLongTon(input);
        } else if ($scope.unit === "Kilogram" && $scope.unit2 === "Short Ton") {
            result = aem_unit_converter.weight.KilogramToShortTon(input);
        } else if ($scope.unit === "Kilogram" && $scope.unit2 === "Pound") {
            result = aem_unit_converter.weight.KilogramToPound(input);
        } else if ($scope.unit === "Kilogram" && $scope.unit2 === "Ounce") {
            result = aem_unit_converter.weight.KilogramToOunce(input);
        } else if ($scope.unit === "Kilogram" && $scope.unit2 === "Carrat") {
            result = aem_unit_converter.weight.KilogramToCarrat(input);
        } else if ($scope.unit === "Kilogram" && $scope.unit2 === "Atomic Mass Unit") {
            result = aem_unit_converter.weight.KilogramToAtomicMassUnit(input);
        }

        // If first unit is Gram
        else if ($scope.unit === "Gram" && $scope.unit2 === "Kilogram") {
            result = aem_unit_converter.weight.GramToKilogram(input);
        } else if ($scope.unit === "Gram" && $scope.unit2 === "Gram") {
            result = aem_unit_converter.weight.GramToGram(input);
        } else if ($scope.unit === "Gram" && $scope.unit2 === "Milligram") {
            result = aem_unit_converter.weight.GramToMilligram(input);
        } else if ($scope.unit === "Gram" && $scope.unit2 === "Metric Ton") {
            result = aem_unit_converter.weight.GramToMetricTon(input);
        } else if ($scope.unit === "Gram" && $scope.unit2 === "Long Ton") {
            result = aem_unit_converter.weight.GramToLongTon(input);
        } else if ($scope.unit === "Gram" && $scope.unit2 === "Short Ton") {
            result = aem_unit_converter.weight.GramToShortTon(input);
        } else if ($scope.unit === "Gram" && $scope.unit2 === "Pound") {
            result = aem_unit_converter.weight.GramToPound(input);
        } else if ($scope.unit === "Gram" && $scope.unit2 === "Ounce") {
            result = aem_unit_converter.weight.GramToOunce(input);
        } else if ($scope.unit === "Gram" && $scope.unit2 === "Carrat") {
            result = aem_unit_converter.weight.GramToCarrat(input);
        } else if ($scope.unit === "Gram" && $scope.unit2 === "Atomic Mass Unit") {
            result = aem_unit_converter.weight.GramToAtomicMassUnit(input);
        }

        // If first unit is Milligram
        else if ($scope.unit === "Milligram" && $scope.unit2 === "Kilogram") {
            result = aem_unit_converter.weight.MilligramToKilogram(input);
        } else if ($scope.unit === "Milligram" && $scope.unit2 === "Gram") {
            result = aem_unit_converter.weight.MilligramToGram(input);
        } else if ($scope.unit === "Milligram" && $scope.unit2 === "Milligram") {
            result = aem_unit_converter.weight.MilligramToMilligram(input);
        } else if ($scope.unit === "Milligram" && $scope.unit2 === "Metric Ton") {
            result = aem_unit_converter.weight.MilligramToMetricTon(input);
        } else if ($scope.unit === "Milligram" && $scope.unit2 === "Long Ton") {
            result = aem_unit_converter.weight.MilligramToLongTon(input);
        } else if ($scope.unit === "Milligram" && $scope.unit2 === "Short Ton") {
            result = aem_unit_converter.weight.MilligramToShortTon(input);
        } else if ($scope.unit === "Milligram" && $scope.unit2 === "Pound") {
            result = aem_unit_converter.weight.MilligramToPound(input);
        } else if ($scope.unit === "Milligram" && $scope.unit2 === "Ounce") {
            result = aem_unit_converter.weight.MilligramToOunce(input);
        } else if ($scope.unit === "Milligram" && $scope.unit2 === "Carrat") {
            result = aem_unit_converter.weight.MilligramToCarrat(input);
        } else if ($scope.unit === "Milligram" && $scope.unit2 === "Atomic Mass Unit") {
            result = aem_unit_converter.weight.MilligramToAtomicMassUnit(input);
        }

        // If first unit is Metric Ton
        else if ($scope.unit === "Metric Ton" && $scope.unit2 === "Kilogram") {
            result = aem_unit_converter.weight.MetricTonToKilogram(input);
        } else if ($scope.unit === "Metric Ton" && $scope.unit2 === "Gram") {
            result = aem_unit_converter.weight.MetricTonToGram(input);
        } else if ($scope.unit === "Metric Ton" && $scope.unit2 === "Milligram") {
            result = aem_unit_converter.weight.MetricTonToMilligram(input);
        } else if ($scope.unit === "Metric Ton" && $scope.unit2 === "Metric Ton") {
            result = aem_unit_converter.weight.MetricTonToMetricTon(input);
        } else if ($scope.unit === "Metric Ton" && $scope.unit2 === "Long Ton") {
            result = aem_unit_converter.weight.MetricTonToLongTon(input);
        } else if ($scope.unit === "Metric Ton" && $scope.unit2 === "Short Ton") {
            result = aem_unit_converter.weight.MetricTonToShortTon(input);
        } else if ($scope.unit === "Metric Ton" && $scope.unit2 === "Pound") {
            result = aem_unit_converter.weight.MetricTonToPound(input);
        } else if ($scope.unit === "Metric Ton" && $scope.unit2 === "Ounce") {
            result = aem_unit_converter.weight.MetricTonToOunce(input);
        } else if ($scope.unit === "Metric Ton" && $scope.unit2 === "Carrat") {
            result = aem_unit_converter.weight.MetricTonToCarrat(input);
        } else if ($scope.unit === "Metric Ton" && $scope.unit2 === "Atomic Mass Unit") {
            result = aem_unit_converter.weight.MetricTonToAtomicMassUnit(input);
        }

        // If first unit is Long Ton
        else if ($scope.unit === "Long Ton" && $scope.unit2 === "Kilogram") {
            result = aem_unit_converter.weight.LongTonToKilogram(input);
        } else if ($scope.unit === "Long Ton" && $scope.unit2 === "Gram") {
            result = aem_unit_converter.weight.LongTonToGram(input);
        } else if ($scope.unit === "Long Ton" && $scope.unit2 === "Milligram") {
            result = aem_unit_converter.weight.LongTonToMilligram(input);
        } else if ($scope.unit === "Long Ton" && $scope.unit2 === "Metric Ton") {
            result = aem_unit_converter.weight.LongTonToMetricTon(input);
        } else if ($scope.unit === "Long Ton" && $scope.unit2 === "Long Ton") {
            result = aem_unit_converter.weight.LongTonToLongTon(input);
        } else if ($scope.unit === "Long Ton" && $scope.unit2 === "Short Ton") {
            result = aem_unit_converter.weight.LongTonToShortTon(input);
        } else if ($scope.unit === "Long Ton" && $scope.unit2 === "Pound") {
            result = aem_unit_converter.weight.LongTonToPound(input);
        } else if ($scope.unit === "Long Ton" && $scope.unit2 === "Ounce") {
            result = aem_unit_converter.weight.LongTonToOunce(input);
        } else if ($scope.unit === "Long Ton" && $scope.unit2 === "Carrat") {
            result = aem_unit_converter.weight.LongTonToCarrat(input);
        } else if ($scope.unit === "Long Ton" && $scope.unit2 === "Atomic Mass Unit") {
            result = aem_unit_converter.weight.LongTonToAtomicMassUnit(input);
        }

        // If first unit is Short Ton
        else if ($scope.unit === "Short Ton" && $scope.unit2 === "Kilogram") {
            result = aem_unit_converter.weight.ShortTonToKilogram(input);
        } else if ($scope.unit === "Short Ton" && $scope.unit2 === "Gram") {
            result = aem_unit_converter.weight.ShortTonToGram(input);
        } else if ($scope.unit === "Short Ton" && $scope.unit2 === "Milligram") {
            result = aem_unit_converter.weight.ShortTonToMilligram(input);
        } else if ($scope.unit === "Short Ton" && $scope.unit2 === "Metric Ton") {
            result = aem_unit_converter.weight.ShortTonToMetricTon(input);
        } else if ($scope.unit === "Short Ton" && $scope.unit2 === "Long Ton") {
            result = aem_unit_converter.weight.ShortTonToLongTon(input);
        } else if ($scope.unit === "Short Ton" && $scope.unit2 === "Short Ton") {
            result = aem_unit_converter.weight.ShortTonToShortTon(input);
        } else if ($scope.unit === "Short Ton" && $scope.unit2 === "Pound") {
            result = aem_unit_converter.weight.ShortTonToPound(input);
        } else if ($scope.unit === "Short Ton" && $scope.unit2 === "Ounce") {
            result = aem_unit_converter.weight.ShortTonToOunce(input);
        } else if ($scope.unit === "Short Ton" && $scope.unit2 === "Carrat") {
            result = aem_unit_converter.weight.ShortTonToCarrat(input);
        } else if ($scope.unit === "Short Ton" && $scope.unit2 === "Atomic Mass Unit") {
            result = aem_unit_converter.weight.ShortTonToAtomicMassUnit(input);
        }

        // If first unit is Pound
        else if ($scope.unit === "Pound" && $scope.unit2 === "Kilogram") {
            result = aem_unit_converter.weight.PoundToKilogram(input);
        } else if ($scope.unit === "Pound" && $scope.unit2 === "Gram") {
            result = aem_unit_converter.weight.PoundToGram(input);
        } else if ($scope.unit === "Pound" && $scope.unit2 === "Milligram") {
            result = aem_unit_converter.weight.PoundToMilligram(input);
        } else if ($scope.unit === "Pound" && $scope.unit2 === "Metric Ton") {
            result = aem_unit_converter.weight.PoundToMetricTon(input);
        } else if ($scope.unit === "Pound" && $scope.unit2 === "Long Ton") {
            result = aem_unit_converter.weight.PoundToLongTon(input);
        } else if ($scope.unit === "Pound" && $scope.unit2 === "Short Ton") {
            result = aem_unit_converter.weight.PoundToShortTon(input);
        } else if ($scope.unit === "Pound" && $scope.unit2 === "Pound") {
            result = aem_unit_converter.weight.PoundToPound(input);
        } else if ($scope.unit === "Pound" && $scope.unit2 === "Ounce") {
            result = aem_unit_converter.weight.PoundToOunce(input);
        } else if ($scope.unit === "Pound" && $scope.unit2 === "Carrat") {
            result = aem_unit_converter.weight.PoundToCarrat(input);
        } else if ($scope.unit === "Pound" && $scope.unit2 === "Atomic Mass Unit") {
            result = aem_unit_converter.weight.PoundToAtomicMassUnit(input);
        }

        // If first unit is Ounce
        else if ($scope.unit === "Ounce" && $scope.unit2 === "Kilogram") {
            result = aem_unit_converter.weight.OunceToKilogram(input);
        } else if ($scope.unit === "Ounce" && $scope.unit2 === "Gram") {
            result = aem_unit_converter.weight.OunceToGram(input);
        } else if ($scope.unit === "Ounce" && $scope.unit2 === "Milligram") {
            result = aem_unit_converter.weight.OunceToMilligram(input);
        } else if ($scope.unit === "Ounce" && $scope.unit2 === "Metric Ton") {
            result = aem_unit_converter.weight.OunceToMetricTon(input);
        } else if ($scope.unit === "Ounce" && $scope.unit2 === "Long Ton") {
            result = aem_unit_converter.weight.OunceToLongTon(input);
        } else if ($scope.unit === "Ounce" && $scope.unit2 === "Short Ton") {
            result = aem_unit_converter.weight.OunceToShortTon(input);
        } else if ($scope.unit === "Ounce" && $scope.unit2 === "Pound") {
            result = aem_unit_converter.weight.OunceToPound(input);
        } else if ($scope.unit === "Ounce" && $scope.unit2 === "Ounce") {
            result = aem_unit_converter.weight.OunceToOunce(input);
        } else if ($scope.unit === "Ounce" && $scope.unit2 === "Carrat") {
            result = aem_unit_converter.weight.OunceToCarrat(input);
        } else if ($scope.unit === "Ounce" && $scope.unit2 === "Atomic Mass Unit") {
            result = aem_unit_converter.weight.OunceToAtomicMassUnit(input);
        }

        // If first unit is Carrat
        else if ($scope.unit === "Carrat" && $scope.unit2 === "Kilogram") {
            result = aem_unit_converter.weight.CarratToKilogram(input);
        } else if ($scope.unit === "Carrat" && $scope.unit2 === "Gram") {
            result = aem_unit_converter.weight.CarratToGram(input);
        } else if ($scope.unit === "Carrat" && $scope.unit2 === "Milligram") {
            result = aem_unit_converter.weight.CarratToMilligram(input);
        } else if ($scope.unit === "Carrat" && $scope.unit2 === "Metric Ton") {
            result = aem_unit_converter.weight.CarratToMetricTon(input);
        } else if ($scope.unit === "Carrat" && $scope.unit2 === "Long Ton") {
            result = aem_unit_converter.weight.CarratToLongTon(input);
        } else if ($scope.unit === "Carrat" && $scope.unit2 === "Short Ton") {
            result = aem_unit_converter.weight.CarratToShortTon(input);
        } else if ($scope.unit === "Carrat" && $scope.unit2 === "Pound") {
            result = aem_unit_converter.weight.CarratToPound(input);
        } else if ($scope.unit === "Carrat" && $scope.unit2 === "Ounce") {
            result = aem_unit_converter.weight.CarratToOunce(input);
        } else if ($scope.unit === "Carrat" && $scope.unit2 === "Carrat") {
            result = aem_unit_converter.weight.CarratToCarrat(input);
        } else if ($scope.unit === "Carrat" && $scope.unit2 === "Atomic Mass Unit") {
            result = aem_unit_converter.weight.CarratToAtomicMassUnit(input);
        }

        // If first unit is Atomic Mass Unit
        else if ($scope.unit === "Atomic Mass Unit" && $scope.unit2 === "Kilogram") {
            result = aem_unit_converter.weight.AtomicMassUnitToKilogram(input);
        } else if ($scope.unit === "Atomic Mass Unit" && $scope.unit2 === "Gram") {
            result = aem_unit_converter.weight.AtomicMassUnitToGram(input);
        } else if ($scope.unit === "Atomic Mass Unit" && $scope.unit2 === "Milligram") {
            result = aem_unit_converter.weight.AtomicMassUnitToMilligram(input);
        } else if ($scope.unit === "Atomic Mass Unit" && $scope.unit2 === "Metric Ton") {
            result = aem_unit_converter.weight.AtomicMassUnitToMetricTon(input);
        } else if ($scope.unit === "Atomic Mass Unit" && $scope.unit2 === "Long Ton") {
            result = aem_unit_converter.weight.AtomicMassUnitToLongTon(input);
        } else if ($scope.unit === "Atomic Mass Unit" && $scope.unit2 === "Short Ton") {
            result = aem_unit_converter.weight.AtomicMassUnitToShortTon(input);
        } else if ($scope.unit === "Atomic Mass Unit" && $scope.unit2 === "Pound") {
            result = aem_unit_converter.weight.AtomicMassUnitToPound(input);
        } else if ($scope.unit === "Atomic Mass Unit" && $scope.unit2 === "Ounce") {
            result = aem_unit_converter.weight.AtomicMassUnitToOunce(input);
        } else if ($scope.unit === "Atomic Mass Unit" && $scope.unit2 === "Carrat") {
            result = aem_unit_converter.weight.AtomicMassUnitToCarrat(input);
        } else if ($scope.unit === "Atomic Mass Unit" && $scope.unit2 === "Atomic Mass Unit") {
            result = aem_unit_converter.weight.AtomicMassUnitToAtomicMassUnit(input);
        }

        return result;
    };

    return factory;
});