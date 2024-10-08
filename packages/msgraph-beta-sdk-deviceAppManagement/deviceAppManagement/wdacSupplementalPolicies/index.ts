/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWindowsDefenderApplicationControlSupplementalPolicyCollectionResponseFromDiscriminatorValue, createWindowsDefenderApplicationControlSupplementalPolicyFromDiscriminatorValue, serializeWindowsDefenderApplicationControlSupplementalPolicy, type WindowsDefenderApplicationControlSupplementalPolicy, type WindowsDefenderApplicationControlSupplementalPolicyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { type WindowsDefenderApplicationControlSupplementalPolicyItemRequestBuilder, WindowsDefenderApplicationControlSupplementalPolicyItemRequestBuilderNavigationMetadata, WindowsDefenderApplicationControlSupplementalPolicyItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the wdacSupplementalPolicies property of the microsoft.graph.deviceAppManagement entity.
 */
export interface WdacSupplementalPoliciesRequestBuilder extends BaseRequestBuilder<WdacSupplementalPoliciesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the wdacSupplementalPolicies property of the microsoft.graph.deviceAppManagement entity.
     * @param windowsDefenderApplicationControlSupplementalPolicyId The unique identifier of windowsDefenderApplicationControlSupplementalPolicy
     * @returns {WindowsDefenderApplicationControlSupplementalPolicyItemRequestBuilder}
     */
     byWindowsDefenderApplicationControlSupplementalPolicyId(windowsDefenderApplicationControlSupplementalPolicyId: string) : WindowsDefenderApplicationControlSupplementalPolicyItemRequestBuilder;
    /**
     * The collection of Windows Defender Application Control Supplemental Policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsDefenderApplicationControlSupplementalPolicyCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<WdacSupplementalPoliciesRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsDefenderApplicationControlSupplementalPolicyCollectionResponse | undefined>;
    /**
     * Create new navigation property to wdacSupplementalPolicies for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsDefenderApplicationControlSupplementalPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: WindowsDefenderApplicationControlSupplementalPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WindowsDefenderApplicationControlSupplementalPolicy | undefined>;
    /**
     * The collection of Windows Defender Application Control Supplemental Policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WdacSupplementalPoliciesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to wdacSupplementalPolicies for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: WindowsDefenderApplicationControlSupplementalPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of Windows Defender Application Control Supplemental Policies.
 */
export interface WdacSupplementalPoliciesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const WdacSupplementalPoliciesRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/wdacSupplementalPolicies{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const WdacSupplementalPoliciesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WdacSupplementalPoliciesRequestBuilderNavigationMetadata: Record<Exclude<keyof WdacSupplementalPoliciesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byWindowsDefenderApplicationControlSupplementalPolicyId: {
        requestsMetadata: WindowsDefenderApplicationControlSupplementalPolicyItemRequestBuilderRequestsMetadata,
        navigationMetadata: WindowsDefenderApplicationControlSupplementalPolicyItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["windowsDefenderApplicationControlSupplementalPolicy%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WdacSupplementalPoliciesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: WdacSupplementalPoliciesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsDefenderApplicationControlSupplementalPolicyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: WdacSupplementalPoliciesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: WdacSupplementalPoliciesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsDefenderApplicationControlSupplementalPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWindowsDefenderApplicationControlSupplementalPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
