import Image from 'next/image'

export default function MiniCV() {
    return (
        <div className="flex flex-1 flex-col-reverse p-4 gap-6 md:flex-row lg:flex-col-reverse xl:flex-row lg:items-center  bg-black border-2 border-zinc-800 rounded-2xl">
            <div className="relative min-w-72 h-68 xl:self-center rounded-2xl">
                <Image src="/minha-foto.JPEG" alt="Foto de perfil" fill className="rounded-2xl" />
            </div>
            <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
                <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
                    <span
                        className="
                        bg-gradient-to-r from-orange-500 via-white to-white
                        text-2xl font-bold bg-clip-text text-transparent"
                    >
                        Fabricio Valério
                    </span>
                    <span>Gestor de Empresas</span>
                </div>
                <p className="text-sm text-center md:text-left lg:text-center xl:text-left">
                    Com formação em Ciências Contábeis e Eletrônica, complementada por uma Pós-graduação em
                    Desenvolvimento de Sistemas. Com mais de 23 anos de experiência no mercado, desenvolvi uma carreira
                    sólida focada gestão empresarial e tecnologia. A combinação de conhecimentos em contabilidade,
                    eletrônica e desenvolvimento de sistemas me permite uma visão holística na gestão de projetos
                    complexos, garantindo excelência técnica, mas também a viabilidade financeira e estratégica das
                    iniciativas.
                </p>
            </div>
        </div>
    )
}
