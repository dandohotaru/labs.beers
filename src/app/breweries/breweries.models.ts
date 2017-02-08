
export interface RootObject {
    currentPage: number;
    numberOfPages: number;
    totalResults: number;
    data: Brewery[];
    status: string;
}

export interface Brewery {
    id: string;
    name: string;
    nameShortDisplay: string;
    description: string;
    website: string;
    established: string;
    isOrganic: string;
    images: Images;
    status: string;
    statusDisplay: string;
    createDate: string;
    updateDate: string;
    type: string;
    mailingListUrl: string;
}

export interface Images {
    icon: string;
    medium: string;
    large: string;
    squareMedium: string;
    squareLarge: string;
}