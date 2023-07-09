import Link from 'next/link';
import async from '../page';
import { prisma } from '@/db';
import { redirect } from 'next/navigation';

async function createTodo(data: FormData) {
  'use server';

  const title = data.get('title')?.valueOf();

  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('invalid title');
  }

  await prisma.todo.create({ data: { title, complete: false } });

  redirect('/');

  console.log('hi');
}

export default function Page() {
  return (
    <>
      <header className='flex justify-between items-center mb-4 '>
        <h1 className='text-2xl'>New</h1>
      </header>
      <form action={createTodo} className='flex gap-2 flex-col'>
        <input type='text' name='title' className='btn hover:bg-slate-800 focus-within:bg-slate-800 bg-transparent' />
        <div className='flex gap-2 justify-end'>
          <Link href='..' className='btn'>
            Cancel
          </Link>
          <button className='btn' type='submit'>
            Create
          </button>
        </div>
      </form>
    </>
  );
}
