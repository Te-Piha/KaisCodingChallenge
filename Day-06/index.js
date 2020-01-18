function startTime(){
    var time = new Date()
    var h = time.getHours()
    var m = time.getMinutes()

    m = checkTime(m)

    document.getElementById('clock').innerHTML = h + ":" + m
  }

  function checkTime(i){
    if (i < 10) {i = "0" + i}
    return i
  }