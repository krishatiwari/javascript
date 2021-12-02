const image_array=['g2.jpg', 'g3.jpg', 'g4.jpg', 'g5.jpg', 'g6.jpg']
let array_length =image_array.length
let i=0
let set=setInterval(slider, 2000)
function slider(){
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${image_array[i]}`
}

function next(){
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${image_array[i]}`
}

function prev(){
    i--
    if(i<0){
        i=array_length-1
    }
    document.getElementById('image').src=`images/${image_array[i]}`

}

function stop(){
    clearInterval(set)
}

function start(){
    set=setInterval(slider, 2000)
}