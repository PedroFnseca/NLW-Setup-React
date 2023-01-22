import * as  Popover from '@radix-ui/react-popover'
import { Progressbar } from './Progressbar'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { HabitsList } from './HabitsList'
import { useState } from 'react'

interface HabitProps {
  date: Date,
  defaultCompleted?: number,
  amount?: number
}

export function HabitDay({defaultCompleted = 0, amount = 0, date}: HabitProps){
  const [completed, setCompleted] = useState(defaultCompleted)

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0

  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOffWeek = dayjs(date).format('dddd')
  
  function handleCompletedChanged(completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-backgorund", {
          "bg-zinc-900 border-zinc-800": completedPercentage === 0,
          "bg-violet-900 border-violet-700": completedPercentage > 0 && completedPercentage < 20,
          "bg-violet-800 border-violet-600": completedPercentage >= 20 && completedPercentage < 40,
          "bg-violet-700 border-violet-500": completedPercentage >= 40 && completedPercentage < 60,
          "bg-violet-600 border-violet-400": completedPercentage >= 60 && completedPercentage < 80,
          "bg-violet-500 border-violet-300": completedPercentage >= 80 && completedPercentage < 100,
          "bg-violet-400 border-violet-200": completedPercentage === 100,
        })}
      />
      
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-backgorund">
          <span className="font-semibold text-zinc-400 capitalize">{dayOffWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>
  
          <Progressbar progress={completedPercentage}/>

          <HabitsList date={date} onCompletedChange={handleCompletedChanged}/>

          <Popover.Arrow className='fill-zinc-900' height={8} width={16}/>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}