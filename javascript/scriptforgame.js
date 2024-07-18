// Creating the program constants.
    // Menu buttons.
    const ingameMenu=document.querySelector("#ingameMenu");
    const displaymenuButton=document.querySelector("#ingameMenu > li:nth-child(1)");
    const menuButton=document.querySelector("#ingameMenu > li:nth-child(2)");
    const pauseButton=document.querySelector("#ingameMenu > li:nth-child(3)");

    // Score table info.
    const score=document.querySelector(".score");
    const fuel=document.querySelector(".fuel")

    // Road.
    const road=document.querySelector("body");

    // User Car.
    const userCar=document.querySelector(".userCar");

    // Point Collector.
    const pointCollector=document.querySelector(".pointCollector");

// Creating the program variables.
let menuClick=false;
let pauseClick=false;
let timeInterval=0;
let notUserCarStep=0;

// Funciones hechas a parte porque JavaScript es marica.
let hover_on = () => {displaymenuButton.style.background= "#9F7A00";};
let hover_off = () => {displaymenuButton.style.background= "#DFAB00";};

// Event to show/hide the menu.
displaymenuButton.addEventListener("click", ()=>{
    if (menuClick==false){
        // Resizing the menu.
        ingameMenu.style.width= "150px";

        // Changing the menu display button icon.
        displaymenuButton.textContent= "↩";
        // Adding Events for hover effect.
        displaymenuButton.addEventListener("mouseover", hover_on)
        displaymenuButton.addEventListener("mouseout", hover_off)

        // Showing the other menu options.
        menuButton.style.display= "flex";
        pauseButton.style.display= "flex";

        // Changing the click value for next use.
        menuClick=true;

    }else{
        // Resizing the menu.
        ingameMenu.style.width= "35px";

        // Changing the menu display button icon.
        displaymenuButton.textContent= "☰";
        // Removing Events for hover effect.
        displaymenuButton.removeEventListener("mouseover", hover_on);
        displaymenuButton.removeEventListener("mouseout", hover_off);
        // Changing the menu display button because it is a different color.
        displaymenuButton.style.background= "#DFAB00";

        // Hiding the other menu options.
        menuButton.style.display= "none";
        pauseButton.style.display= "none";

        //Changing the click value for next use.
        menuClick=false;

    }
});

// Event for player car movement.
road.addEventListener("keydown", (e)=>{
    if ((e.code=="ArrowLeft" || e.code=="KeyA") && userCar.getBoundingClientRect().x>=491.5){ userCar.style.left = userCar.getBoundingClientRect().x - 6 + "px"; }
    if ((e.code=="ArrowRight" || e.code=="KeyD") && userCar.getBoundingClientRect().x<=744){ userCar.style.left = userCar.getBoundingClientRect().x + 6 + "px"; }
    if ((e.code=="ArrowDown" || e.code=="KeyS") && userCar.getBoundingClientRect().y<=494){ userCar.style.top = userCar.getBoundingClientRect().y + 6 + "px"; }
    if ((e.code=="ArrowUp" || e.code=="KeyW") && userCar.getBoundingClientRect().y>=50){ userCar.style.top = userCar.getBoundingClientRect().y - 6 + "px"; }
    if ((e.code=="KeyF") && parseInt(fuel.textContent)>0){ fuel.textContent=parseInt(fuel.textContent)-25 + " %"; }    
});

// Event for spawn the cars in the road and add fuel and points to the score table.
setInterval(()=>{
    // Adding 1 more for the time interval;
    timeInterval++;

    if (timeInterval%35==0){
        // Creating the car that will enter the road against traffic.
        let notUserCar=document.createElement('div');

        // Granting the "notUserCar" class to automatically add styles to it.
        notUserCar.setAttribute("class", "notUserCar");
        
        // Giving the car a texture.
        switch ((Math.floor(Math.random()*(14-1+1)) + 1)){
            case 1:
                notUserCar.style.background="url(../sources/car1.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCarStep=8;
                break;
            case 2:
                notUserCar.style.background="url(../sources/car2.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCarStep=8;
                break;
            case 3:
                notUserCar.style.background="url(../sources/car3.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCarStep=8;
                break;
            case 4:
                notUserCar.style.background="url(../sources/car4.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCarStep=8;
                break;
            case 5:
                notUserCar.style.background="url(../sources/car5.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCarStep=7;
                break;
            case 6:
                notUserCar.style.background="url(../sources/car6.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCarStep=10;
                break;
            case 7:
                notUserCar.style.background="url(../sources/car7.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCarStep=10;
                break;
            case 8:
                notUserCar.style.background="url(../sources/car8.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCarStep=8;
                break;
            case 9:
                notUserCar.style.background="url(../sources/car9.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCarStep=7;
                break;
            case 10:
                notUserCar.style.background="url(../sources/car10.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCarStep=17;
                break;
            case 11:
                notUserCar.style.background="url(../sources/car11.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCarStep=8;
                break;
            case 12:
                notUserCar.style.background="url(../sources/car12.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCar.style.height="250px"
                notUserCar.style.width="160px"
                notUserCarStep=5;
                break;
            case 13:
                notUserCar.style.background="url(../sources/car13.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCar.style.height="200px"
                notUserCar.style.width="120px"
                notUserCarStep=5;
                break;
            case 14:
                notUserCar.style.background="url(../sources/car14.png) no-repeat";
                notUserCar.style.backgroundPosition="center";
                notUserCar.style.backgroundSize="contain";
                notUserCarStep=8;
                break;
        }
        
        // Adding the vehicle on the road
        road.appendChild(notUserCar);

        // Positioning the vehicle on some random side of the road.
        notUserCar.style.left=(Math.floor(Math.random()*(744.5-491.5+1)) + 491.5)+"px";
        notUserCar.style.top="-150px";
    }

    // Selecting all cars that the user does not drive.
    let notUserCars=document.querySelectorAll('.notUserCar');

    // Sentence that allows us to work one by one each element with a common class.
    notUserCars.forEach(notUserCar => {
        // Line of code that allows the car to reach the point collector.
        notUserCar.style.top=(notUserCar.getBoundingClientRect().y+10)+'px';

        // Evaluando si existe una colisión
        notUserCars.forEach(car => {
            if (
                ((car.getBoundingClientRect().left < userCar.getBoundingClientRect().left && car.getBoundingClientRect().left < userCar.getBoundingClientRect().right) &&
                (car.getBoundingClientRect().right < userCar.getBoundingClientRect().right && car.getBoundingClientRect().right > userCar.getBoundingClientRect().left) &&
                (car.getBoundingClientRect().top < userCar.getBoundingClientRect().top && car.getBoundingClientRect().top < userCar.getBoundingClientRect().bottom) && 
                (car.getBoundingClientRect().bottom < userCar.getBoundingClientRect().bottom && car.getBoundingClientRect().bottom > userCar.getBoundingClientRect().top))
                || (
                (car.getBoundingClientRect().right > userCar.getBoundingClientRect().left && car.getBoundingClientRect().right > userCar.getBoundingClientRect().right) &&
                (car.getBoundingClientRect().left < userCar.getBoundingClientRect().right && car.getBoundingClientRect().left > userCar.getBoundingClientRect().left) &&
                (car.getBoundingClientRect().top < userCar.getBoundingClientRect().top && car.getBoundingClientRect().top < userCar.getBoundingClientRect().bottom) && 
                (car.getBoundingClientRect().bottom < userCar.getBoundingClientRect().bottom && car.getBoundingClientRect().bottom > userCar.getBoundingClientRect().top)
                )

            ){
                score.textContent="0 pts";
            }
        })

        // Evaluating whether the car that is going against the user's path has already reached the point collector.
        if (notUserCar.getBoundingClientRect().top > pointCollector.getBoundingClientRect().bottom){

            // Changing the score.
            score.textContent=(parseInt(score.textContent)+1)+" pts";

            // Removing the car 'cause is useless,
            notUserCar.remove();

            // If the user reach another 5 points for his score the program will give him "fuel", the "fuel" give him immunity.
            if (parseInt(score.textContent)%5==0 && parseInt(fuel.textContent)<100){
                fuel.textContent=(parseInt(fuel.textContent)+25)+" %";
            }
        }
    })
},100);
