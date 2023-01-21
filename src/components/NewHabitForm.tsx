import * as Dialog from '@radix-ui/react-dialog'
import { Check, Plus, X } from 'phosphor-react'

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

    <button type="submit" className='mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-400'>
      <Check size={20} weight="bold"/>
      Confirmar
    </button>
   </form>
  )
}