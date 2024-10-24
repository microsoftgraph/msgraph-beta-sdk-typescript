/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createFinancialsFromDiscriminatorValue, serializeFinancials, type Financials } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CompaniesRequestBuilderNavigationMetadata, CompaniesRequestBuilderRequestsMetadata, type CompaniesRequestBuilder } from './companies/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the financials singleton.
 */
export interface FinancialsRequestBuilder extends BaseRequestBuilder<FinancialsRequestBuilder> {
    /**
     * Provides operations to manage the companies property of the microsoft.graph.financials entity.
     */
    get companies(): CompaniesRequestBuilder;
    /**
     * Get financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Financials>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<FinancialsRequestBuilderGetQueryParameters> | undefined) : Promise<Financials | undefined>;
    /**
     * Update financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Financials>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Financials, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Financials | undefined>;
    /**
     * Get financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FinancialsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Financials, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get financials
 */
export interface FinancialsRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const FinancialsRequestBuilderUriTemplate = "{+baseurl}/financials{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FinancialsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const FinancialsRequestBuilderNavigationMetadata: Record<Exclude<keyof FinancialsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    companies: {
        requestsMetadata: CompaniesRequestBuilderRequestsMetadata,
        navigationMetadata: CompaniesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FinancialsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: FinancialsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFinancialsFromDiscriminatorValue,
        queryParametersMapper: FinancialsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: FinancialsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFinancialsFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFinancials,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
