/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createGroupPolicyPresentationFromDiscriminatorValue, serializeGroupPolicyPresentation, type GroupPolicyPresentation } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { DefinitionRequestBuilderRequestsMetadata, type DefinitionRequestBuilder } from './definition/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the presentations property of the microsoft.graph.groupPolicyDefinition entity.
 */
export interface GroupPolicyPresentationItemRequestBuilder extends BaseRequestBuilder<GroupPolicyPresentationItemRequestBuilder> {
    /**
     * Provides operations to manage the definition property of the microsoft.graph.groupPolicyPresentation entity.
     */
    get definition(): DefinitionRequestBuilder;
    /**
     * Delete navigation property presentations for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The group policy presentations associated with the definition.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GroupPolicyPresentation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<GroupPolicyPresentationItemRequestBuilderGetQueryParameters> | undefined) : Promise<GroupPolicyPresentation | undefined>;
    /**
     * Update the navigation property presentations in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GroupPolicyPresentation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: GroupPolicyPresentation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GroupPolicyPresentation | undefined>;
    /**
     * Delete navigation property presentations for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The group policy presentations associated with the definition.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GroupPolicyPresentationItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property presentations in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: GroupPolicyPresentation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The group policy presentations associated with the definition.
 */
export interface GroupPolicyPresentationItemRequestBuilderGetQueryParameters {
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
export const GroupPolicyPresentationItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition%2Did}/previousVersionDefinition/presentations/{groupPolicyPresentation%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GroupPolicyPresentationItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GroupPolicyPresentationItemRequestBuilderNavigationMetadata: Record<Exclude<keyof GroupPolicyPresentationItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    definition: {
        requestsMetadata: DefinitionRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GroupPolicyPresentationItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: GroupPolicyPresentationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: GroupPolicyPresentationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGroupPolicyPresentationFromDiscriminatorValue,
        queryParametersMapper: GroupPolicyPresentationItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: GroupPolicyPresentationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGroupPolicyPresentationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGroupPolicyPresentation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
