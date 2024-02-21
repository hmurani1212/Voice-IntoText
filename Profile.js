console.log("I am your Profile");
const userPofile = async () => {
    const useremail = localStorage.getItem("useremail");
    const username = localStorage.getItem("username")
    const myname = document.getElementById("myname");
    const myemail = document.getElementById("myemail");
    myname.innerHTML = "Name: " + username;
    myemail.innerHTML = "Email: " + useremail;
}

userPofile();

const song = document.getElementById("song") 
const songs = ["song1", "song2", "song3", "song4", "song5", "song6", "song7", "song8", "song9"];
let currentIndex =1;
song.innerHTML= songs[0];
const deletAccount = document.getElementById("deletAccount");
deletAccount.addEventListener('click', () => {
    song.innerHTML= songs[currentIndex];
//Increment index and wrap around if it exceeds the array  length
    currentIndex = (currentIndex + 1) % songs.length;
});


