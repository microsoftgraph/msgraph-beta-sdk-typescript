/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createRoleScopeTagFromDiscriminatorValue, serializeRoleScopeTag, type RoleScopeTag } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AssignRequestBuilderRequestsMetadata, AssignRequestBuilderUriTemplate, type AssignRequestBuilder } from './assign/';
import { AssignmentsRequestBuilderNavigationMetadata, AssignmentsRequestBuilderRequestsMetadata, AssignmentsRequestBuilderUriTemplate, type AssignmentsRequestBuilder } from './assignments/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleScopeTags property of the microsoft.graph.deviceManagement entity.
 */
export interface RoleScopeTagItemRequestBuilder extends BaseRequestBuilder<RoleScopeTagItemRequestBuilder> {
    /**
     * Provides operations to call the assign method.
     */
    get assign(): AssignRequestBuilder;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.roleScopeTag entity.
     */
    get assignments(): AssignmentsRequestBuilder;
    /**
     * Delete navigation property roleScopeTags for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The Role Scope Tags.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RoleScopeTag
     */
     get(requestConfiguration?: RequestConfiguration<RoleScopeTagItemRequestBuilderGetQueryParameters> | undefined) : Promise<RoleScopeTag | undefined>;
    /**
     * Update the navigation property roleScopeTags in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RoleScopeTag
     */
     patch(body: RoleScopeTag, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<RoleScopeTag | undefined>;
    /**
     * Delete navigation property roleScopeTags for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The Role Scope Tags.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RoleScopeTagItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property roleScopeTags in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: RoleScopeTag, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The Role Scope Tags.
 */
export interface RoleScopeTagItemRequestBuilderGetQueryParameters {
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
const RoleScopeTagItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const RoleScopeTagItemRequestBuilderNavigationMetadata: Record<Exclude<keyof RoleScopeTagItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    assign: {
        uriTemplate: AssignRequestBuilderUriTemplate,
        requestsMetadata: AssignRequestBuilderRequestsMetadata,
    },
    assignments: {
        uriTemplate: AssignmentsRequestBuilderUriTemplate,
        requestsMetadata: AssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RoleScopeTagItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createRoleScopeTagFromDiscriminatorValue,
        queryParametersMapper: RoleScopeTagItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createRoleScopeTagFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRoleScopeTag,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const RoleScopeTagItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/roleScopeTags/{roleScopeTag%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */