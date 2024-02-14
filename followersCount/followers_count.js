let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue (){
    if (count == 10) {
        alert("your instargrame post gained 10 followers! Congratulations!");
    } else if (count ==20) {
        alert("your instargrame post gained 20 followers! Keep it up!");
    }
}