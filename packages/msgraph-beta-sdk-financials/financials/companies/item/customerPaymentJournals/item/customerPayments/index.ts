/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCustomerPaymentCollectionResponseFromDiscriminatorValue, createCustomerPaymentFromDiscriminatorValue, serializeCustomerPayment, type CustomerPayment, type CustomerPaymentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { CustomerPaymentItemRequestBuilderNavigationMetadata, CustomerPaymentItemRequestBuilderRequestsMetadata, CustomerPaymentItemRequestBuilderUriTemplate, type CustomerPaymentItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
import { type Guid } from 'guid-typescript';

/**
 * Provides operations to manage the customerPayments property of the microsoft.graph.customerPaymentJournal entity.
 */
export interface CustomerPaymentsRequestBuilder extends BaseRequestBuilder<CustomerPaymentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the customerPayments property of the microsoft.graph.customerPaymentJournal entity.
     * @param customerPaymentId The unique identifier of customerPayment
     * @returns a CustomerPaymentItemRequestBuilder
     */
     byCustomerPaymentId(customerPaymentId: Guid) : CustomerPaymentItemRequestBuilder;
    /**
     * Get customerPayments from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomerPaymentCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<CustomerPaymentsRequestBuilderGetQueryParameters> | undefined) : Promise<CustomerPaymentCollectionResponse | undefined>;
    /**
     * Create new navigation property to customerPayments for financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomerPayment
     */
     post(body: CustomerPayment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CustomerPayment | undefined>;
    /**
     * Get customerPayments from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CustomerPaymentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to customerPayments for financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CustomerPayment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get customerPayments from financials
 */
export interface CustomerPaymentsRequestBuilderGetQueryParameters {
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
const CustomerPaymentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const CustomerPaymentsRequestBuilderNavigationMetadata: Record<Exclude<keyof CustomerPaymentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCustomerPaymentId: {
        uriTemplate: CustomerPaymentItemRequestBuilderUriTemplate,
        requestsMetadata: CustomerPaymentItemRequestBuilderRequestsMetadata,
        navigationMetadata: CustomerPaymentItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["customerPayment%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CustomerPaymentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCustomerPaymentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CustomerPaymentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCustomerPaymentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCustomerPayment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CustomerPaymentsRequestBuilderUriTemplate = "{+baseurl}/financials/companies/{company%2Did}/customerPaymentJournals/{customerPaymentJournal%2Did}/customerPayments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */