/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAdministrativeUnitCollectionResponseFromDiscriminatorValue, createAdministrativeUnitFromDiscriminatorValue, serializeAdministrativeUnit, type AdministrativeUnit, type AdministrativeUnitCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DeltaRequestBuilderRequestsMetadata, DeltaRequestBuilderUriTemplate, type DeltaRequestBuilder } from './delta/';
import { AdministrativeUnitItemRequestBuilderNavigationMetadata, AdministrativeUnitItemRequestBuilderRequestsMetadata, AdministrativeUnitItemRequestBuilderUriTemplate, type AdministrativeUnitItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the administrativeUnits property of the microsoft.graph.directory entity.
 */
export interface AdministrativeUnitsRequestBuilder extends BaseRequestBuilder<AdministrativeUnitsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the delta method.
     */
    get delta(): DeltaRequestBuilder;
    /**
     * Provides operations to manage the administrativeUnits property of the microsoft.graph.directory entity.
     * @param administrativeUnitId The unique identifier of administrativeUnit
     * @returns a AdministrativeUnitItemRequestBuilder
     */
     byAdministrativeUnitId(administrativeUnitId: string) : AdministrativeUnitItemRequestBuilder;
    /**
     * Conceptual container for user and group directory objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AdministrativeUnitCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<AdministrativeUnitsRequestBuilderGetQueryParameters> | undefined) : Promise<AdministrativeUnitCollectionResponse | undefined>;
    /**
     * Create new navigation property to administrativeUnits for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AdministrativeUnit
     */
     post(body: AdministrativeUnit, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AdministrativeUnit | undefined>;
    /**
     * Conceptual container for user and group directory objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AdministrativeUnitsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to administrativeUnits for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AdministrativeUnit, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Conceptual container for user and group directory objects.
 */
export interface AdministrativeUnitsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AdministrativeUnitsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AdministrativeUnitsRequestBuilderNavigationMetadata: Record<Exclude<keyof AdministrativeUnitsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAdministrativeUnitId: {
        uriTemplate: AdministrativeUnitItemRequestBuilderUriTemplate,
        requestsMetadata: AdministrativeUnitItemRequestBuilderRequestsMetadata,
        navigationMetadata: AdministrativeUnitItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["administrativeUnit%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    delta: {
        uriTemplate: DeltaRequestBuilderUriTemplate,
        requestsMetadata: DeltaRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AdministrativeUnitsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAdministrativeUnitCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AdministrativeUnitsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAdministrativeUnitFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAdministrativeUnit,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AdministrativeUnitsRequestBuilderUriTemplate = "{+baseurl}/directory/administrativeUnits{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */