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

export default function TipPercentageForm() {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>

        <form>
            {tipOptions.map(tip => (
                <div key={tip.id} className="flex gap-2 mt-1">
                    <label htmlFor={tip.id}>{tip.label}</label>
                    <input
                        id={tip.id}
                        type="radio"
                        //Ayuda que no se selecciones todos
                        name="tip"
                        value={tip.value}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
