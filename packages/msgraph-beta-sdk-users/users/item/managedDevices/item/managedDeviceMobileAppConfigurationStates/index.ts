/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagedDeviceMobileAppConfigurationStateCollectionResponseFromDiscriminatorValue, createManagedDeviceMobileAppConfigurationStateFromDiscriminatorValue, serializeManagedDeviceMobileAppConfigurationState, type ManagedDeviceMobileAppConfigurationState, type ManagedDeviceMobileAppConfigurationStateCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ManagedDeviceMobileAppConfigurationStateItemRequestBuilderRequestsMetadata, type ManagedDeviceMobileAppConfigurationStateItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedDeviceMobileAppConfigurationStates property of the microsoft.graph.managedDevice entity.
 */
export interface ManagedDeviceMobileAppConfigurationStatesRequestBuilder extends BaseRequestBuilder<ManagedDeviceMobileAppConfigurationStatesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the managedDeviceMobileAppConfigurationStates property of the microsoft.graph.managedDevice entity.
     * @param managedDeviceMobileAppConfigurationStateId The unique identifier of managedDeviceMobileAppConfigurationState
     * @returns {ManagedDeviceMobileAppConfigurationStateItemRequestBuilder}
     */
     byManagedDeviceMobileAppConfigurationStateId(managedDeviceMobileAppConfigurationStateId: string) : ManagedDeviceMobileAppConfigurationStateItemRequestBuilder;
    /**
     * Managed device mobile app configuration states for this device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedDeviceMobileAppConfigurationStateCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ManagedDeviceMobileAppConfigurationStatesRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedDeviceMobileAppConfigurationStateCollectionResponse | undefined>;
    /**
     * Create new navigation property to managedDeviceMobileAppConfigurationStates for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedDeviceMobileAppConfigurationState>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ManagedDeviceMobileAppConfigurationState, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedDeviceMobileAppConfigurationState | undefined>;
    /**
     * Managed device mobile app configuration states for this device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedDeviceMobileAppConfigurationStatesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to managedDeviceMobileAppConfigurationStates for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ManagedDeviceMobileAppConfigurationState, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Managed device mobile app configuration states for this device.
 */
export interface ManagedDeviceMobileAppConfigurationStatesRequestBuilderGetQueryParameters {
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
export const ManagedDeviceMobileAppConfigurationStatesRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/managedDevices/{managedDevice%2Did}/managedDeviceMobileAppConfigurationStates{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ManagedDeviceMobileAppConfigurationStatesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ManagedDeviceMobileAppConfigurationStatesRequestBuilderNavigationMetadata: Record<Exclude<keyof ManagedDeviceMobileAppConfigurationStatesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byManagedDeviceMobileAppConfigurationStateId: {
        requestsMetadata: ManagedDeviceMobileAppConfigurationStateItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["managedDeviceMobileAppConfigurationState%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedDeviceMobileAppConfigurationStatesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ManagedDeviceMobileAppConfigurationStatesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedDeviceMobileAppConfigurationStateCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ManagedDeviceMobileAppConfigurationStatesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ManagedDeviceMobileAppConfigurationStatesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedDeviceMobileAppConfigurationStateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedDeviceMobileAppConfigurationState,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
