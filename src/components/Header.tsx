import { Plus, X } from 'phosphor-react'
import LogoImage from '../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewHabitForm } from './NewHabitForm'

export function Header () {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={LogoImage} alt="Habits"/>

      <Dialog.Root>
        <Dialog.Trigger
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 transition-transform duration-200 transform hover:border-violet-200"  
        >
          Novo hábito
          <Plus size={20} className="text-violet-500"/>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-200">
              <X size={24} aria-label="Fechar"/>
            </Dialog.Close>
            
            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Criando hábito
            </Dialog.Title>

            <NewHabitForm/>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      
    </div>
  )
}