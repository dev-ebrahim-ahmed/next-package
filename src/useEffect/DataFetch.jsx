import { useEffect, useState } from "react"


const DataFetch = () => {
    const lodingMessage = <p>Data is Lodding...</p>
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
       setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
            if(!res.ok){
                throw Error("Fetching is Not Successfull");
            }
            return res.json();
        })
        .then((data)=>{
            setTodos(data);
            setIsLoading(false);
            setError(null)
        })
        .catch((error)=>{
          setError(error.messsage);
          setIsLoading(false);
        })
        ;
       }, 3000);
    }, []);
    const todosElement = todos && todos.map((todo)=>{
        return <p key={todo.id}>{todo.title}</p>
    });
  return (
    <div>
        <h1>To Do</h1>
        {error && <p>{error}</p>}
        {isLoading && lodingMessage}
        {todosElement}
    </div>
  )
}

export default DataFetch