/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createSalesCreditMemoLineFromDiscriminatorValue, serializeSalesCreditMemoLine, type SalesCreditMemoLine } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AccountRequestBuilderRequestsMetadata, AccountRequestBuilderUriTemplate, type AccountRequestBuilder } from './account/';
import { ItemRequestBuilderNavigationMetadata, ItemRequestBuilderRequestsMetadata, ItemRequestBuilderUriTemplate, type ItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the salesCreditMemoLines property of the microsoft.graph.company entity.
 */
export interface SalesCreditMemoLineItemRequestBuilder extends BaseRequestBuilder<SalesCreditMemoLineItemRequestBuilder> {
    /**
     * Provides operations to manage the account property of the microsoft.graph.salesCreditMemoLine entity.
     */
    get account(): AccountRequestBuilder;
    /**
     * Provides operations to manage the item property of the microsoft.graph.salesCreditMemoLine entity.
     */
    get item(): ItemRequestBuilder;
    /**
     * Get salesCreditMemoLines from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SalesCreditMemoLine
     */
     get(requestConfiguration?: RequestConfiguration<SalesCreditMemoLineItemRequestBuilderGetQueryParameters> | undefined) : Promise<SalesCreditMemoLine | undefined>;
    /**
     * Update the navigation property salesCreditMemoLines in financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SalesCreditMemoLine
     */
     patch(body: SalesCreditMemoLine, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SalesCreditMemoLine | undefined>;
    /**
     * Get salesCreditMemoLines from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SalesCreditMemoLineItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property salesCreditMemoLines in financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: SalesCreditMemoLine, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get salesCreditMemoLines from financials
 */
export interface SalesCreditMemoLineItemRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SalesCreditMemoLineItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SalesCreditMemoLineItemRequestBuilderNavigationMetadata: Record<Exclude<keyof SalesCreditMemoLineItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    account: {
        uriTemplate: AccountRequestBuilderUriTemplate,
        requestsMetadata: AccountRequestBuilderRequestsMetadata,
    },
    item: {
        uriTemplate: ItemRequestBuilderUriTemplate,
        requestsMetadata: ItemRequestBuilderRequestsMetadata,
        navigationMetadata: ItemRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SalesCreditMemoLineItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSalesCreditMemoLineFromDiscriminatorValue,
        queryParametersMapper: SalesCreditMemoLineItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSalesCreditMemoLineFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSalesCreditMemoLine,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SalesCreditMemoLineItemRequestBuilderUriTemplate = "{+baseurl}/financials/companies/{company%2Did}/salesCreditMemoLines/{salesCreditMemoLine%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */