import { usePathname, useRouter } from "next/navigation";

interface QueryParameterProps {
    key: string,
    value: string | undefined,
}

export const useReplaceQueryParameter = () => {

    const router = useRouter();
    const pathname = usePathname();

    return ({ key, value }: QueryParameterProps) => {
        const searchParams = new URLSearchParams();

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
            searchParams.set("page", "1");

        }

        router.replace(`${pathname}?${searchParams.toString()} `);
    };
};