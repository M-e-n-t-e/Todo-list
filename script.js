window.addEventListener('load', () => {

    const submit = document.querySelector('.submit-button');
    const task_list = document.querySelector('.task-list');
    const user_input_area = document.querySelector('.todo-input');
    
    submit.addEventListener('click', (e) => {
        e.preventDefault();

        const user_todo = user_input_area.value;

        if(!user_todo){
            alert('No plans? 🤨');
            return;
        }

        
        const indiv_task = document.createElement('div');
        indiv_task.classList.add('task');

        const check_mark = document.createElement('i');
        check_mark.classList.add('fa', 'fa-check');


        const content = document.createElement('textarea');
        content.classList.add('content');
        content.value = user_todo;
        content.type = 'text';
        content.setAttribute('readonly', 'readonly');

        const actions = document.createElement('div');
        actions.classList.add('actions')

        const edit_el = document.createElement('button');
        edit_el.classList.add('edit');
        edit_el.innerText = 'Edit';


        const delete_el = document.createElement('button');
        delete_el.classList.add('delete');
        delete_el.innerText = 'Delete';

        actions.appendChild(edit_el)
        actions.appendChild(delete_el)


        indiv_task.appendChild(check_mark);
        indiv_task.appendChild(content);
        indiv_task.appendChild(actions);
        task_list.appendChild(indiv_task);


        check_mark.addEventListener('click', () => {
            check_mark.classList.toggle('active');
            content.classList.toggle('active');
        })


        edit_el.addEventListener('click', () => {

            if(check_mark){
                check_mark.classList.remove('active');
                content.classList.remove('active');
            }
            if(!content.value){
                const items = Array('Stop playing dumbass 💀', 'goofy a$$ mf 😂', 'Stop it, get some help', 'ooooooow my gawd!!')
                content.value = items[Math.floor(Math.random()*items.length)];
            }
            if(edit_el.innerText.toLowerCase() == 'edit'){
                edit_el.innerText = 'Save';
                content.removeAttribute('readonly');
                content.focus();
                
            }else{
                content.setAttribute('readonly', 'readonly');
                edit_el.innerText = 'Edit';
            }
        })

        delete_el.addEventListener('click', () => {
            task_list.removeChild(indiv_task);
        })
        user_input_area.value = "";


    })
})
