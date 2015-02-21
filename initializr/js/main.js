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
