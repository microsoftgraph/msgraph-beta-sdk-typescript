/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createApprovalStepFromDiscriminatorValue, serializeApprovalStep, type ApprovalStep } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the steps property of the microsoft.graph.approval entity.
 */
export interface ApprovalStepItemRequestBuilder extends BaseRequestBuilder<ApprovalStepItemRequestBuilder> {
    /**
     * Delete navigation property steps for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties of an approvalStep object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ApprovalStep
     * @see {@link https://learn.microsoft.com/graph/api/approvalstep-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ApprovalStepItemRequestBuilderGetQueryParameters> | undefined) : Promise<ApprovalStep | undefined>;
    /**
     * Apply approve or deny decision on an approvalStep object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ApprovalStep
     * @see {@link https://learn.microsoft.com/graph/api/approvalstep-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: ApprovalStep, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ApprovalStep | undefined>;
    /**
     * Delete navigation property steps for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties of an approvalStep object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ApprovalStepItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Apply approve or deny decision on an approvalStep object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ApprovalStep, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties of an approvalStep object.
 */
export interface ApprovalStepItemRequestBuilderGetQueryParameters {
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
const ApprovalStepItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ApprovalStepItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createApprovalStepFromDiscriminatorValue,
        queryParametersMapper: ApprovalStepItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createApprovalStepFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeApprovalStep,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ApprovalStepItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/approvals/{approval%2Did}/steps/{approvalStep%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */