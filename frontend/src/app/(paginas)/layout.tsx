import BotaoChat from '@/components/chat/BotaoChat'

export interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            {props.children}
            <BotaoChat />
        </div>
    )
}
