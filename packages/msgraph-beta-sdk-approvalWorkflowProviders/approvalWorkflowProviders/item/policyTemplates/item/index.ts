/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createGovernancePolicyTemplateFromDiscriminatorValue, serializeGovernancePolicyTemplate, type GovernancePolicyTemplate } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the policyTemplates property of the microsoft.graph.approvalWorkflowProvider entity.
 */
export interface GovernancePolicyTemplateItemRequestBuilder extends BaseRequestBuilder<GovernancePolicyTemplateItemRequestBuilder> {
    /**
     * Delete navigation property policyTemplates for approvalWorkflowProviders
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get policyTemplates from approvalWorkflowProviders
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GovernancePolicyTemplate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<GovernancePolicyTemplateItemRequestBuilderGetQueryParameters> | undefined) : Promise<GovernancePolicyTemplate | undefined>;
    /**
     * Update the navigation property policyTemplates in approvalWorkflowProviders
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GovernancePolicyTemplate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: GovernancePolicyTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GovernancePolicyTemplate | undefined>;
    /**
     * Delete navigation property policyTemplates for approvalWorkflowProviders
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get policyTemplates from approvalWorkflowProviders
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GovernancePolicyTemplateItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property policyTemplates in approvalWorkflowProviders
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: GovernancePolicyTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get policyTemplates from approvalWorkflowProviders
 */
export interface GovernancePolicyTemplateItemRequestBuilderGetQueryParameters {
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
export const GovernancePolicyTemplateItemRequestBuilderUriTemplate = "{+baseurl}/approvalWorkflowProviders/{approvalWorkflowProvider%2Did}/policyTemplates/{governancePolicyTemplate%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GovernancePolicyTemplateItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GovernancePolicyTemplateItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: GovernancePolicyTemplateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: GovernancePolicyTemplateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGovernancePolicyTemplateFromDiscriminatorValue,
        queryParametersMapper: GovernancePolicyTemplateItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: GovernancePolicyTemplateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGovernancePolicyTemplateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGovernancePolicyTemplate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
