import Image from 'next/image'
import { Carousel, CarouselItem, CarouselPrevious, CarouselNext, CarouselContent } from '../ui/carousel'

interface CarrosselImagensProps {
    imagens: string[]
}

export default function CarrosselImagens(props: CarrosselImagensProps) {
    return (
        <Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
            <CarouselContent>
                {props.imagens.map((imagem) => (
                    <CarouselItem key={imagem} className="relative w-full h-96">
                        <Image src={imagem} alt="Imagem do carrossel" fill className="object-cover" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
