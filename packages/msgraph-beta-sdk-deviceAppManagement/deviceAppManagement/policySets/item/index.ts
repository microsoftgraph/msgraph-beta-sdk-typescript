/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPolicySetFromDiscriminatorValue, serializePolicySet, type PolicySet } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AssignmentsRequestBuilderNavigationMetadata, AssignmentsRequestBuilderRequestsMetadata, type AssignmentsRequestBuilder } from './assignments/index.js';
// @ts-ignore
import { ItemsRequestBuilderNavigationMetadata, ItemsRequestBuilderRequestsMetadata, type ItemsRequestBuilder } from './items/index.js';
// @ts-ignore
import { type UpdateRequestBuilder, UpdateRequestBuilderRequestsMetadata } from './update/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the policySets property of the microsoft.graph.deviceAppManagement entity.
 */
export interface PolicySetItemRequestBuilder extends BaseRequestBuilder<PolicySetItemRequestBuilder> {
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.policySet entity.
     */
    get assignments(): AssignmentsRequestBuilder;
    /**
     * Provides operations to manage the items property of the microsoft.graph.policySet entity.
     */
    get items(): ItemsRequestBuilder;
    /**
     * Provides operations to call the update method.
     */
    get update(): UpdateRequestBuilder;
    /**
     * Delete navigation property policySets for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The PolicySet of Policies and Applications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PolicySet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<PolicySetItemRequestBuilderGetQueryParameters> | undefined) : Promise<PolicySet | undefined>;
    /**
     * Update the navigation property policySets in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PolicySet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: PolicySet, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PolicySet | undefined>;
    /**
     * Delete navigation property policySets for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The PolicySet of Policies and Applications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PolicySetItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property policySets in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: PolicySet, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The PolicySet of Policies and Applications
 */
export interface PolicySetItemRequestBuilderGetQueryParameters {
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
export const PolicySetItemRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/policySets/{policySet%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PolicySetItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PolicySetItemRequestBuilderNavigationMetadata: Record<Exclude<keyof PolicySetItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    assignments: {
        requestsMetadata: AssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentsRequestBuilderNavigationMetadata,
    },
    items: {
        requestsMetadata: ItemsRequestBuilderRequestsMetadata,
        navigationMetadata: ItemsRequestBuilderNavigationMetadata,
    },
    update: {
        requestsMetadata: UpdateRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PolicySetItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: PolicySetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: PolicySetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPolicySetFromDiscriminatorValue,
        queryParametersMapper: PolicySetItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: PolicySetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPolicySetFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePolicySet,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
