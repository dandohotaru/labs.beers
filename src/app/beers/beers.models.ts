export interface RootObject {
    currentPage: number;
    numberOfPages: number;
    totalResults: number;
    data: Beer[];
    status: string;
}

export interface Beer {
    id: string;
    name: string;
    nameDisplay: string;
    description: string;
    abv: string;
    ibu: string;
    glasswareId: number;
    availableId: number;
    styleId: number;
    isOrganic: string;
    labels: Labels;
    status: string;
    statusDisplay: string;
    createDate: string;
    updateDate: string;
    glass: Glass;
    available: Available;
    style: Style;
    breweries: Brewery[];
    type: string;
    srmId?: number;
    foodPairings: string;
    servingTemperature: string;
    servingTemperatureDisplay: string;
    originalGravity: string;
    srm: Srm;
}

export interface Labels {
    icon: string;
    medium: string;
    large: string;
}

export interface Glass {
    id: number;
    name: string;
    createDate: string;
}

export interface Available {
    id: number;
    name: string;
    description: string;
}

export interface Category {
    id: number;
    name: string;
    createDate: string;
}

export interface Style {
    id: number;
    categoryId: number;
    category: Category;
    name: string;
    shortName: string;
    description: string;
    ibuMin: string;
    ibuMax: string;
    abvMin: string;
    abvMax: string;
    srmMin: string;
    srmMax: string;
    ogMin: string;
    fgMin: string;
    fgMax: string;
    createDate: string;
    updateDate: string;
}

export interface Images {
    icon: string;
    medium: string;
    large: string;
    squareMedium: string;
    squareLarge: string;
}

export interface Country {
    isoCode: string;
    name: string;
    displayName: string;
    isoThree: string;
    numberCode: number;
    createDate: string;
}

export interface Location {
    id: string;
    name: string;
    streetAddress: string;
    locality: string;
    region: string;
    postalCode: string;
    phone: string;
    website: string;
    latitude: number;
    longitude: number;
    isPrimary: string;
    inPlanning: string;
    isClosed: string;
    openToPublic: string;
    locationType: string;
    locationTypeDisplay: string;
    countryIsoCode: string;
    yearOpened: string;
    status: string;
    statusDisplay: string;
    createDate: string;
    updateDate: string;
    country: Country;
    hoursOfOperation: string;
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
    locations: Location[];
}

export interface Srm {
    id: number;
    name: string;
    hex: string;
}






