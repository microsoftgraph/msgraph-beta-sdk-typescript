/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createApprovalSolutionFromDiscriminatorValue, serializeApprovalSolution, type ApprovalSolution } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ApprovalItemsRequestBuilderNavigationMetadata, ApprovalItemsRequestBuilderRequestsMetadata, type ApprovalItemsRequestBuilder } from './approvalItems/index.js';
// @ts-ignore
import { OperationsRequestBuilderNavigationMetadata, OperationsRequestBuilderRequestsMetadata, type OperationsRequestBuilder } from './operations/index.js';
// @ts-ignore
import { ProvisionRequestBuilderRequestsMetadata, type ProvisionRequestBuilder } from './provision/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the approval property of the microsoft.graph.solutionsRoot entity.
 */
export interface ApprovalRequestBuilder extends BaseRequestBuilder<ApprovalRequestBuilder> {
    /**
     * Provides operations to manage the approvalItems property of the microsoft.graph.approvalSolution entity.
     */
    get approvalItems(): ApprovalItemsRequestBuilder;
    /**
     * Provides operations to manage the operations property of the microsoft.graph.approvalSolution entity.
     */
    get operations(): OperationsRequestBuilder;
    /**
     * Provides operations to call the provision method.
     */
    get provision(): ProvisionRequestBuilder;
    /**
     * Delete navigation property approval for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties of an approvalSolution object to determine the provisioning state for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ApprovalSolution>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/approvalsolution-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ApprovalRequestBuilderGetQueryParameters> | undefined) : Promise<ApprovalSolution | undefined>;
    /**
     * Update the navigation property approval in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ApprovalSolution>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ApprovalSolution, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ApprovalSolution | undefined>;
    /**
     * Delete navigation property approval for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties of an approvalSolution object to determine the provisioning state for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ApprovalRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property approval in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ApprovalSolution, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties of an approvalSolution object to determine the provisioning state for a tenant.
 */
export interface ApprovalRequestBuilderGetQueryParameters {
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
export const ApprovalRequestBuilderUriTemplate = "{+baseurl}/solutions/approval{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ApprovalRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ApprovalRequestBuilderNavigationMetadata: Record<Exclude<keyof ApprovalRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    approvalItems: {
        requestsMetadata: ApprovalItemsRequestBuilderRequestsMetadata,
        navigationMetadata: ApprovalItemsRequestBuilderNavigationMetadata,
    },
    operations: {
        requestsMetadata: OperationsRequestBuilderRequestsMetadata,
        navigationMetadata: OperationsRequestBuilderNavigationMetadata,
    },
    provision: {
        requestsMetadata: ProvisionRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ApprovalRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ApprovalRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ApprovalRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createApprovalSolutionFromDiscriminatorValue,
        queryParametersMapper: ApprovalRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ApprovalRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createApprovalSolutionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeApprovalSolution,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
