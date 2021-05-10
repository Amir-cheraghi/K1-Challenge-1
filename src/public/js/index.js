
async function deleteTask(button){
const id = button.attributes["data-url"].nodeValue

const ajax = new XMLHttpRequest()
ajax.open('DELETE',`http://${location.hostname}:3000/api/tasks/${id}`,true)
ajax.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
        console.log('deleted')
        location.reload()
    }
}
ajax.send()
}



















