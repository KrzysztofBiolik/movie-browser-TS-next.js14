import Link from "next/link";

export function Navigation() {
    return (
        <ul>
            <li>
                <Link href="/movies"> Movies</Link>
            </li>
            <li>
                <Link href="/people"> People</Link>
            </li>
        </ul>
    )
}