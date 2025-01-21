
document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value === '') {
        console.log('Please Enter a Task')
    } else {
        document.querySelector('#tasks').innerHTML +=
            `<div class='task'>
                <span id='taskname'>
                    ${(document.querySelector('#newtask input').value)}
                </span>
                <button class='delete'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                    </svg>
                </button>
            </div>
            `
    }

    var current_tasks = document.querySelectorAll('.delete')
    for (let index = 0; index < current_tasks.length; index++) {
        current_tasks[index].onclick = function() {
            this.parentNode.remove()
        }
    }
    var tasks = document.querySelectorAll('.task')
    for (let index = 0; index < tasks.length; index++) {
        tasks[index].onclick = function() {
            this.classList.toggle('completed')
        }
    }
}