import { useEffect, useState } from "react"

export default function ViewTask() {
    const [task, setTask] = useState(JSON.parse(localStorage.getItem("saveTask")) || [])
    useEffect(() => {
        setTask(JSON.parse(localStorage.getItem("saveTask")) || [])
    }, [])
    return (
        <div style={{display:"flex",flexDirection:"column",gap:"10px",width:"100%"}}>
            <h2 style={{textAlign:"center",fontSize:"2em"}}>View Task</h2>
            <div className="lists" style={{width:"100%"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",gap:"10px"}}>
                            <span style={{fontWeight:"bold",fontSize:"1.7em",textAlign:"center"}}>Task</span>
                            <span style={{fontWeight:"bold",fontSize:"1.7em",textAlign:"center"}}>Date</span>
                            <span style={{fontWeight:"bold",fontSize:"1.7em",textAlign:"center"}}>Label</span>
                </div>
                {
                    task.map((item, index) => (
                        <div key={index} style={{display:"flex",justifyContent:"space-between",padding:"10px",gap:"10px"}}>
                            <span style={{fontSize:"1em",textAlign:"center"}}>{item.task}</span>
                            <span style={{fontSize:"1em",textAlign:"center"}}>{item.date}</span>
                            <span style={{fontSize:"1em",textAlign:"center"}}>{item.label}</span>
                        </div>
                   ))
                }
            </div>
        </div>
    )
}