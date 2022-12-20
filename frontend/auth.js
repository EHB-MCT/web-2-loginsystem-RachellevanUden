//Check the sessionStorage
let user = JSON.parse(sessionStorage.getItem('user'))

if (user) {
    document.getElementById('welcomeMessage').innerText = `Welcome ${user.username}!`
    //set navigation data
    //fill in username
    //load in user specific date: favorites.
}
/* else {
    window.location.href = "/login.html"
} */