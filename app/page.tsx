import { TodoItem } from '@/components/TodoItem';
import { prisma } from '@/db';
import Link from 'next/link';

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  'use server';

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <header className='flex justify-between items-center mb-4 '>
        <h1 className='text-2xl'>Todos</h1>
        <Link className='btn hover:bg-slate-800 focus-within:bg-slate-800 outline-none' href='/new'>
          New
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
