let count = 0;
function minus(){
    const counter = document.getElementById('counter');
    count--;
    counter.textContent = count;
    if(count < 0){
        counter.style.color = "red";
    }
    if(count === 0){
        counter.style.color = "black";
    }
}
function add(){
    const counter = document.getElementById('counter');
    count++;
    counter.textContent = count;
    if(count > 0){
        counter.style.color = "green";
    }
    if(count === 0){
        counter.style.color = "black";
    }
}
