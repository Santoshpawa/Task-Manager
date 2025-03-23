function taskManager(){
    let task=[
        {
            id:0,
            title: "Running",
            status: "Completed"
        },
        {
            id:1,
            title: "Meditation",
            status: "Pending"
        },{
            id:2,
            title: "Coding",
            status: "Pending"
        },
        {
            id:3,
            title: "Dancing",
            status: "Pending"
        },
        {
            id:4,
            title: "Singing",
            status: "Completed"
        }
    ];

    return {
        addTask : function(obj){
            task.push(obj)
        },
        getAllTasks : function (){
            task.forEach((ele)=>{
                console.log(ele)
            })
        },
        markComplete: function(id){
            task.filter((ele)=> ele.id==id).map((ele)=> ele.status="Completed")
        },
        removeTask: function(id){
            task.splice(id,1);
        },
        getPendingTasks: function(){
            let ans= task.filter((ele)=>ele.status=="Pending")
            console.log(ans)
        },
        getCompletedTasks: function(){
            let ans= task.filter((ele)=> ele.status=="Completed").map((ele)=>({
                taskName:ele.title
            }))
            console.log(ans)
        },
        sortedTask: function(){
            let ans=task.map((ele)=>ele.title)
            ans.sort((a,b)=>a.localeCompare(b))
            console.log(ans)
        }
    }

}

let person=taskManager();
person.addTask({
    id:5,
    title: "Cooking",
    status: "Completed"
})

person.addTask({
    id:6,
    title: "Gardening",
    status: "Pending"
})

//

 //person.markComplete(6);
 

 //person.removeTask(2);

// person.getPendingTasks();

 //person.getCompletedTasks();

 person.sortedTask();
//person.getAllTasks();

