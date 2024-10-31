import {SectionTitle} from "../Section/SectionTitle/page";

export const SearchResults = ({searchQuery, searchTotalResults}: { searchQuery?: string, searchTotalResults?: number }) => {
    return (
        <section>
            <SectionTitle>Search results for {`"${searchQuery}"${searchTotalResults ? `(${searchTotalResults})` : ""}`}</SectionTitle>
        </section>
    );
};
