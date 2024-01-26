function checkeligibility(){
var age = document.getElementById('age').value;;
if(age<18){
    document.write('You are not eligible to give the vote');
}
else{
    document.write('You are eligible to give the vote');
}
}