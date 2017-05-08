
export interface BreweryRoot {
    currentPage: number;
    numberOfPages: number;
    totalResults: number;
    data: BreweryData[];
    status: string;
}

export interface BreweryData {
    id: string;
    name: string;
    nameShortDisplay: string;
    description: string;
    website: string;
    established: string;
    isOrganic: string;
    images: ImagesData;
    status: string;
    statusDisplay: string;
    createDate: string;
    updateDate: string;
    type: string;
    mailingListUrl: string;
    favorite?: boolean;
}

export interface ImagesData {
    icon: string;
    medium: string;
    large: string;
    squareMedium: string;
    squareLarge: string;
}