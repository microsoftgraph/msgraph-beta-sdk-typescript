/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCompanyCollectionResponseFromDiscriminatorValue, type CompanyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { CompanyItemRequestBuilderNavigationMetadata, CompanyItemRequestBuilderRequestsMetadata, CompanyItemRequestBuilderUriTemplate, type CompanyItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
import { type Guid } from 'guid-typescript';

/**
 * Provides operations to manage the companies property of the microsoft.graph.financials entity.
 */
export interface CompaniesRequestBuilder extends BaseRequestBuilder<CompaniesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the companies property of the microsoft.graph.financials entity.
     * @param companyId The unique identifier of company
     * @returns a CompanyItemRequestBuilder
     */
     byCompanyId(companyId: Guid) : CompanyItemRequestBuilder;
    /**
     * Get companies from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CompanyCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<CompaniesRequestBuilderGetQueryParameters> | undefined) : Promise<CompanyCollectionResponse | undefined>;
    /**
     * Get companies from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CompaniesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get companies from financials
 */
export interface CompaniesRequestBuilderGetQueryParameters {
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
const CompaniesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const CompaniesRequestBuilderNavigationMetadata: Record<Exclude<keyof CompaniesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCompanyId: {
        uriTemplate: CompanyItemRequestBuilderUriTemplate,
        requestsMetadata: CompanyItemRequestBuilderRequestsMetadata,
        navigationMetadata: CompanyItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["company%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CompaniesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCompanyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CompaniesRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const CompaniesRequestBuilderUriTemplate = "{+baseurl}/financials/companies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */