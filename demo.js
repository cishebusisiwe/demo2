let images = [
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Lira_%28South_African_singer%29.jpg",
    "https://lh3.googleusercontent.com/j9SJF-F_9wtPW3Z_HWxtyNELQMqq7OeEhjy_OBIO96VowGZ8c4S1tAM5N--q6u2zK-0158bztdEiuzg5R0QVSbZZEqCBwG0V=s1500-pp",
    "https://lh3.googleusercontent.com/IwBBGKDsikelJZkpWoUivX5GVDsxrG9mzrr88W6_2apJdA0vSN0YVy8o_dRVqVNJlAtPuWBeNAU12VZEZlSq83UdEVlTuHmXeg=s1500-pp"
]
    let num = 0
    const slider = document.getElementById("slider")

function next (){
    num++
    if(num >=images.length){
        num=0
    }
    slider.src = images[num]
}

    function prev (){
        num--
        if(num < 0){
            num = 2
        }
        slider.src = images[num]
    }