import React, {useState, useEffect} from 'react';
import uuid from'react-uuid';

function TodoList() {
    const[content, setContent]=useState('');
    const[list, setList]=useState(JSON.parse(localStorage.getItem('tasks')) || []);
    //GET INPUT VALUE
    const onChangeHandler = (e) =>{
        setContent(e.target.value);
        console.log(setContent);

    }
    //CREATE NEW TASK
    const onSubmitHandler = e =>{
        e.preventDefault();
        if (content){
        setList([...list, {content, id: uuid(), isCompleted: false}]);
    //EMpty Input
        setContent('');}
}
    const removeTask= id => {
        const filterList = list.filter(task => task.id !== id);
        setList(filterList);
    }
    //ADD TASK TO LOCALSTORAGe
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(list));
    }, [list])
    return (
        <div>
            <form  onSubmit={onSubmitHandler}>
                <div>
                    <input type="text" name='content' value={content}  onChange={ onChangeHandler }/>
                    <input type="submit" value='Add'/>
                </div>
            </form>
        
        <div>
            {list.map((task)=>{
            return(
                <div className='task' key={task.id}>
                    <p style={task.isCompleted  ?{textDecoration: 'line-through'}
                    : {textDecoration:'none'}
                    }>{task.content}</p>
                    <input type="checkbox"
                    checked={task.isCompleted}
                    onChange={e => {
                        setList(prevList =>{
                            const newList= prevList.map(item =>
                                item.content === task.content ?
                                {...item, isCompleted: ! item.isCompleted} : item
                            );
                                return newList;
                            
                        });
                    }} />
                    <button onClick={()=>removeTask(task.id)}>Delete</button>
                </div>
                );
            })}
        </div>
        </div>
    );
}

export default TodoList