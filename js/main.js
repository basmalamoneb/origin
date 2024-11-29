



function workCount(){
    var works = document.querySelector("#works").value;
    var result = document.querySelector(".result");

    if(works==""){
        return false;
    }else{
        var myLi = document.createElement("li");
        myLi.innerHTML = works;
        result.append(myLi);
        document.querySelector("#works").value="";
        return false;
    }
    }