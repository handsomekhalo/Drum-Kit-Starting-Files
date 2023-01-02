let numberOfDrumBtns = document.querySelectorAll(".drum").length;

//detecting button press
for(let x=0; x<numberOfDrumBtns; x++)
{
    document.querySelectorAll(".drum")[x].addEventListener("click" , function()
    {
         let buttonInnerHTML =this.innerHTML;
            
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);

           

    })
}


//detecting keyboard press

document.addEventListener("keydown" , function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
})


//

function makeSound(key){
    switch(key)
    {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
       
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;
      
        case "j":
            let kick= new Audio("./sounds/crash.mp3");
            kick.play();
        break;
        case "k":
            let snare= new Audio("./sounds/snare.mp3");
            snare.play()
        break;
        case "l":
            let crash= new Audio("./sounds/crash.mp3");
            crash.play()
            break;
    default:console.log(buttonInnerHTML);


    }
    
}

function buttonAnimation(currentKey)
{

    let activeButton =document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    } , 100)
}