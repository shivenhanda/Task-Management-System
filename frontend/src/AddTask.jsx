import { useForm } from "react-hook-form"

export default function AddTask(){
    const {
        register,
        handleSubmit,
        watch,
        formState:{errors,isSubmitting},
    }=useForm();

    async function saveTask(data){
        let dataList=JSON.parse(localStorage.getItem("saveTask")) || [];
        dataList.push(data)
        localStorage.setItem("saveTask",JSON.stringify(dataList))
    }
    return(
        <div style={{display:"flex",flexDirection:"column",gap:"10px"
        }}>
        <h2 style={{textAlign:"center"}}>Add Task</h2>
        <form onSubmit={handleSubmit(saveTask)}>
            <label htmlFor="task">Enter Task Name</label>
            <input {...register ('task',{required:true,minLength:{value:3,message:"Minimum Length 3 characters"}})} id="task"/>
            {
                errors.task && <p>{errors.task.message}</p>
            }
            <label htmlFor="date">Enter Task Date</label>
            <input type="date" value={new Date().toISOString().split("T")[0]} min={new Date().toISOString().split("T")[0]} {...register ('date',{required:true})} id="date"/>
            <label htmlFor="tag">Enter Task Tag</label>
            <input {...register ('tag')} id="tag"/>
            <select name="priority" id="priority">
                    <option value="High Priority">High Priority</option>
                    <option value="Medium Priority">Medium Priority</option>
                    <option value="Low Priority">Low Priority</option>
                </select>
            <button>Submit</button>
        </form>
        </div>
    )
}