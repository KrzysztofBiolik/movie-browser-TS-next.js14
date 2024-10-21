const BASE_URL = "https://image.tmdb.org/t/p/";

interface ImageProps {
    path?: string  | null;
    size: string;
}
const sizes = {
    medium: "w342",
    big: "w1280",
};

export const getImageUrl = ({
    path,
    size
}: ImageProps
) => path && `${BASE_URL}${sizes[size as keyof typeof sizes]}${path}}`