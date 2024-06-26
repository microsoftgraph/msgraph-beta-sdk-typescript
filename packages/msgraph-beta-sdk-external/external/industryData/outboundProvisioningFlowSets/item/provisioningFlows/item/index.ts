/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createProvisioningFlowFromDiscriminatorValue, serializeProvisioningFlow, type ProvisioningFlow } from '@microsoft/msgraph-beta-sdk/models/industryData/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { MicrosoftGraphIndustryDataResetRequestBuilderRequestsMetadata, type MicrosoftGraphIndustryDataResetRequestBuilder } from './microsoftGraphIndustryDataReset/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the provisioningFlows property of the microsoft.graph.industryData.outboundProvisioningFlowSet entity.
 */
export interface ProvisioningFlowItemRequestBuilder extends BaseRequestBuilder<ProvisioningFlowItemRequestBuilder> {
    /**
     * Provides operations to call the reset method.
     */
    get microsoftGraphIndustryDataReset(): MicrosoftGraphIndustryDataResetRequestBuilder;
    /**
     * Delete navigation property provisioningFlows for external
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A flow that provisions relevant records of a given entity type in the Microsoft 365 tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ProvisioningFlow>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ProvisioningFlowItemRequestBuilderGetQueryParameters> | undefined) : Promise<ProvisioningFlow | undefined>;
    /**
     * Update the navigation property provisioningFlows in external
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ProvisioningFlow>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ProvisioningFlow, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ProvisioningFlow | undefined>;
    /**
     * Delete navigation property provisioningFlows for external
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A flow that provisions relevant records of a given entity type in the Microsoft 365 tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ProvisioningFlowItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property provisioningFlows in external
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ProvisioningFlow, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A flow that provisions relevant records of a given entity type in the Microsoft 365 tenant.
 */
export interface ProvisioningFlowItemRequestBuilderGetQueryParameters {
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
export const ProvisioningFlowItemRequestBuilderUriTemplate = "{+baseurl}/external/industryData/outboundProvisioningFlowSets/{outboundProvisioningFlowSet%2Did}/provisioningFlows/{provisioningFlow%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ProvisioningFlowItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ProvisioningFlowItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ProvisioningFlowItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    microsoftGraphIndustryDataReset: {
        requestsMetadata: MicrosoftGraphIndustryDataResetRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ProvisioningFlowItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ProvisioningFlowItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ProvisioningFlowItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createProvisioningFlowFromDiscriminatorValue,
        queryParametersMapper: ProvisioningFlowItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ProvisioningFlowItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createProvisioningFlowFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeProvisioningFlow,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
