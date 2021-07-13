document.addEventListener("pointerup", function(event){ 
    
    operateButton(event.target), {passive:false}
    }
);

function operateButton(pressedElem){

    if(!pressedElem.classList.contains('act-click')){
        return;
    }
    else if(pressedElem === document.getElementById('btn_proj_a')){
        
        classToggle('pop_project_a', 'dont-show');
    }
    else if(pressedElem === document.getElementById('btn_proj_b')){
        
        classToggle('pop_project_b', 'dont-show');
    }
    else if(pressedElem.classList.contains('btn--close-proj')){
        
        closePopUp();
    }
    else{
        /* console.log('RAN'); */
        return;
    }
}

function classToggle(elemID, toggledClass){
    let toggledElem = document.getElementById(elemID);
    let overallOvl = document.getElementById('overall_ovl');

    toggledElem.classList.toggle(toggledClass);
    overallOvl.classList.toggle(toggledClass);
    /* console.log('YUP'); */
}

function closePopUp(){

    let popUpList = document.getElementsByClassName('project--popup');
    let overallOvl = document.getElementById('overall_ovl');
    

    for (i = 0; i < popUpList.length; i++){
        
        popUpList[i].classList.add('dont-show');
        overallOvl.classList.add('dont-show');
    }
}