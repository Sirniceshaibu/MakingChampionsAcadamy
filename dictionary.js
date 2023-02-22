// const url = "https:/api.dictionaryapi.dev/api/v2/entries/en";
// const result = document.getElementById("result");
// const sound = document.getElementById("sound");
// const btn = document.getElementById("search-btn");

// btn.addEventListener("click", () => {
//     let inpword = document.getElementById("inp-word").value;
//     fetch('${url}${inpword}')
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
    

// })




// document.getElementById("meaning-container").style.display = "none";
async function getMeaning(){
    const input = document.getElementById("input").value;
    if(input.length >0){
        try{
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
            const response = await axios.get(url);
            const data = response.data[0];
            console.log(response);
            

            // document.getElementById("meaning-container").style.display = "block";

            document.getElementById("word").innerHTML = data.word;
            document.getElementById("definition").innerHTML = data.meanings[0].definitions[0].definition;
            document.getElementById("audio").src = data.phonetics[0].audio;

            document.getElementById("error").innerHTML = "";
        }catch(error){
            document.getElementById("error").innerHTML = error;
        }
    }else{
        document.getElementById("error").innerHTML = "please enter a word";
    }

}