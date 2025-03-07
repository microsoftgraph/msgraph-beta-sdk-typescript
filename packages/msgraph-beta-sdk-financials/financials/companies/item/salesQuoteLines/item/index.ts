/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSalesQuoteLineFromDiscriminatorValue, serializeSalesQuoteLine, type SalesQuoteLine } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AccountRequestBuilderRequestsMetadata, type AccountRequestBuilder } from './account/index.js';
// @ts-ignore
import { Item_EscapedRequestBuilderNavigationMetadata, Item_EscapedRequestBuilderRequestsMetadata, type Item_EscapedRequestBuilder } from './item_Escaped/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the salesQuoteLines property of the microsoft.graph.company entity.
 */
export interface SalesQuoteLineItemRequestBuilder extends BaseRequestBuilder<SalesQuoteLineItemRequestBuilder> {
    /**
     * Provides operations to manage the account property of the microsoft.graph.salesQuoteLine entity.
     */
    get account(): AccountRequestBuilder;
    /**
     * Provides operations to manage the item property of the microsoft.graph.salesQuoteLine entity.
     */
    get item(): Item_EscapedRequestBuilder;
    /**
     * Get salesQuoteLines from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SalesQuoteLine>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<SalesQuoteLineItemRequestBuilderGetQueryParameters> | undefined) : Promise<SalesQuoteLine | undefined>;
    /**
     * Update the navigation property salesQuoteLines in financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SalesQuoteLine>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: SalesQuoteLine, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SalesQuoteLine | undefined>;
    /**
     * Get salesQuoteLines from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SalesQuoteLineItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property salesQuoteLines in financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: SalesQuoteLine, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get salesQuoteLines from financials
 */
export interface SalesQuoteLineItemRequestBuilderGetQueryParameters {
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
export const SalesQuoteLineItemRequestBuilderUriTemplate = "{+baseurl}/financials/companies/{company%2Did}/salesQuoteLines/{salesQuoteLine%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SalesQuoteLineItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SalesQuoteLineItemRequestBuilderNavigationMetadata: Record<Exclude<keyof SalesQuoteLineItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    account: {
        requestsMetadata: AccountRequestBuilderRequestsMetadata,
    },
    item: {
        requestsMetadata: Item_EscapedRequestBuilderRequestsMetadata,
        navigationMetadata: Item_EscapedRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SalesQuoteLineItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: SalesQuoteLineItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSalesQuoteLineFromDiscriminatorValue,
        queryParametersMapper: SalesQuoteLineItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: SalesQuoteLineItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSalesQuoteLineFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSalesQuoteLine,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
