/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createBillingReconciliationFromDiscriminatorValue, serializeBillingReconciliation, type BillingReconciliation } from '@microsoft/msgraph-beta-sdk/models/partners/billing/';
import { BilledRequestBuilderNavigationMetadata, BilledRequestBuilderRequestsMetadata, type BilledRequestBuilder } from './billed/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the reconciliation property of the microsoft.graph.partners.billing.billing entity.
 */
export interface ReconciliationRequestBuilder extends BaseRequestBuilder<ReconciliationRequestBuilder> {
    /**
     * Provides operations to manage the billed property of the microsoft.graph.partners.billing.billingReconciliation entity.
     */
    get billed(): BilledRequestBuilder;
    /**
     * Delete navigation property reconciliation for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents details for billed invoice reconciliation data.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<BillingReconciliation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ReconciliationRequestBuilderGetQueryParameters> | undefined) : Promise<BillingReconciliation | undefined>;
    /**
     * Update the navigation property reconciliation in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<BillingReconciliation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: BillingReconciliation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<BillingReconciliation | undefined>;
    /**
     * Delete navigation property reconciliation for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents details for billed invoice reconciliation data.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ReconciliationRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property reconciliation in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: BillingReconciliation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents details for billed invoice reconciliation data.
 */
export interface ReconciliationRequestBuilderGetQueryParameters {
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
export const ReconciliationRequestBuilderUriTemplate = "{+baseurl}/reports/partners/billing/reconciliation{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ReconciliationRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ReconciliationRequestBuilderNavigationMetadata: Record<Exclude<keyof ReconciliationRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    billed: {
        requestsMetadata: BilledRequestBuilderRequestsMetadata,
        navigationMetadata: BilledRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ReconciliationRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ReconciliationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ReconciliationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createBillingReconciliationFromDiscriminatorValue,
        queryParametersMapper: ReconciliationRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ReconciliationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createBillingReconciliationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeBillingReconciliation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */