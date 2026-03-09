
const btnGenerate = document.querySelector("#generate_shape");
btnGenerate.addEventListener("click",(e)=>{
   
    e.preventDefault();
    document.querySelector(".container").textContent="";
    const no_of_shape = parseInt((document.querySelector("#no_of_shape").value).trim());
    const shape_type = (document.querySelector("#shape_type").value).trim();
    const shape_color = (document.querySelector("#shape_color").value).trim();

    if(isInRange(no_of_shape,1,10)){

          switch(shape_type){
            case "triangle":
                generateTriangle(no_of_shape,shape_color,shape_type);
                clearInputs();
                break;
            case "square":
                generateSquare(no_of_shape,shape_color,shape_type);
                clearInputs();
                break;
            case "circle":
                generateCircle(no_of_shape,shape_color,shape_type);
                clearInputs();
                break;
            default:
                handleDefault();
                clearInputs();
                break;
        }
    }else{
        const container = document.querySelector(".container");
        container.textContent= "You can enter no of shapes between 1-10";
        clearInputs();
    }

});

function clearInputs(){
    document.getElementById("myfrm").reset();
}

 function generateTriangle(shape, color,type){
    for(let i=0;i<shape;i++){
         const shapeDiv = document.createElement("div");
         shapeDiv.classList.add("triangle");
         shapeDiv.style.borderBottom = `100px solid ${color}`;
         const container = document.querySelector(".container");
         container.appendChild(shapeDiv);
    } 
}

function generateSquare(shape, color,type){
    for(let i=0;i<shape;i++){
         const shapeDiv = document.createElement("div");
         shapeDiv.style.backgroundColor = `${color}`;
         shapeDiv.classList.add("square");
         const container = document.querySelector(".container");
         container.appendChild(shapeDiv);
    } 
}

function generateCircle(shape, color,type){
    for(let i=0;i<shape;i++){
         const shapeDiv = document.createElement("div");
         shapeDiv.style.backgroundColor = `${color}`;
         shapeDiv.classList.add("circle");
         const container = document.querySelector(".container");
         container.appendChild(shapeDiv);
    } 
}

function handleDefault(){
    const container = document.querySelector(".container");
    container.textContent="Either you have entered wrong input or misspelled (No of shapes, shape type or shape color. Please check end retry.";  
}

function isInRange(value, min, max) {
return isValidNumber(value) && value >= min && value <= max;
}

function isValidNumber(value) {
// Check if the type is 'number' AND it's not Infinity or NaN
return typeof value === 'number' && Number.isFinite(value);
}


