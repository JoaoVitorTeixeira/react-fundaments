import React from 'react'

interface Props {
    title: string,
    subtitle: string
}

export default function WithParameter({ title, subtitle }: Props) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}