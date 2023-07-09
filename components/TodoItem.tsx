'use client';

type Props = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export function TodoItem({ id, title, complete, toggleTodo }: Props) {
  return (
    <li className='flex gap-1 items-center'>
      <input
        id={id}
        type='checkbox'
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
        className='cursor-pointer peer'
      />

      <label className=' peer-checked:line-through peer-checked:text-slate-500 cursor-pointer' htmlFor={id}>
        {title}
      </label>
    </li>
  );
}
