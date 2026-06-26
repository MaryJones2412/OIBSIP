function convertTemperature() {

    const temp = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;

    const error = document.getElementById("error");

    const celsius = document.getElementById("celsiusResult");
    const fahrenheit = document.getElementById("fahrenheitResult");
    const kelvin = document.getElementById("kelvinResult");

    error.innerHTML = "";

    if (isNaN(temp)) {
        error.innerHTML = "⚠ Please enter a valid numeric temperature.";
        resetResults();
        return;
    }

    let c, f, k;

    if (unit === "celsius") {

        if (temp < -273.15) {
            error.innerHTML = "❌ Temperature cannot be below absolute zero (-273.15°C).";
            resetResults();
            return;
        }

        c = temp;
        f = (temp * 9 / 5) + 32;
        k = temp + 273.15;
    }

    else if (unit === "fahrenheit") {

        if (temp < -459.67) {
            error.innerHTML = "❌ Temperature cannot be below absolute zero (-459.67°F).";
            resetResults();
            return;
        }

        c = (temp - 32) * 5 / 9;
        f = temp;
        k = c + 273.15;
    }

    else {

        if (temp < 0) {
            error.innerHTML = "❌ Temperature cannot be below absolute zero (0 K).";
            resetResults();
            return;
        }

        c = temp - 273.15;
        f = (c * 9 / 5) + 32;
        k = temp;
    }

    celsius.innerHTML = c.toFixed(2) + " °C";
    fahrenheit.innerHTML = f.toFixed(2) + " °F";
    kelvin.innerHTML = k.toFixed(2) + " K";
}

function resetFields() {

    document.getElementById("temperature").value = "";
    document.getElementById("unit").selectedIndex = 0;
    document.getElementById("error").innerHTML = "";

    resetResults();
}

function resetResults() {

    document.getElementById("celsiusResult").innerHTML = "-- °C";
    document.getElementById("fahrenheitResult").innerHTML = "-- °F";
    document.getElementById("kelvinResult").innerHTML = "-- K";
}