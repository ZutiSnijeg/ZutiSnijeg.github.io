function search(){
    let searchText = document.getElementById("searchInput").value;
    if(document.getElementById("searchInput").value != ""){
        window.open("https://duckduckgo.com/?t=ffab&q=" + searchText, "_self");
        document.getElementById("searchInput").value = "";
    }
}


document.getElementById("searchInput").addEventListener("keydown", e => {
    if (e.keyCode === 13) {
        search();
    }
});

document.getElementById("searchInput").value = "";
