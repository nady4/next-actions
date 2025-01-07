import { TaskCard } from "@/components/task-card";
import { Task } from "@prisma/client";
import { db } from "@/lib/prisma";

export const dynamic = "force-dynamic";

async function HomePage() {
  const tasks = await db.task.findMany();

  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task: Task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default HomePage;
