/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceManagementCompliancePolicyCollectionResponseFromDiscriminatorValue, createDeviceManagementCompliancePolicyFromDiscriminatorValue, serializeDeviceManagementCompliancePolicy, type DeviceManagementCompliancePolicy, type DeviceManagementCompliancePolicyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DeviceManagementCompliancePolicyItemRequestBuilderNavigationMetadata, DeviceManagementCompliancePolicyItemRequestBuilderRequestsMetadata, DeviceManagementCompliancePolicyItemRequestBuilderUriTemplate, type DeviceManagementCompliancePolicyItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the compliancePolicies property of the microsoft.graph.deviceManagement entity.
 */
export interface CompliancePoliciesRequestBuilder extends BaseRequestBuilder<CompliancePoliciesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the compliancePolicies property of the microsoft.graph.deviceManagement entity.
     * @param deviceManagementCompliancePolicyId The unique identifier of deviceManagementCompliancePolicy
     * @returns a DeviceManagementCompliancePolicyItemRequestBuilder
     */
     byDeviceManagementCompliancePolicyId(deviceManagementCompliancePolicyId: string) : DeviceManagementCompliancePolicyItemRequestBuilder;
    /**
     * List of all compliance policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementCompliancePolicyCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<CompliancePoliciesRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceManagementCompliancePolicyCollectionResponse | undefined>;
    /**
     * Create new navigation property to compliancePolicies for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementCompliancePolicy
     */
     post(body: DeviceManagementCompliancePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceManagementCompliancePolicy | undefined>;
    /**
     * List of all compliance policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CompliancePoliciesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to compliancePolicies for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: DeviceManagementCompliancePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of all compliance policies
 */
export interface CompliancePoliciesRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CompliancePoliciesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const CompliancePoliciesRequestBuilderNavigationMetadata: Record<Exclude<keyof CompliancePoliciesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDeviceManagementCompliancePolicyId: {
        uriTemplate: DeviceManagementCompliancePolicyItemRequestBuilderUriTemplate,
        requestsMetadata: DeviceManagementCompliancePolicyItemRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceManagementCompliancePolicyItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["deviceManagementCompliancePolicy%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CompliancePoliciesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceManagementCompliancePolicyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CompliancePoliciesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceManagementCompliancePolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceManagementCompliancePolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CompliancePoliciesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/compliancePolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */