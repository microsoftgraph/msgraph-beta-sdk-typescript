/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAdvancedThreatProtectionOnboardingDeviceSettingStateCollectionResponseFromDiscriminatorValue, createAdvancedThreatProtectionOnboardingDeviceSettingStateFromDiscriminatorValue, serializeAdvancedThreatProtectionOnboardingDeviceSettingState, type AdvancedThreatProtectionOnboardingDeviceSettingState, type AdvancedThreatProtectionOnboardingDeviceSettingStateCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { AdvancedThreatProtectionOnboardingDeviceSettingStateItemRequestBuilderRequestsMetadata, AdvancedThreatProtectionOnboardingDeviceSettingStateItemRequestBuilderUriTemplate, type AdvancedThreatProtectionOnboardingDeviceSettingStateItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the advancedThreatProtectionOnboardingDeviceSettingStates property of the microsoft.graph.advancedThreatProtectionOnboardingStateSummary entity.
 */
export interface AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilder extends BaseRequestBuilder<AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the advancedThreatProtectionOnboardingDeviceSettingStates property of the microsoft.graph.advancedThreatProtectionOnboardingStateSummary entity.
     * @param advancedThreatProtectionOnboardingDeviceSettingStateId The unique identifier of advancedThreatProtectionOnboardingDeviceSettingState
     * @returns a AdvancedThreatProtectionOnboardingDeviceSettingStateItemRequestBuilder
     */
     byAdvancedThreatProtectionOnboardingDeviceSettingStateId(advancedThreatProtectionOnboardingDeviceSettingStateId: string) : AdvancedThreatProtectionOnboardingDeviceSettingStateItemRequestBuilder;
    /**
     * Get advancedThreatProtectionOnboardingDeviceSettingStates from deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AdvancedThreatProtectionOnboardingDeviceSettingStateCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilderGetQueryParameters> | undefined) : Promise<AdvancedThreatProtectionOnboardingDeviceSettingStateCollectionResponse | undefined>;
    /**
     * Create new navigation property to advancedThreatProtectionOnboardingDeviceSettingStates for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AdvancedThreatProtectionOnboardingDeviceSettingState
     */
     post(body: AdvancedThreatProtectionOnboardingDeviceSettingState, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AdvancedThreatProtectionOnboardingDeviceSettingState | undefined>;
    /**
     * Get advancedThreatProtectionOnboardingDeviceSettingStates from deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to advancedThreatProtectionOnboardingDeviceSettingStates for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AdvancedThreatProtectionOnboardingDeviceSettingState, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get advancedThreatProtectionOnboardingDeviceSettingStates from deviceManagement
 */
export interface AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilderGetQueryParameters {
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
const AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilderNavigationMetadata: Record<Exclude<keyof AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAdvancedThreatProtectionOnboardingDeviceSettingStateId: {
        uriTemplate: AdvancedThreatProtectionOnboardingDeviceSettingStateItemRequestBuilderUriTemplate,
        requestsMetadata: AdvancedThreatProtectionOnboardingDeviceSettingStateItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["advancedThreatProtectionOnboardingDeviceSettingState%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAdvancedThreatProtectionOnboardingDeviceSettingStateCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAdvancedThreatProtectionOnboardingDeviceSettingStateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAdvancedThreatProtectionOnboardingDeviceSettingState,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/advancedThreatProtectionOnboardingStateSummary/advancedThreatProtectionOnboardingDeviceSettingStates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */