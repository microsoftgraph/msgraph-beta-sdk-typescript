/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createGovernanceRoleAssignmentRequestFromDiscriminatorValue, serializeGovernanceRoleAssignmentRequest, type GovernanceRoleAssignmentRequest } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CancelRequestBuilderRequestsMetadata, CancelRequestBuilderUriTemplate, type CancelRequestBuilder } from './cancel/';
import { ResourceRequestBuilderRequestsMetadata, ResourceRequestBuilderUriTemplate, type ResourceRequestBuilder } from './resource/';
import { RoleDefinitionRequestBuilderNavigationMetadata, RoleDefinitionRequestBuilderRequestsMetadata, RoleDefinitionRequestBuilderUriTemplate, type RoleDefinitionRequestBuilder } from './roleDefinition/';
import { SubjectRequestBuilderRequestsMetadata, SubjectRequestBuilderUriTemplate, type SubjectRequestBuilder } from './subject/';
import { type UpdateRequestRequestBuilder, UpdateRequestRequestBuilderRequestsMetadata, UpdateRequestRequestBuilderUriTemplate } from './updateRequest/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignmentRequests property of the microsoft.graph.privilegedAccess entity.
 */
export interface GovernanceRoleAssignmentRequestItemRequestBuilder extends BaseRequestBuilder<GovernanceRoleAssignmentRequestItemRequestBuilder> {
    /**
     * Provides operations to call the cancel method.
     */
    get cancel(): CancelRequestBuilder;
    /**
     * Provides operations to manage the resource property of the microsoft.graph.governanceRoleAssignmentRequest entity.
     */
    get resource(): ResourceRequestBuilder;
    /**
     * Provides operations to manage the roleDefinition property of the microsoft.graph.governanceRoleAssignmentRequest entity.
     */
    get roleDefinition(): RoleDefinitionRequestBuilder;
    /**
     * Provides operations to manage the subject property of the microsoft.graph.governanceRoleAssignmentRequest entity.
     */
    get subject(): SubjectRequestBuilder;
    /**
     * Provides operations to call the updateRequest method.
     */
    get updateRequest(): UpdateRequestRequestBuilder;
    /**
     * Delete navigation property roleAssignmentRequests for privilegedAccess
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A collection of role assignment requests for the provider.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GovernanceRoleAssignmentRequest
     */
     get(requestConfiguration?: RequestConfiguration<GovernanceRoleAssignmentRequestItemRequestBuilderGetQueryParameters> | undefined) : Promise<GovernanceRoleAssignmentRequest | undefined>;
    /**
     * Update the navigation property roleAssignmentRequests in privilegedAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GovernanceRoleAssignmentRequest
     */
     patch(body: GovernanceRoleAssignmentRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GovernanceRoleAssignmentRequest | undefined>;
    /**
     * Delete navigation property roleAssignmentRequests for privilegedAccess
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A collection of role assignment requests for the provider.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GovernanceRoleAssignmentRequestItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property roleAssignmentRequests in privilegedAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: GovernanceRoleAssignmentRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A collection of role assignment requests for the provider.
 */
export interface GovernanceRoleAssignmentRequestItemRequestBuilderGetQueryParameters {
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
const GovernanceRoleAssignmentRequestItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GovernanceRoleAssignmentRequestItemRequestBuilderNavigationMetadata: Record<Exclude<keyof GovernanceRoleAssignmentRequestItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    cancel: {
        uriTemplate: CancelRequestBuilderUriTemplate,
        requestsMetadata: CancelRequestBuilderRequestsMetadata,
    },
    resource: {
        uriTemplate: ResourceRequestBuilderUriTemplate,
        requestsMetadata: ResourceRequestBuilderRequestsMetadata,
    },
    roleDefinition: {
        uriTemplate: RoleDefinitionRequestBuilderUriTemplate,
        requestsMetadata: RoleDefinitionRequestBuilderRequestsMetadata,
        navigationMetadata: RoleDefinitionRequestBuilderNavigationMetadata,
    },
    subject: {
        uriTemplate: SubjectRequestBuilderUriTemplate,
        requestsMetadata: SubjectRequestBuilderRequestsMetadata,
    },
    updateRequest: {
        uriTemplate: UpdateRequestRequestBuilderUriTemplate,
        requestsMetadata: UpdateRequestRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GovernanceRoleAssignmentRequestItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createGovernanceRoleAssignmentRequestFromDiscriminatorValue,
        queryParametersMapper: GovernanceRoleAssignmentRequestItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createGovernanceRoleAssignmentRequestFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGovernanceRoleAssignmentRequest,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GovernanceRoleAssignmentRequestItemRequestBuilderUriTemplate = "{+baseurl}/privilegedAccess/{privilegedAccess%2Did}/roleAssignmentRequests/{governanceRoleAssignmentRequest%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */