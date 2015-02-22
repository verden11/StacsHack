function unhide(para){
          var name = document.getElementById(para).value;
          var l = name.length;
          var num = para.slice(-1);
          var tickMark = "tc" + num;
          var xMark = "tcx" + num;
          if (name.search(/[^A-Za-z\s]/) == -1 && l > 0) {
             document.getElementById(tickMark).style.display = "";
             document.getElementById(xMark).style.display = "none";
          }else{  
            document.getElementById(xMark).style.display = "";
            document.getElementById(tickMark).style.display = "none";
          }
        }


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function passStr(para,para2){
          var name = document.getElementById(para).value;
          var name2 = document.getElementById(para2).value;
          var l = name.length;
          var num = para.slice(-1);
          var tickMark = "tc" + num;
          var xMark = "tcx" + num;
          if (name.search(/[^A-Za-z\s]/) != -1 && l > 6 && name == name2) {
             document.getElementById(tickMark).style.display = "";
             document.getElementById(xMark).style.display = "none";
          }else{  
            document.getElementById(xMark).style.display = "";
            document.getElementById(tickMark).style.display = "none";
          }
}