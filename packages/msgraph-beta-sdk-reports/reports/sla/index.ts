/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createServiceLevelAgreementRootFromDiscriminatorValue, serializeServiceLevelAgreementRoot, type ServiceLevelAgreementRoot } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AzureADAuthenticationRequestBuilderRequestsMetadata, AzureADAuthenticationRequestBuilderUriTemplate, type AzureADAuthenticationRequestBuilder } from './azureADAuthentication/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sla property of the microsoft.graph.reportRoot entity.
 */
export interface SlaRequestBuilder extends BaseRequestBuilder<SlaRequestBuilder> {
    /**
     * Provides operations to manage the azureADAuthentication property of the microsoft.graph.serviceLevelAgreementRoot entity.
     */
    get azureADAuthentication(): AzureADAuthenticationRequestBuilder;
    /**
     * Delete navigation property sla for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Reports that relate to tenant-level Microsoft Entra SLA attainment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceLevelAgreementRoot
     */
     get(requestConfiguration?: RequestConfiguration<SlaRequestBuilderGetQueryParameters> | undefined) : Promise<ServiceLevelAgreementRoot | undefined>;
    /**
     * Update the navigation property sla in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceLevelAgreementRoot
     */
     patch(body: ServiceLevelAgreementRoot, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ServiceLevelAgreementRoot | undefined>;
    /**
     * Delete navigation property sla for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Reports that relate to tenant-level Microsoft Entra SLA attainment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SlaRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property sla in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ServiceLevelAgreementRoot, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Reports that relate to tenant-level Microsoft Entra SLA attainment.
 */
export interface SlaRequestBuilderGetQueryParameters {
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
const SlaRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SlaRequestBuilderNavigationMetadata: Record<Exclude<keyof SlaRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    azureADAuthentication: {
        uriTemplate: AzureADAuthenticationRequestBuilderUriTemplate,
        requestsMetadata: AzureADAuthenticationRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SlaRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createServiceLevelAgreementRootFromDiscriminatorValue,
        queryParametersMapper: SlaRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createServiceLevelAgreementRootFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeServiceLevelAgreementRoot,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SlaRequestBuilderUriTemplate = "{+baseurl}/reports/sla{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */