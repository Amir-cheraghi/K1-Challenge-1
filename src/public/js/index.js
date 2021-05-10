
async function deleteTask(e){
const id = e.attributes["data-url"].nodeValue

$.ajax({
    url : `http://${location.hostname}:3000/api/tasks/${id}`,
    type : 'DELETE',
    async : true,
    success : location.reload()

})

    
}



async function editTask(e){
const id = e.attributes["data-url"].nodeValue
const data = {
    name : document.getElementById(`name-${id}`).value,
    description : document.getElementById(`description-${id}`).value,
    type : document.getElementById(`type-${id}`).value,
}

$.ajax({
    type: "PUT",
    url:`http://${location.hostname}:3000/api/tasks/${id}` ,
    async : true,
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
    success : location.reload()

    
 });
}



async function createTask(type){
    const data = {
        name : document.getElementById(`${type}-name`).value,
        description : document.getElementById(`${type}-description`).value,
        type : document.getElementById(`${type}-type`).value,
    }
    
    $.ajax({
        type: "POST",
        url:`http://${location.hostname}:3000/api/tasks` ,
        async : true,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success : location.reload()        
     });
    }





















