async function getData(){
    var country = document.getElementById('country').value;
    var from = document.getElementById('from_time').value;
    var till = document.getElementById('end_time').value;
    var cl = country.toLowerCase()

    if(country=="" || from=="" || till==""){
        alert("Enter Required Field")
    }else{
        let respose = await fetch('https://api.covid19api.com/country/'+cl+'?from='+from+'T00:00:00Z&to='+till+'T00:00:00Z')
        console.log(respose)
        let data = await respose.json();
        console.log(data);

        let length = data.length
        let index = length - 1

        let con = document.getElementById("con")
        let rev = document.getElementById("rev")
        let d = document.getElementById("death")

        con.innerHTML=""
        rev.innerHTML=""
        d.innerHTML=""

        con.append("Confirmed cases - "+data[index].Confirmed)
        rev.append("Active cases - "+data[index].Active)
        d.append("Deaths cases - "+data[index].Deaths)
    }
    //let respose = await fetch('https://api.covid19api.com/dayone/country/'+country)
    
}