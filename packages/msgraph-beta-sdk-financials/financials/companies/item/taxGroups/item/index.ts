/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTaxGroupFromDiscriminatorValue, serializeTaxGroup, type TaxGroup } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the taxGroups property of the microsoft.graph.company entity.
 */
export interface TaxGroupItemRequestBuilder extends BaseRequestBuilder<TaxGroupItemRequestBuilder> {
    /**
     * Delete navigation property taxGroups for financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get taxGroups from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TaxGroup>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<TaxGroupItemRequestBuilderGetQueryParameters> | undefined) : Promise<TaxGroup | undefined>;
    /**
     * Update the navigation property taxGroups in financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TaxGroup>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: TaxGroup, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TaxGroup | undefined>;
    /**
     * Delete navigation property taxGroups for financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get taxGroups from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TaxGroupItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property taxGroups in financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: TaxGroup, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get taxGroups from financials
 */
export interface TaxGroupItemRequestBuilderGetQueryParameters {
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
export const TaxGroupItemRequestBuilderUriTemplate = "{+baseurl}/financials/companies/{company%2Did}/taxGroups/{taxGroup%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TaxGroupItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TaxGroupItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: TaxGroupItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: TaxGroupItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTaxGroupFromDiscriminatorValue,
        queryParametersMapper: TaxGroupItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: TaxGroupItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTaxGroupFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTaxGroup,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
