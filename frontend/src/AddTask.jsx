import { useForm } from "react-hook-form"

export default function AddTask(){
    const {
        register,
        handleSubmit,
        watch,
        formState:{errors},
    }=useForm();
    return(
        <div style={{display:"flex",flexDirection:"column",gap:"10px"
        }}>
        <h2 style={{textAlign:"center"}}>Add Task</h2>
        <form onSubmit={handleSubmit(data=>console.log(data))}>
            <label htmlFor="task">Enter Task Name</label>
            <input {...register ('task',{required:true,minLength:{value:3,message:"Minimum Length 3 characters"}})} id="task"/>
            {
                errors.task && <p>{errors.task.message}</p>
            }
            <button>Submit</button>
        </form>
        </div>
    )
}