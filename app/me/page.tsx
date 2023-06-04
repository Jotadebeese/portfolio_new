import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'A full description of Juan',
    description: 'A full description in detail of Juan and his life. The paths he has taken and what he expects in the future.'
}

export default function Me() {
    return (
        <p>A full description about me</p>
    )
}