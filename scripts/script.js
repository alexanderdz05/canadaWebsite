

// change provinces:
function changeProvince() {
    let selectElement = document.querySelector("#dropdown").value;
    let hiddenElementOne = document.querySelector('#dropdown');
    let hiddenElementTwo = document.querySelector('#changeProvince');
    let escapeButton = document.querySelector('#escape-button');
    let directions = document.querySelector('#directions');
    document.querySelector("#selected").textContent = selectElement;
    let time = document.querySelector("#time");
    let timer;
    
    switch (selectElement) {
        case "Canada":
            hideElements();
            // set timezones:
            time.textContent = "Resetting...";
            time.textContent = "There are different time zones in Canada!";
            
            // sets the JSON:
            getJSON(0);
            
            // reset timer
            setTimeout(reload, 180000);
        break;
        
        case "Alberta":
            hideElements();
            // Set timezone:
            time.textContent = "Resetting...";
            let edmonton_Offset = -6;
            timer = setInterval(function() {
                formatTime(edmonton_Offset);
            }, 1000);

            // sets the JSON:
            getJSON(1);

            // reset timer
            setTimeout(reload, 180000);
            break;
        
        case "British Columbia":
            hideElements();
            
            // Set timezone:
            time.textContent = "Resetting...";
            let vancouver_Offset = -7;
            timer = setInterval(function() { 
                formatTime(vancouver_Offset); 
            }, 1000);
            
            // sets the JSON:
            getJSON(2);

            // reset timer
            setTimeout(reload, 180000);
            break;

        case "Manitoba":
            hideElements();
            // Set timezone:
            time.textContent = "Resetting...";
            let winnipeg_Offset = -5;
            timer = setInterval(function() {
                formatTime(winnipeg_Offset);
            }, 1000);

            // sets the JSON:
            getJSON(3);

            // rest timer
            setTimeout(reload, 180000);
            break;
        
        case "New Brunswick":
            hideElements();
            // Set timezone:
            time.textContent = "Resetting...";
            let fredericton_Offset = -3;
            timer = setInterval(function() {
                formatTime(fredericton_Offset);
            }, 1000);

            // gets JSON:
            getJSON(4);

            // rest timer
            setTimeout(reload, 180000);
            break;
        
        case "Newfoundland and Labrador":
            hideElements();
            // Set timezone:
            time.textContent = "Resetting...";
            let stJohns_Offset = -2.5;
            timer = setInterval(function() {
                formatTime(stJohns_Offset);
            }, 1000);

            // gets JSON:
            getJSON(5);
            // rest timer
            setTimeout(reload, 180000);
            break;
        
        case "Northwest Territories":
            hideElements();
            // Set timezone:
            time.textContent = "Resetting...";
            let yellowknife_Offset = -6;
            timer = setInterval(function() {
                formatTime(yellowknife_Offset);
            }, 1000);
            // gets JSON:
            getJSON(6);

            // rest timer
            setTimeout(reload, 180000);
            break;

        case "Nova Scotia":
            hideElements();
            // Set timezone:
            time.textContent = "Resetting...";
            let halifax_Offset = -3;
            timer = setInterval(function() {
                formatTime(halifax_Offset);
            }, 1000);
            // gets JSON:
            getJSON(7);
            // rest timer
            setTimeout(reload, 180000);
            break;

        case "Nunavut":
            hideElements();
            // Set timezone:
            time.textContent = "Resetting...";
            let iqaluit_Offset = -4;
            timer = setInterval(function() {
                formatTime(iqaluit_Offset);
            }, 1000);
            // gets JSON:
            getJSON(8);

            // rest timer
            setTimeout(reload, 180000);
            break;

        case "Ontario":
            hideElements();
            // Set timezone:
            time.textContent = "Resetting...";
            let toronto_Offset = -4;
            timer = setInterval(function() {
                formatTime(toronto_Offset);
            }, 1000);
            // gets JSON:
            getJSON(9);
            // rest timer
            setTimeout(reload, 180000);
            break;

        case "Prince Edward Island":
            hideElements();
            // Set timezone:
            time.textContent = "Resetting...";
            let charlottetown_Offset = -3;
            timer = setInterval(function() {
                formatTime(charlottetown_Offset);
            }, 1000);
            // gets JSON:
            getJSON(10);
            // rest timer
            setTimeout(reload, 180000);
            break;

        case "Québec":
            hideElements();
            // Set timezone:
            time.textContent = "Resetting...";
            let montreal_Offset = -4;
            timer = setInterval(function() {
                formatTime(montreal_Offset);
            }, 1000);
            //gets JSON:
            getJSON(11);
            // rest timer
            setTimeout(reload, 180000);
            break;
        
        case "Saskatchewan":
            hideElements();
            // Set timezone:
            time.textContent = "Resetting...";
            let regina_Offset = -6;
            timer = setInterval(function() {
                formatTime(regina_Offset);
            }, 1000);
            // gets JSON:
            getJSON(12);
            // rest timer
            setTimeout(reload, 180000);
            break;

        case "Yukon":
            hideElements();
            // Set timezone:
            time.textContent = "Resetting...";
            let whitehorse_Offset = -7;
            timer = setInterval(function() {
                formatTime(whitehorse_Offset);
            }, 1000);
            // gets JSON:
            getJSON(13);
            // rest timer
            setTimeout(reload, 180000);
            break;
        
        default:
            hideElements();
            directions.textContent = "This page will be exited in 5 seconds due to an error. Sorry.";
            // Set timezone:
            time.textContent = "Error displaying time...";
            // reset Timer
            setTimeout(reload, 5000);
            break;
    }

    function hideElements() {
        hiddenElementOne.style.display = "none";
        hiddenElementTwo.style.display = "none";
        directions.textContent = "This page will automatically be exited in 3 minutes for you to read and explore! To escape earlier, press the button!";
        escapeButton.style.display = "flex";
        escapeButton.style.justifyContent = "center";
        escapeButton.style.alignItems = "center";
        escapeButton.style.padding = "10px 20px";
        escapeButton.style.fontSize = "16px";
        escapeButton.style.fontWeight = "bold";
        escapeButton.style.textAlign = "center";
        escapeButton.style.textDecoration = "none";
        escapeButton.style.backgroundColor = "#d52b1e";
        escapeButton.style.color = "white";
        escapeButton.style.border = "none";
        escapeButton.style.borderRadius = "5px";
        escapeButton.style.transition = "background-color 0.3s ease";

        escapeButton.addEventListener("mouseover", function() {
            escapeButton.style.backgroundColor = "#c3141f";
            escapeButton.style.cursor = "pointer";
        });

        escapeButton.addEventListener("mouseout", function() {
            escapeButton.style.backgroundColor = "#d52b1e";
        });
    }

    
}   


function formatTime(offset) {
    let d = new Date();

    let utc_Offset = d.getTimezoneOffset();
    d.setMinutes(d.getMinutes() + utc_Offset);
    

    let prov_offset = offset * 60;
    d.setMinutes(d.getMinutes() + prov_offset);
    
    let hour = d.getHours();
    if (hour < 10) {
        hour = '0' + hour;
    }
    
    let minute = d.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }
    
    let second = d.getSeconds(); 
    if (second < 10) {
        second = '0' + second;
    }

    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let day = d.getDay();
    let endingSound;

    // fix the day of the week:
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let a = 0; a < days.length; a++) {
        if (day == a) {
            day = days[a]; 
        }      
    }

    // fix the month of the year:
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let b = 0; b < months.length; b++) {
        if (month == b) {
            month = months[b];
        }
    }

    // fix ending sound:
    if (date == 1 || date == 21 || date == 31) {
        endingSound = "st";
    } else if (date == 2 || date == 22) {
        endingSound = "nd";
    } else if (date == 3 || date == 23) {
        endingSound = "rd";
    } else if (date == 4 || date == 5 || date == 6 || date == 7 || date == 8 || date == 9 || date == 10 || date == 11 || date == 12 || date == 13 || date == 14 || date == 15 || date == 16 || date == 17 || date == 18 || date == 19 || date == 20 || date == 24 || date == 25 || date == 26 || date == 27 || date == 28 || date == 29 || date == 30) {
        endingSound = "th";
    }
    
    time.textContent = `${day}, ${month} ${date}${endingSound}, ${year}; Current Time: ${hour}:${minute}:${second}`;
}

function stopTimer(timer) {
    clearInterval(timer);
}

function reload() {
    window.location.reload();
}



function getJSON(index) {
    // Images and Paragraphs:
    let provinceImage = document.querySelector("#province_image");
    let generalInfo = document.querySelector("#general-info");
    let capitalImage = document.querySelector("#capital-image");
    let capitalInfo = document.querySelector("#capital-info");
    let politicianImage = document.querySelector("#politician-image");
    let politicalInfo = document.querySelector("#political-info");
    // Display text for general information:
    let capital = document.querySelector("#capital-city");
    let popularCity = document.querySelector("#popular-city");
    let size = document.querySelector("#size");
    let language = document.querySelector("#official-language");
    let population = document.querySelector("#population");
    let abbreviation = document.querySelector("#abbreviation");
    // Fun Facts:
    let factOne = document.querySelector("#factOne");
    let factTwo = document.querySelector("#factTwo");
    let factThree = document.querySelector("#factThree");
    let factFour = document.querySelector("#factFour");
    let factFive = document.querySelector("#factFive");
    // Fun Facts Images:
    let factOneImage = document.querySelector("#imageOne");
    let factTwoImage = document.querySelector("#imageTwo");
    let factThreeImage = document.querySelector("#imageThree");
    let factFourImage = document.querySelector("#imageFour");
    let factFiveImage = document.querySelector("#imageFive");
    // Video:
    let video = document.querySelector("#video");
    
    fetch("data/data.json")
        .then(response => response.json())
        .then(data => {
            // Images and Paragraphs:
            provinceImage.style.backgroundImage = `url('${data[index].provinceImage}')`;
            provinceImage.textContent = `${data[index].provinceImageDesc}`;
            generalInfo.textContent = `${data[index].generalInfo}`;
            capitalImage.style.backgroundImage = `url('${data[index].capitalImage}')`;
            capitalImage.textContent = `${data[index].capitalImageDesc}`;
            capitalInfo.textContent = `${data[index].capitalInfo}`;
            politicianImage.style.backgroundImage = `url('${data[index].politicianImage}')`;
            politicianImage.textContent = `${data[index].politicianImageDesc}`;
            politicalInfo.textContent = `${data[index].politicalInfo}`;
            // Display text for general information:
            capital.textContent = `Capital: ${data[index].capital}`;
            popularCity.textContent = `Most Popular City: ${data[index].popularCity}`;
            size.textContent = `Size: ${data[index].size}`;
            language.textContent = `Language(s): ${data[index].language}`;
            population.textContent = `Population: ${data[index].population}`;
            abbreviation.textContent = `Abbreviation: ${data[index].abbreviation}`;
            // Fun Facts:
            factOne.textContent = `${data[index].factOne}`;
            factTwo.textContent = `${data[index].factTwo}`;
            factThree.textContent = `${data[index].factThree}`;
            factFour.textContent = `${data[index].factFour}`;
            factFive.textContent = `${data[index].factFive}`;
            // Fun Facts images:
            factOneImage.style.backgroundImage = `url('${data[index].factOneImage}')`;
            factTwoImage.style.backgroundImage = `url('${data[index].factTwoImage}')`;
            factThreeImage.style.backgroundImage = `url('${data[index].factThreeImage}')`;
            factFourImage.style.backgroundImage = `url('${data[index].factFourImage}')`;
            factFiveImage.style.backgroundImage = `url('${data[index].factFiveImage}')`;
            // Video:
            video.src = `${data[index].video}`;
        })
    
    let r = 0;
    let g = 0;
    let b = 0;

    function change() {
        capital.style.color = colorChangeBlue();
        popularCity.style.color = colorChangeGreen();
    }

    function colorChangeBlue() {
        r < 256 ? r = 0 : r = 0;
        g < 256 ? g = 0 : g = 0;
        b < 256 ? b += 2 : b = 0;
        return color = `rgb(${r}, ${g}, ${b})`;
    }

    function colorChangeGreen() {
        r < 256 ? r = 0 : r = 0;
        g < 256 ? g += 2 : g = 0;
        b < 256 ? b = 0 : b = 0;
        return color = `rgb(${r}, ${g}, ${b})`;
    }

    function colorChangeRed() {
        r < 256 ? r += 2 : r = 0;
        g < 256 ? g = 0 : g = 0;
        b < 256 ? b = 0 : b = 0;
        return color = `rgb(${r}, ${g}, ${b})`;
    }
    
    setInterval(change, 100);
}


function escape() {
    window.location.reload();
}



