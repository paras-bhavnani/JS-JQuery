qTeams = {aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
    };

function sortDescendingOrder(qTeams){
    const sorted = Object.keys(qTeams).sort(function(a,b){
        return qTeams[a] - qTeams[b]
    })
    console.log(sorted.reverse());  
}

sortDescendingOrder(qTeams);