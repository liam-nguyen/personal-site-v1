import { FC } from "react"

export const SectionText:FC<{text: string}> = ({text}) => {
    return <p className="text-4xl leading-16 font-light pb-14 opacity-50">{text}</p>
}