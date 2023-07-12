import Link from "next/link";

export default function MyInformation({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            {children}
        </div>
    )
  }