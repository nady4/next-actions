import { CardWithForm } from "@/app/new/task-form";
import { db } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function TaskPageEdit({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const task = await db.task.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!task) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <CardWithForm task={task} />
    </div>
  );
}
