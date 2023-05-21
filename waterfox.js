sites = ["https://www.youtube.com/", "https://web.whatsapp.com/", "https://www.twitch.tv/", "https://www.chess.com/home", "https://github.com/"];
function search(){
    let searchText = document.getElementById("searchInput").value;
    if(document.getElementById("searchInput").value != ""){
        window.open("https://duckduckgo.com/?t=ffab&q=" + searchText, "_self");
        document.getElementById("searchInput").value = "";
    }
}


document.getElementById("searchInput").addEventListener("keydown", e => {
    //convert asci to normal number
    converted = e.keyCode - 49
    if (e.keyCode === 13) {
        search();
    }
    else if (0 <= converted && converted < sites.length && document.getElementById("searchInput").value == "")
    {
        window.open(sites[converted], "_self");
    }
    console.log(converted);

});

document.getElementById("searchInput").value = "";
