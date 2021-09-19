export interface Processos {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface Support {
    url: string;
    text: string;
}

export interface ResponseProcessos {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Processos[];
    support: Support;
}

