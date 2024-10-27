import { createContext, useContext, useState, ReactNode } from 'react';


interface SearchContextType {
    query: string;
    setQuery: (query: string) => void;
    searchResults: Blog[];
    setSearchResults: (results: Blog[]) => void;
}


interface Blog {
    id: string;
    title: string;
    content:string
    author:{
        name:string
    }
}

const SearchContext = createContext<SearchContextType>({
    query: "",
    setQuery: () => {},
    searchResults: [],
    setSearchResults: () => {},
});


export const useSearchContext = () => useContext(SearchContext);


interface SearchProviderProps {
    children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
    const [query, setQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<Blog[]>([]);

    return (
        <SearchContext.Provider value={{query, setQuery,searchResults, setSearchResults }}>
            {children}
        </SearchContext.Provider>
    );
};
