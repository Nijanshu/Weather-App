let dat=new Date
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// alert(dat)
let day=String(dat.getDate())+" "+String(month[dat.getMonth()])+ " " +String(dat.getFullYear())
// alert(day)
document.getElementById('dat').innerHTML=day

// let url=wthr.json
function tm(){
    let city=document.getElementById('city').value;
    let url='https://api.weatherbit.io/v2.0/current?city='+city+'&key=ea48ff968c7e41a09e01a7749a53405f'
    // alert(city)
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url)
    xhr.send()
    xhr.onreadystatechange = function(){
        // if(this.readyState==4 && this.status==200){
            if(this.readyState==4 && this.status==200){
                let obj=JSON.parse(this.responseText);
                // alert(obj.data[0].temp)
                document.getElementById("ttp").innerHTML=obj.data[0].temp
                document.getElementById("aqi").innerHTML=obj.data[0].aqi
                document.getElementById("lat").innerHTML=obj.data[0].lat
                document.getElementById("lon").innerHTML=obj.data[0].lon
                document.getElementById("TZ").innerHTML=obj.data[0].timezone
                document.getElementById("cy").innerHTML=obj.data[0].city_name

            // document.getElementById("email").innerHTML=obj.data.email
        }}
          }


    function clock(){
        let date=new Date();
           let hr=date.getHours();
            let min=date.getMinutes();
            let sec=date.getSeconds();
            document.getElementById('clock').innerHTML=`${hr}:${min}:${sec}`
        }

    setInterval(clock, 1000);
    clock()
   