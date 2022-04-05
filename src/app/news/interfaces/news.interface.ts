export interface Empty {
    status:       string;
    totalResults: number;
    articles:     News[];
}

export interface News {
    source:      Source;
    author:      null | string;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: Date;
    content:     string;
}

export interface Source {
    id:   null | string;
    name: string;
}
