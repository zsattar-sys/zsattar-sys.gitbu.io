const cities = [
{ name:"New York", zone:"America/New_York" },
{ name:"Dallas", zone:"America/Chicago" },
{ name:"Los Angeles", zone:"America/Los_Angeles" },
{ name:"Miami", zone:"America/New_York" },
{ name:"London", zone:"Europe/London" },
{ name:"Shanghai", zone:"Asia/Shanghai" },
{ name:"Sydney", zone:"Australia/Sydney" },
{ name:"Hong Kong", zone:"Asia/Hong_Kong" },
{ name:"Singapore", zone:"Asia/Singapore" },
{ name:"Paris", zone:"Europe/Paris" },
{ name:"Amsterdam", zone:"Europe/Amsterdam" },
{ name:"Zurich", zone:"Europe/Zurich" },
{ name:"Cape Town", zone:"Africa/Johannesburg" },
{ name:"Riyadh", zone:"Asia/Riyadh" },
{ name:"San Salvador", zone:"America/El_Salvador" },
{ name:"Sao Paulo", zone:"America/Sao_Paulo" },
{ name:"Toronto", zone:"America/Toronto" },
{ name:"Tokyo", zone:"Asia/Tokyo" },
{ name:"Kuala Lumpur", zone:"Asia/Kuala_Lumpur" },
{ name:"Islamabad", zone:"Asia/Karachi" },
{ name:"New Delhi", zone:"Asia/Kolkata" },
{ name:"Stockholm", zone:"Europe/Stockholm" },
{ name:"Antwerp", zone:"Europe/Brussels" },
{ name:"Berlin", zone:"Europe/Berlin" },
{ name:"Moscow", zone:"Europe/Moscow" },
{ name:"Venice", zone:"Europe/Rome" }
];

const container = document.getElementById("clocks");

cities.forEach(city=>{
    const card=document.createElement("div");
    card.className="clock-card";

    card.innerHTML=`
        <div class="city">${city.name}</div>
        <div class="time" id="time-${city.name}"></div>
        <div class="date" id="date-${city.name}"></div>
    `;

    container.appendChild(card);
});

function updateClocks(){
    const now=new Date();

    cities.forEach(city=>{
        const time=new Intl.DateTimeFormat("en-US",{
            timeZone:city.zone,
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit",
            hour12:true
        }).format(now);

        const date=new Intl.DateTimeFormat("en-US",{
            timeZone:city.zone,
            weekday:"short",
            month:"short",
            day:"numeric"
        }).format(now);

        document.getElementById(`time-${city.name}`).textContent=time;
        document.getElementById(`date-${city.name}`).textContent=date;
    });
}

setInterval(updateClocks,1000);
updateClocks();

document.getElementById("search").addEventListener("input",e=>{
    const value=e.target.value.toLowerCase();
    document.querySelectorAll(".clock-card").forEach(card=>{
        card.style.display =
            card.textContent.toLowerCase().includes(value)
            ? "block":"none";
    });
});
