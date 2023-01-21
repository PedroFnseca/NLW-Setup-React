import clsx from 'clsx' 

interface ProgressbarProps {
  progress: number
}

export function Progressbar(props: ProgressbarProps){
  const progressStyle = {
    width: `${props.progress}%`
  }
  
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-ful mt-4">
      <div
        role="progressbar"
        aira-label="Progresso de hábito completados nesse dia"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600"
        style={progressStyle}
      />
    </div>
  )
}