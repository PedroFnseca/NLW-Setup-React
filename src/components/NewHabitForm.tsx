import * as Dialog from '@radix-ui/react-dialog'
import { Check, Plus, X } from 'phosphor-react'
import * as CheckBox from '@radix-ui/react-checkbox'

const availableDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

export function NewHabitForm(){
  return (
   <form className='w-full flex flex-col mt-6'>
    <label htmlFor="habit" className='font-semibold leading-tight'>
      Qual seu comprometimento?
    </label>
    <input 
      type="text"
      id="title"
      className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder-zinc-400"
      placeholder='Ex: exercicios, dormir cedo, etc...'
      autoFocus
      />

    <label htmlFor="" className='font-semibold leading-tight mt-4'>
      Qual a recorrencia?
    </label>

    <div className="flex flex-col gap-2 mt-3">
      {availableDays.map((day, index) => {
        return (
          <CheckBox.Root key={index} className="flex items-center gap-3 group">
            <div className='h-7 w-7 flex items-center rounded justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
              <CheckBox.Indicator>
                <Check size={20} className="text-white"/>
              </CheckBox.Indicator>
            </div>
            <span className="text-white leading-tight">
              {day}
            </span>
          </CheckBox.Root>
        )  
      })}
    </div>

    <button type="submit" className='mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-400'>
      <Check size={20} weight="bold"/>
      Confirmar
    </button>
   </form>
  )
}