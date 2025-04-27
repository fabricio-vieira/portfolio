import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/shared/Container'
import Menu from '@/components/shared/Menu'

export default function Cabecalho() {
    return (
        <header className="flex items-center w-full h-16 bg-black/50">
            <Container className="flex-1 flex justify-center sm:justify-between items-center">
                <div className="flex items-center gap-10">
                    <Link href="/" className="hidden sm:block">
                        <Image src="/logo.svg" alt="Logo" width={80} height={0} />
                    </Link>
                    <Menu />
                </div>
                <div className="hidden sm:flex items-center">
                    <Link
                        href="https://www.linkedin.com/in/fabricio-val%C3%A9rio-b05049286/"
                        target="_blank"
                        className="bg-green-500 rounded-full px-7 py-1 text-sm font-bold"
                    >
                        Perfil
                    </Link>
                </div>
            </Container>
        </header>
    )
}
