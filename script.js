
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
                    X
                </button>
            </div>
            `
    }
}