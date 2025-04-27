import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

interface ConteudoMDProps {
    markdown: string
}

export default function ConteudoMD(props: ConteudoMDProps) {
    return (
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml={false}>
            {props.markdown}
        </Markdown>
    )
}
