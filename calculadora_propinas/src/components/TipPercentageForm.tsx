const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-30',
        value: .30,
        label: '30%'
    },
]

type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>

        <form>
            {tipOptions.map(tipOptions => (
                <div key={tipOptions.id} className="flex gap-2 mt-1">
                    <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                    <input
                        id={tipOptions.id}
                        type="radio"
                        //Ayuda que no se selecciones todos
                        name="tip"
                        value={tipOptions.value}
                        onChange={ e => setTip(+e.target.value)}///* El target.value siempre sera string pero el + al inicio lo transforma a number  */
                        checked={tipOptions.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
