let rawData = document.getElementById("given-data").innerHTML;


function extract(rawData){
    sentences = rawData.split(/[!?.]/);
    let temp;
    answer = []
    // Task1
    sentences.forEach(element => {
        element = element.trim();
        temp = element.split(" ");
        if (temp.length > 3){    
            answer.push(element);
        }    
    });
    // Task 2
    let filteredAnswer = [];
    answer.forEach(answer1 => {
        answer1 = answer1.replace(/\d+/,"XXXXXXXXXX");
        filteredAnswer.push(answer1);
    })
    let displayText = "";
    for (let i = 0; i < filteredAnswer.length; i++){
        displayText = displayText + (i+1) + " " + filteredAnswer[i] +  "<br></br>"
    }
    document.getElementById("final-data").innerHTML = displayText;
    return displayText;
}
extract(rawData);
//document.getElementById("final-data").innerHTML = extract(rawData);