/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createSalesOrderFromDiscriminatorValue, serializeSalesOrder, type SalesOrder } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CurrencyRequestBuilderRequestsMetadata, CurrencyRequestBuilderUriTemplate, type CurrencyRequestBuilder } from './currency/';
import { CustomerRequestBuilderNavigationMetadata, CustomerRequestBuilderRequestsMetadata, CustomerRequestBuilderUriTemplate, type CustomerRequestBuilder } from './customer/';
import { PaymentTermRequestBuilderRequestsMetadata, PaymentTermRequestBuilderUriTemplate, type PaymentTermRequestBuilder } from './paymentTerm/';
import { SalesOrderLinesRequestBuilderNavigationMetadata, SalesOrderLinesRequestBuilderRequestsMetadata, SalesOrderLinesRequestBuilderUriTemplate, type SalesOrderLinesRequestBuilder } from './salesOrderLines/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the salesOrders property of the microsoft.graph.company entity.
 */
export interface SalesOrderItemRequestBuilder extends BaseRequestBuilder<SalesOrderItemRequestBuilder> {
    /**
     * Provides operations to manage the currency property of the microsoft.graph.salesOrder entity.
     */
    get currency(): CurrencyRequestBuilder;
    /**
     * Provides operations to manage the customer property of the microsoft.graph.salesOrder entity.
     */
    get customer(): CustomerRequestBuilder;
    /**
     * Provides operations to manage the paymentTerm property of the microsoft.graph.salesOrder entity.
     */
    get paymentTerm(): PaymentTermRequestBuilder;
    /**
     * Provides operations to manage the salesOrderLines property of the microsoft.graph.salesOrder entity.
     */
    get salesOrderLines(): SalesOrderLinesRequestBuilder;
    /**
     * Get salesOrders from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SalesOrder
     */
     get(requestConfiguration?: RequestConfiguration<SalesOrderItemRequestBuilderGetQueryParameters> | undefined) : Promise<SalesOrder | undefined>;
    /**
     * Update the navigation property salesOrders in financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SalesOrder
     */
     patch(body: SalesOrder, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SalesOrder | undefined>;
    /**
     * Get salesOrders from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SalesOrderItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property salesOrders in financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: SalesOrder, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get salesOrders from financials
 */
export interface SalesOrderItemRequestBuilderGetQueryParameters {
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
const SalesOrderItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SalesOrderItemRequestBuilderNavigationMetadata: Record<Exclude<keyof SalesOrderItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    currency: {
        uriTemplate: CurrencyRequestBuilderUriTemplate,
        requestsMetadata: CurrencyRequestBuilderRequestsMetadata,
    },
    customer: {
        uriTemplate: CustomerRequestBuilderUriTemplate,
        requestsMetadata: CustomerRequestBuilderRequestsMetadata,
        navigationMetadata: CustomerRequestBuilderNavigationMetadata,
    },
    paymentTerm: {
        uriTemplate: PaymentTermRequestBuilderUriTemplate,
        requestsMetadata: PaymentTermRequestBuilderRequestsMetadata,
    },
    salesOrderLines: {
        uriTemplate: SalesOrderLinesRequestBuilderUriTemplate,
        requestsMetadata: SalesOrderLinesRequestBuilderRequestsMetadata,
        navigationMetadata: SalesOrderLinesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SalesOrderItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSalesOrderFromDiscriminatorValue,
        queryParametersMapper: SalesOrderItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSalesOrderFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSalesOrder,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SalesOrderItemRequestBuilderUriTemplate = "{+baseurl}/financials/companies/{company%2Did}/salesOrders/{salesOrder%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */