export default function Experiencia() {
    return (
        <div className=" flex flex-col sm:flex-row lg:flex-col  items-center justify-around gap-6 p-6 bg-black border-2 border-zinc-800 rounded-2xl">
            <Item principal="+150" label="Paises Atendidos" />
            <Item principal="+20" label="Anos de Experiência" />
            <Item principal="420k" label="Alunos Matriculados" />
        </div>
    )
}

function Item(props: { principal: string; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-red-500 text-3xl font-bold leading-6">{props.principal} </span>
            <span className="text-zinc-400 text-sm text-center">{props.label}</span>
        </div>
    )
}
