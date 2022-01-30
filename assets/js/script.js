const findAsteroidsBtn = document.querySelector("find-asteroids-btn")


function findAsteroids() {
    let getAsteroidData = function() {
        const apiKey = "KRlgGpEu6OKowfyZvivNPZzrwFZGpxG75OMdlfkl"
        const contentEl = document.querySelector(".content")
        const asteroidLi = document.querySelector(".asteroid-list")
        const errorPEl = document.querySelector(".error-statement")
        let startDate = document.querySelector("#start-date")
        let endDate = document.querySelector("#end-date")
        
        let apiUrl = " https://api.nasa.gov/neo/rest/v1/feed?"
        +"start_date=" + startDate.value
        +"&end_date=" + endDate.value
        +"&api_key=" + apiKey
        
        fetch(apiUrl).then(function(res) {
            if (res.ok) {
                res.json().then(function(data) {
                    console.log(data)
                    // console.dir(data)
                    contentEl.style.display = "none"
                    errorPEl.style.display = "none"
                    let liEL = document.createElement("li")
                    // for (i = 0; i < data.near_earth_objects; i++) {
                        liEL.innerHTML = data.near_earth_objects
                    // }
                    asteroidLi.appendChild(liEL)
                    console.log(data.near_earth_objects)

                })
            } else {
                errorPEl.style.display = 'block'
            }
        })
    }

    getAsteroidData()
}