/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceManagementScriptUserStateCollectionResponseFromDiscriminatorValue, createDeviceManagementScriptUserStateFromDiscriminatorValue, serializeDeviceManagementScriptUserState, type DeviceManagementScriptUserState, type DeviceManagementScriptUserStateCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DeviceManagementScriptUserStateItemRequestBuilderNavigationMetadata, DeviceManagementScriptUserStateItemRequestBuilderRequestsMetadata, DeviceManagementScriptUserStateItemRequestBuilderUriTemplate, type DeviceManagementScriptUserStateItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userRunStates property of the microsoft.graph.deviceCustomAttributeShellScript entity.
 */
export interface UserRunStatesRequestBuilder extends BaseRequestBuilder<UserRunStatesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the userRunStates property of the microsoft.graph.deviceCustomAttributeShellScript entity.
     * @param deviceManagementScriptUserStateId The unique identifier of deviceManagementScriptUserState
     * @returns a DeviceManagementScriptUserStateItemRequestBuilder
     */
     byDeviceManagementScriptUserStateId(deviceManagementScriptUserStateId: string) : DeviceManagementScriptUserStateItemRequestBuilder;
    /**
     * List of run states for this script across all users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementScriptUserStateCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<UserRunStatesRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceManagementScriptUserStateCollectionResponse | undefined>;
    /**
     * Create new navigation property to userRunStates for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementScriptUserState
     */
     post(body: DeviceManagementScriptUserState, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceManagementScriptUserState | undefined>;
    /**
     * List of run states for this script across all users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserRunStatesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to userRunStates for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: DeviceManagementScriptUserState, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of run states for this script across all users.
 */
export interface UserRunStatesRequestBuilderGetQueryParameters {
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
const UserRunStatesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UserRunStatesRequestBuilderNavigationMetadata: Record<Exclude<keyof UserRunStatesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDeviceManagementScriptUserStateId: {
        uriTemplate: DeviceManagementScriptUserStateItemRequestBuilderUriTemplate,
        requestsMetadata: DeviceManagementScriptUserStateItemRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceManagementScriptUserStateItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["deviceManagementScriptUserState%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserRunStatesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceManagementScriptUserStateCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UserRunStatesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceManagementScriptUserStateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceManagementScriptUserState,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UserRunStatesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceCustomAttributeShellScripts/{deviceCustomAttributeShellScript%2Did}/userRunStates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */