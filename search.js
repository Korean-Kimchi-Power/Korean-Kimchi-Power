const search = () => {
    const searchbox = document.getElementById("searchInput").value.toUpperCase();
    const storeitems = document.getElementById("recent")
    const product = document.querySelectorAll(".product, .dongo, .lol")
    const pname = document.getElementsByTagName("div")

    for(var i=0; i <pname.length; i++){
        let match = product[i].getElementsByTagName('div')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
} 