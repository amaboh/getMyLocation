const findMyState =()=>{
    const status = document.querySelector(".status");

    const success = (position)=>{
        console.log(position)
    }

    const error=()=>{
        status.innerHTML = "Unable to retrieve your location";
    }

    navigator.geolocation.getCurrentPosition(success, error);
}


document.querySelector(".find-state").addEventListener("click", findMyState);