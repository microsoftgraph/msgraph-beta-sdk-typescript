/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createSalesInvoiceFromDiscriminatorValue, serializeSalesInvoice, type SalesInvoice } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CancelRequestBuilderRequestsMetadata, CancelRequestBuilderUriTemplate, type CancelRequestBuilder } from './cancel/';
import { CancelAndSendRequestBuilderRequestsMetadata, CancelAndSendRequestBuilderUriTemplate, type CancelAndSendRequestBuilder } from './cancelAndSend/';
import { CurrencyRequestBuilderRequestsMetadata, CurrencyRequestBuilderUriTemplate, type CurrencyRequestBuilder } from './currency/';
import { CustomerRequestBuilderNavigationMetadata, CustomerRequestBuilderRequestsMetadata, CustomerRequestBuilderUriTemplate, type CustomerRequestBuilder } from './customer/';
import { PaymentTermRequestBuilderRequestsMetadata, PaymentTermRequestBuilderUriTemplate, type PaymentTermRequestBuilder } from './paymentTerm/';
import { PostRequestBuilderRequestsMetadata, PostRequestBuilderUriTemplate, type PostRequestBuilder } from './post/';
import { PostAndSendRequestBuilderRequestsMetadata, PostAndSendRequestBuilderUriTemplate, type PostAndSendRequestBuilder } from './postAndSend/';
import { SalesInvoiceLinesRequestBuilderNavigationMetadata, SalesInvoiceLinesRequestBuilderRequestsMetadata, SalesInvoiceLinesRequestBuilderUriTemplate, type SalesInvoiceLinesRequestBuilder } from './salesInvoiceLines/';
import { SendRequestBuilderRequestsMetadata, SendRequestBuilderUriTemplate, type SendRequestBuilder } from './send/';
import { ShipmentMethodRequestBuilderRequestsMetadata, ShipmentMethodRequestBuilderUriTemplate, type ShipmentMethodRequestBuilder } from './shipmentMethod/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the salesInvoices property of the microsoft.graph.company entity.
 */
export interface SalesInvoiceItemRequestBuilder extends BaseRequestBuilder<SalesInvoiceItemRequestBuilder> {
    /**
     * Provides operations to call the cancel method.
     */
    get cancel(): CancelRequestBuilder;
    /**
     * Provides operations to call the cancelAndSend method.
     */
    get cancelAndSend(): CancelAndSendRequestBuilder;
    /**
     * Provides operations to manage the currency property of the microsoft.graph.salesInvoice entity.
     */
    get currency(): CurrencyRequestBuilder;
    /**
     * Provides operations to manage the customer property of the microsoft.graph.salesInvoice entity.
     */
    get customer(): CustomerRequestBuilder;
    /**
     * Provides operations to manage the paymentTerm property of the microsoft.graph.salesInvoice entity.
     */
    get paymentTerm(): PaymentTermRequestBuilder;
    /**
     * Provides operations to call the postAndSend method.
     */
    get postAndSend(): PostAndSendRequestBuilder;
    /**
     * Provides operations to call the post method.
     */
    get postPath(): PostRequestBuilder;
    /**
     * Provides operations to manage the salesInvoiceLines property of the microsoft.graph.salesInvoice entity.
     */
    get salesInvoiceLines(): SalesInvoiceLinesRequestBuilder;
    /**
     * Provides operations to call the send method.
     */
    get send(): SendRequestBuilder;
    /**
     * Provides operations to manage the shipmentMethod property of the microsoft.graph.salesInvoice entity.
     */
    get shipmentMethod(): ShipmentMethodRequestBuilder;
    /**
     * Get salesInvoices from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SalesInvoice
     */
     get(requestConfiguration?: RequestConfiguration<SalesInvoiceItemRequestBuilderGetQueryParameters> | undefined) : Promise<SalesInvoice | undefined>;
    /**
     * Update the navigation property salesInvoices in financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SalesInvoice
     */
     patch(body: SalesInvoice, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SalesInvoice | undefined>;
    /**
     * Get salesInvoices from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SalesInvoiceItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property salesInvoices in financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: SalesInvoice, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get salesInvoices from financials
 */
export interface SalesInvoiceItemRequestBuilderGetQueryParameters {
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
const SalesInvoiceItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SalesInvoiceItemRequestBuilderNavigationMetadata: Record<Exclude<keyof SalesInvoiceItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    cancel: {
        uriTemplate: CancelRequestBuilderUriTemplate,
        requestsMetadata: CancelRequestBuilderRequestsMetadata,
    },
    cancelAndSend: {
        uriTemplate: CancelAndSendRequestBuilderUriTemplate,
        requestsMetadata: CancelAndSendRequestBuilderRequestsMetadata,
    },
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
    postAndSend: {
        uriTemplate: PostAndSendRequestBuilderUriTemplate,
        requestsMetadata: PostAndSendRequestBuilderRequestsMetadata,
    },
    postPath: {
        uriTemplate: PostRequestBuilderUriTemplate,
        requestsMetadata: PostRequestBuilderRequestsMetadata,
    },
    salesInvoiceLines: {
        uriTemplate: SalesInvoiceLinesRequestBuilderUriTemplate,
        requestsMetadata: SalesInvoiceLinesRequestBuilderRequestsMetadata,
        navigationMetadata: SalesInvoiceLinesRequestBuilderNavigationMetadata,
    },
    send: {
        uriTemplate: SendRequestBuilderUriTemplate,
        requestsMetadata: SendRequestBuilderRequestsMetadata,
    },
    shipmentMethod: {
        uriTemplate: ShipmentMethodRequestBuilderUriTemplate,
        requestsMetadata: ShipmentMethodRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SalesInvoiceItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSalesInvoiceFromDiscriminatorValue,
        queryParametersMapper: SalesInvoiceItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSalesInvoiceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSalesInvoice,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SalesInvoiceItemRequestBuilderUriTemplate = "{+baseurl}/financials/companies/{company%2Did}/salesInvoices/{salesInvoice%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */