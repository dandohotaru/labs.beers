export interface BeerRoot {
    currentPage: number;
    numberOfPages: number;
    totalResults: number;
    data: BeerData[];
    status: string;
}

export interface BeerData {
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
    labels: LabelsData;
    status: string;
    statusDisplay: string;
    createDate: string;
    updateDate: string;
    glass: GlassData;
    available: AvailabilityData;
    style: StyleData;
    breweries: BreweryData[];
    type: string;
    srmId?: number;
    foodPairings: string;
    servingTemperature: string;
    servingTemperatureDisplay: string;
    originalGravity: string;
    srm: SrmData;
}

export interface LabelsData {
    icon: string;
    medium: string;
    large: string;
}

export interface GlassData {
    id: number;
    name: string;
    createDate: string;
}

export interface AvailabilityData {
    id: number;
    name: string;
    description: string;
}

export interface CategoryData {
    id: number;
    name: string;
    createDate: string;
}

export interface StyleData {
    id: number;
    categoryId: number;
    category: CategoryData;
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

export interface ImagesData {
    icon: string;
    medium: string;
    large: string;
    squareMedium: string;
    squareLarge: string;
}

export interface CountryData {
    isoCode: string;
    name: string;
    displayName: string;
    isoThree: string;
    numberCode: number;
    createDate: string;
}

export interface LocationData {
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
    country: CountryData;
    hoursOfOperation: string;
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
    locations: LocationData[];
}

export interface SrmData {
    id: number;
    name: string;
    hex: string;
}
