export interface RequestCreate {
    name: string;
    job: string;
}

export interface ResponseCreate {
    name: string;
    job: string;
    id: string;
    createdAt: Date;
}