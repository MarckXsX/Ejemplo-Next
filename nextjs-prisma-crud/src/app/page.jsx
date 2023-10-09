import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";

async function loadTasks() {
  //Formas de pedir datos

  //Desde el Backquend
  // const res = await fetch('http://localhost:3000/api/tasks')
  // const data = res.json()

  //Desde la base de datos
  return await prisma.task.findMany();
}

async function HomaPage() {
  const tasks = await loadTasks();
  // console.log(tasks)
  return (
    <section className='container mx-auto'>
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}/>
        ))}
      </div>
    </section>
  );
}

export default HomaPage;
