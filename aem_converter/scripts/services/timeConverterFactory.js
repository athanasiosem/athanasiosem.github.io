app.factory("timeConverterFactory", () => {

    var factory = {};

    factory.units = ["Second", "Millisecond", "Microsecond", "Nanosecond",
        "Picosecond", "Minute", "Hour", "Day", "Week", "Month", "Year"
    ];

    factory.checkInput = ($scope, input) => {

        let result = null;

        // If first unit is Second
        if ($scope.unit === "Second" && $scope.unit2 === "Second") {
            result = aem_unit_converter.time.SecondToSecond(input);
        } else if ($scope.unit === "Second" && $scope.unit2 === "Millisecond") {
            result = aem_unit_converter.time.SecondToMillisecond(input);
        } else if ($scope.unit === "Second" && $scope.unit2 === "Microsecond") {
            result = aem_unit_converter.time.SecondToMicrosecond(input);
        } else if ($scope.unit === "Second" && $scope.unit2 === "Nanosecond") {
            result = aem_unit_converter.time.SecondToNanosecond(input);
        } else if ($scope.unit === "Second" && $scope.unit2 === "Picosecond") {
            result = aem_unit_converter.time.SecondToPicosecond(input);
        } else if ($scope.unit === "Second" && $scope.unit2 === "Minute") {
            result = aem_unit_converter.time.SecondToMinute(input);
        } else if ($scope.unit === "Second" && $scope.unit2 === "Hour") {
            result = aem_unit_converter.time.SecondToHour(input);
        } else if ($scope.unit === "Second" && $scope.unit2 === "Day") {
            result = aem_unit_converter.time.SecondToDay(input);
        } else if ($scope.unit === "Second" && $scope.unit2 === "Week") {
            result = aem_unit_converter.time.SecondToWeek(input);
        } else if ($scope.unit === "Second" && $scope.unit2 === "Month") {
            result = aem_unit_converter.time.SecondToMonth(input);
        } else if ($scope.unit === "Second" && $scope.unit2 === "Year") {
            result = aem_unit_converter.time.SecondToYear(input);
        }

        // If first unit is Millisecond
        if ($scope.unit === "Millisecond" && $scope.unit2 === "Second") {
            result = aem_unit_converter.time.MillisecondToSecond(input);
        } else if ($scope.unit === "Millisecond" && $scope.unit2 === "Millisecond") {
            result = aem_unit_converter.time.MillisecondToMillisecond(input);
        } else if ($scope.unit === "Millisecond" && $scope.unit2 === "Microsecond") {
            result = aem_unit_converter.time.MillisecondToMicrosecond(input);
        } else if ($scope.unit === "Millisecond" && $scope.unit2 === "Nanosecond") {
            result = aem_unit_converter.time.MillisecondToNanosecond(input);
        } else if ($scope.unit === "Millisecond" && $scope.unit2 === "Picosecond") {
            result = aem_unit_converter.time.MillisecondToPicosecond(input);
        } else if ($scope.unit === "Millisecond" && $scope.unit2 === "Minute") {
            result = aem_unit_converter.time.MillisecondToMinute(input);
        } else if ($scope.unit === "Millisecond" && $scope.unit2 === "Hour") {
            result = aem_unit_converter.time.MillisecondToHour(input);
        } else if ($scope.unit === "Millisecond" && $scope.unit2 === "Day") {
            result = aem_unit_converter.time.MillisecondToDay(input);
        } else if ($scope.unit === "Millisecond" && $scope.unit2 === "Week") {
            result = aem_unit_converter.time.MillisecondToWeek(input);
        } else if ($scope.unit === "Millisecond" && $scope.unit2 === "Month") {
            result = aem_unit_converter.time.MillisecondToMonth(input);
        } else if ($scope.unit === "Millisecond" && $scope.unit2 === "Year") {
            result = aem_unit_converter.time.MillisecondToYear(input);
        }

        // If first unit is Microsecond
        if ($scope.unit === "Microsecond" && $scope.unit2 === "Second") {
            result = aem_unit_converter.time.MicrosecondToSecond(input);
        } else if ($scope.unit === "Microsecond" && $scope.unit2 === "Millisecond") {
            result = aem_unit_converter.time.MicrosecondToMillisecond(input);
        } else if ($scope.unit === "Microsecond" && $scope.unit2 === "Microsecond") {
            result = aem_unit_converter.time.MicrosecondToMicrosecond(input);
        } else if ($scope.unit === "Microsecond" && $scope.unit2 === "Nanosecond") {
            result = aem_unit_converter.time.MicrosecondToNanosecond(input);
        } else if ($scope.unit === "Microsecond" && $scope.unit2 === "Picosecond") {
            result = aem_unit_converter.time.MicrosecondToPicosecond(input);
        } else if ($scope.unit === "Microsecond" && $scope.unit2 === "Minute") {
            result = aem_unit_converter.time.MicrosecondToMinute(input);
        } else if ($scope.unit === "Microsecond" && $scope.unit2 === "Hour") {
            result = aem_unit_converter.time.MicrosecondToHour(input);
        } else if ($scope.unit === "Microsecond" && $scope.unit2 === "Day") {
            result = aem_unit_converter.time.MicrosecondToDay(input);
        } else if ($scope.unit === "Microsecond" && $scope.unit2 === "Week") {
            result = aem_unit_converter.time.MicrosecondToWeek(input);
        } else if ($scope.unit === "Microsecond" && $scope.unit2 === "Month") {
            result = aem_unit_converter.time.MicrosecondToMonth(input);
        } else if ($scope.unit === "Microsecond" && $scope.unit2 === "Year") {
            result = aem_unit_converter.time.MicrosecondToYear(input);
        }

        // If first unit is Nanosecond
        if ($scope.unit === "Nanosecond" && $scope.unit2 === "Second") {
            result = aem_unit_converter.time.NanosecondToSecond(input);
        } else if ($scope.unit === "Nanosecond" && $scope.unit2 === "Millisecond") {
            result = aem_unit_converter.time.NanosecondToMillisecond(input);
        } else if ($scope.unit === "Nanosecond" && $scope.unit2 === "Microsecond") {
            result = aem_unit_converter.time.NanosecondToMicrosecond(input);
        } else if ($scope.unit === "Nanosecond" && $scope.unit2 === "Nanosecond") {
            result = aem_unit_converter.time.NanosecondToNanosecond(input);
        } else if ($scope.unit === "Nanosecond" && $scope.unit2 === "Picosecond") {
            result = aem_unit_converter.time.NanosecondToPicosecond(input);
        } else if ($scope.unit === "Nanosecond" && $scope.unit2 === "Minute") {
            result = aem_unit_converter.time.NanosecondToMinute(input);
        } else if ($scope.unit === "Nanosecond" && $scope.unit2 === "Hour") {
            result = aem_unit_converter.time.NanosecondToHour(input);
        } else if ($scope.unit === "Nanosecond" && $scope.unit2 === "Day") {
            result = aem_unit_converter.time.NanosecondToDay(input);
        } else if ($scope.unit === "Nanosecond" && $scope.unit2 === "Week") {
            result = aem_unit_converter.time.NanosecondToWeek(input);
        } else if ($scope.unit === "Nanosecond" && $scope.unit2 === "Month") {
            result = aem_unit_converter.time.NanosecondToMonth(input);
        } else if ($scope.unit === "Nanosecond" && $scope.unit2 === "Year") {
            result = aem_unit_converter.time.NanosecondToYear(input);
        }

        // If first unit is Picosecond
        if ($scope.unit === "Picosecond" && $scope.unit2 === "Second") {
            result = aem_unit_converter.time.PicosecondToSecond(input);
        } else if ($scope.unit === "Picosecond" && $scope.unit2 === "Millisecond") {
            result = aem_unit_converter.time.PicosecondToMillisecond(input);
        } else if ($scope.unit === "Picosecond" && $scope.unit2 === "Microsecond") {
            result = aem_unit_converter.time.PicosecondToMicrosecond(input);
        } else if ($scope.unit === "Picosecond" && $scope.unit2 === "Nanosecond") {
            result = aem_unit_converter.time.PicosecondToNanosecond(input);
        } else if ($scope.unit === "Picosecond" && $scope.unit2 === "Picosecond") {
            result = aem_unit_converter.time.PicosecondToPicosecond(input);
        } else if ($scope.unit === "Picosecond" && $scope.unit2 === "Minute") {
            result = aem_unit_converter.time.PicosecondToMinute(input);
        } else if ($scope.unit === "Picosecond" && $scope.unit2 === "Hour") {
            result = aem_unit_converter.time.PicosecondToHour(input);
        } else if ($scope.unit === "Picosecond" && $scope.unit2 === "Day") {
            result = aem_unit_converter.time.PicosecondToDay(input);
        } else if ($scope.unit === "Picosecond" && $scope.unit2 === "Week") {
            result = aem_unit_converter.time.PicosecondToWeek(input);
        } else if ($scope.unit === "Picosecond" && $scope.unit2 === "Month") {
            result = aem_unit_converter.time.PicosecondToMonth(input);
        } else if ($scope.unit === "Picosecond" && $scope.unit2 === "Year") {
            result = aem_unit_converter.time.PicosecondToYear(input);
        }

        // If first unit is Minute
        if ($scope.unit === "Minute" && $scope.unit2 === "Second") {
            result = aem_unit_converter.time.MinuteToSecond(input);
        } else if ($scope.unit === "Minute" && $scope.unit2 === "Millisecond") {
            result = aem_unit_converter.time.MinuteToMillisecond(input);
        } else if ($scope.unit === "Minute" && $scope.unit2 === "Microsecond") {
            result = aem_unit_converter.time.MinuteToMicrosecond(input);
        } else if ($scope.unit === "Minute" && $scope.unit2 === "Nanosecond") {
            result = aem_unit_converter.time.MinuteToNanosecond(input);
        } else if ($scope.unit === "Minute" && $scope.unit2 === "Picosecond") {
            result = aem_unit_converter.time.MinuteToPicosecond(input);
        } else if ($scope.unit === "Minute" && $scope.unit2 === "Minute") {
            result = aem_unit_converter.time.MinuteToMinute(input);
        } else if ($scope.unit === "Minute" && $scope.unit2 === "Hour") {
            result = aem_unit_converter.time.MinuteToHour(input);
        } else if ($scope.unit === "Minute" && $scope.unit2 === "Day") {
            result = aem_unit_converter.time.MinuteToDay(input);
        } else if ($scope.unit === "Minute" && $scope.unit2 === "Week") {
            result = aem_unit_converter.time.MinuteToWeek(input);
        } else if ($scope.unit === "Minute" && $scope.unit2 === "Month") {
            result = aem_unit_converter.time.MinuteToMonth(input);
        } else if ($scope.unit === "Minute" && $scope.unit2 === "Year") {
            result = aem_unit_converter.time.MinuteToYear(input);
        }

        // If first unit is Hour
        if ($scope.unit === "Hour" && $scope.unit2 === "Second") {
            result = aem_unit_converter.time.HourToSecond(input);
        } else if ($scope.unit === "Hour" && $scope.unit2 === "Millisecond") {
            result = aem_unit_converter.time.HourToMillisecond(input);
        } else if ($scope.unit === "Hour" && $scope.unit2 === "Microsecond") {
            result = aem_unit_converter.time.HourToMicrosecond(input);
        } else if ($scope.unit === "Hour" && $scope.unit2 === "Nanosecond") {
            result = aem_unit_converter.time.HourToNanosecond(input);
        } else if ($scope.unit === "Hour" && $scope.unit2 === "Picosecond") {
            result = aem_unit_converter.time.HourToPicosecond(input);
        } else if ($scope.unit === "Hour" && $scope.unit2 === "Minute") {
            result = aem_unit_converter.time.HourToMinute(input);
        } else if ($scope.unit === "Hour" && $scope.unit2 === "Hour") {
            result = aem_unit_converter.time.HourToHour(input);
        } else if ($scope.unit === "Hour" && $scope.unit2 === "Day") {
            result = aem_unit_converter.time.HourToDay(input);
        } else if ($scope.unit === "Hour" && $scope.unit2 === "Week") {
            result = aem_unit_converter.time.HourToWeek(input);
        } else if ($scope.unit === "Hour" && $scope.unit2 === "Month") {
            result = aem_unit_converter.time.HourToMonth(input);
        } else if ($scope.unit === "Hour" && $scope.unit2 === "Year") {
            result = aem_unit_converter.time.HourToYear(input);
        }

        // If first unit is Day
        if ($scope.unit === "Day" && $scope.unit2 === "Second") {
            result = aem_unit_converter.time.DayToSecond(input);
        } else if ($scope.unit === "Day" && $scope.unit2 === "Millisecond") {
            result = aem_unit_converter.time.DayToMillisecond(input);
        } else if ($scope.unit === "Day" && $scope.unit2 === "Microsecond") {
            result = aem_unit_converter.time.DayToMicrosecond(input);
        } else if ($scope.unit === "Day" && $scope.unit2 === "Nanosecond") {
            result = aem_unit_converter.time.DayToNanosecond(input);
        } else if ($scope.unit === "Day" && $scope.unit2 === "Picosecond") {
            result = aem_unit_converter.time.DayToPicosecond(input);
        } else if ($scope.unit === "Day" && $scope.unit2 === "Minute") {
            result = aem_unit_converter.time.DayToMinute(input);
        } else if ($scope.unit === "Day" && $scope.unit2 === "Hour") {
            result = aem_unit_converter.time.DayToHour(input);
        } else if ($scope.unit === "Day" && $scope.unit2 === "Day") {
            result = aem_unit_converter.time.DayToDay(input);
        } else if ($scope.unit === "Day" && $scope.unit2 === "Week") {
            result = aem_unit_converter.time.DayToWeek(input);
        } else if ($scope.unit === "Day" && $scope.unit2 === "Month") {
            result = aem_unit_converter.time.DayToMonth(input);
        } else if ($scope.unit === "Day" && $scope.unit2 === "Year") {
            result = aem_unit_converter.time.DayToYear(input);
        }

        // If first unit is Week
        if ($scope.unit === "Week" && $scope.unit2 === "Second") {
            result = aem_unit_converter.time.WeekToSecond(input);
        } else if ($scope.unit === "Week" && $scope.unit2 === "Millisecond") {
            result = aem_unit_converter.time.WeekToMillisecond(input);
        } else if ($scope.unit === "Week" && $scope.unit2 === "Microsecond") {
            result = aem_unit_converter.time.WeekToMicrosecond(input);
        } else if ($scope.unit === "Week" && $scope.unit2 === "Nanosecond") {
            result = aem_unit_converter.time.WeekToNanosecond(input);
        } else if ($scope.unit === "Week" && $scope.unit2 === "Picosecond") {
            result = aem_unit_converter.time.WeekToPicosecond(input);
        } else if ($scope.unit === "Week" && $scope.unit2 === "Minute") {
            result = aem_unit_converter.time.WeekToMinute(input);
        } else if ($scope.unit === "Week" && $scope.unit2 === "Hour") {
            result = aem_unit_converter.time.WeekToHour(input);
        } else if ($scope.unit === "Week" && $scope.unit2 === "Day") {
            result = aem_unit_converter.time.WeekToDay(input);
        } else if ($scope.unit === "Week" && $scope.unit2 === "Week") {
            result = aem_unit_converter.time.WeekToWeek(input);
        } else if ($scope.unit === "Week" && $scope.unit2 === "Month") {
            result = aem_unit_converter.time.WeekToMonth(input);
        } else if ($scope.unit === "Week" && $scope.unit2 === "Year") {
            result = aem_unit_converter.time.WeekToYear(input);
        }

        // If first unit is Month
        if ($scope.unit === "Month" && $scope.unit2 === "Second") {
            result = aem_unit_converter.time.MonthToSecond(input);
        } else if ($scope.unit === "Month" && $scope.unit2 === "Millisecond") {
            result = aem_unit_converter.time.MonthToMillisecond(input);
        } else if ($scope.unit === "Month" && $scope.unit2 === "Microsecond") {
            result = aem_unit_converter.time.MonthToMicrosecond(input);
        } else if ($scope.unit === "Month" && $scope.unit2 === "Nanosecond") {
            result = aem_unit_converter.time.MonthToNanosecond(input);
        } else if ($scope.unit === "Month" && $scope.unit2 === "Picosecond") {
            result = aem_unit_converter.time.MonthToPicosecond(input);
        } else if ($scope.unit === "Month" && $scope.unit2 === "Minute") {
            result = aem_unit_converter.time.MonthToMinute(input);
        } else if ($scope.unit === "Month" && $scope.unit2 === "Hour") {
            result = aem_unit_converter.time.MonthToHour(input);
        } else if ($scope.unit === "Month" && $scope.unit2 === "Day") {
            result = aem_unit_converter.time.MonthToDay(input);
        } else if ($scope.unit === "Month" && $scope.unit2 === "Week") {
            result = aem_unit_converter.time.MonthToWeek(input);
        } else if ($scope.unit === "Month" && $scope.unit2 === "Month") {
            result = aem_unit_converter.time.MonthToMonth(input);
        } else if ($scope.unit === "Month" && $scope.unit2 === "Year") {
            result = aem_unit_converter.time.MonthToYear(input);
        }

        // If first unit is Year
        if ($scope.unit === "Year" && $scope.unit2 === "Second") {
            result = aem_unit_converter.time.YearToSecond(input);
        } else if ($scope.unit === "Year" && $scope.unit2 === "Millisecond") {
            result = aem_unit_converter.time.YearToMillisecond(input);
        } else if ($scope.unit === "Year" && $scope.unit2 === "Microsecond") {
            result = aem_unit_converter.time.YearToMicrosecond(input);
        } else if ($scope.unit === "Year" && $scope.unit2 === "Nanosecond") {
            result = aem_unit_converter.time.YearToNanosecond(input);
        } else if ($scope.unit === "Year" && $scope.unit2 === "Picosecond") {
            result = aem_unit_converter.time.YearToPicosecond(input);
        } else if ($scope.unit === "Year" && $scope.unit2 === "Minute") {
            result = aem_unit_converter.time.YearToMinute(input);
        } else if ($scope.unit === "Year" && $scope.unit2 === "Hour") {
            result = aem_unit_converter.time.YearToHour(input);
        } else if ($scope.unit === "Year" && $scope.unit2 === "Day") {
            result = aem_unit_converter.time.YearToDay(input);
        } else if ($scope.unit === "Year" && $scope.unit2 === "Week") {
            result = aem_unit_converter.time.YearToWeek(input);
        } else if ($scope.unit === "Year" && $scope.unit2 === "Month") {
            result = aem_unit_converter.time.YearToMonth(input);
        } else if ($scope.unit === "Year" && $scope.unit2 === "Year") {
            result = aem_unit_converter.time.YearToYear(input);
        }

        return result;
    };

    return factory;
});