/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCallCollectionResponseFromDiscriminatorValue, createCallFromDiscriminatorValue, serializeCall, type Call, type CallCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { CallItemRequestBuilderNavigationMetadata, CallItemRequestBuilderRequestsMetadata, CallItemRequestBuilderUriTemplate, type CallItemRequestBuilder } from './item/';
import { LogTeleconferenceDeviceQualityRequestBuilderRequestsMetadata, LogTeleconferenceDeviceQualityRequestBuilderUriTemplate, type LogTeleconferenceDeviceQualityRequestBuilder } from './logTeleconferenceDeviceQuality/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calls property of the microsoft.graph.commsApplication entity.
 */
export interface CallsRequestBuilder extends BaseRequestBuilder<CallsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the logTeleconferenceDeviceQuality method.
     */
    get logTeleconferenceDeviceQuality(): LogTeleconferenceDeviceQualityRequestBuilder;
    /**
     * Provides operations to manage the calls property of the microsoft.graph.commsApplication entity.
     * @param callId The unique identifier of call
     * @returns a CallItemRequestBuilder
     */
     byCallId(callId: string) : CallItemRequestBuilder;
    /**
     * Get calls from app
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CallCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<CallsRequestBuilderGetQueryParameters> | undefined) : Promise<CallCollectionResponse | undefined>;
    /**
     * Create new navigation property to calls for app
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Call
     */
     post(body: Call, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Call | undefined>;
    /**
     * Get calls from app
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CallsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to calls for app
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Call, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get calls from app
 */
export interface CallsRequestBuilderGetQueryParameters {
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
const CallsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const CallsRequestBuilderNavigationMetadata: Record<Exclude<keyof CallsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCallId: {
        uriTemplate: CallItemRequestBuilderUriTemplate,
        requestsMetadata: CallItemRequestBuilderRequestsMetadata,
        navigationMetadata: CallItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["call%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    logTeleconferenceDeviceQuality: {
        uriTemplate: LogTeleconferenceDeviceQualityRequestBuilderUriTemplate,
        requestsMetadata: LogTeleconferenceDeviceQualityRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CallsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCallCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CallsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCallFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCall,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CallsRequestBuilderUriTemplate = "{+baseurl}/app/calls{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */