const counter = document.querySelector("#counter");
async function updateCounter() {
    let response = await fetch("https://tx9fy31q72.execute-api.us-east-1.amazonaws.com/testCloudResumeAPI/", {method: 'GET'});
    let data = await response.json();
    counter.innerHTML = "Views: " + data
}

updateCounter();