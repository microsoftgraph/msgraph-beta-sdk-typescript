/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCloudCommunicationsFromDiscriminatorValue, serializeCloudCommunications, type CloudCommunications } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CallRecordsRequestBuilderNavigationMetadata, CallRecordsRequestBuilderRequestsMetadata, CallRecordsRequestBuilderUriTemplate, type CallRecordsRequestBuilder } from './callRecords/';
import { CallsRequestBuilderNavigationMetadata, CallsRequestBuilderRequestsMetadata, CallsRequestBuilderUriTemplate, type CallsRequestBuilder } from './calls/';
import { GetPresencesByUserIdRequestBuilderRequestsMetadata, GetPresencesByUserIdRequestBuilderUriTemplate, type GetPresencesByUserIdRequestBuilder } from './getPresencesByUserId/';
import { OnlineMeetingsRequestBuilderNavigationMetadata, OnlineMeetingsRequestBuilderRequestsMetadata, OnlineMeetingsRequestBuilderUriTemplate, type OnlineMeetingsRequestBuilder } from './onlineMeetings/';
import { OnlineMeetingsWithJoinWebUrlRequestBuilderNavigationMetadata, OnlineMeetingsWithJoinWebUrlRequestBuilderRequestsMetadata, OnlineMeetingsWithJoinWebUrlRequestBuilderUriTemplate, type OnlineMeetingsWithJoinWebUrlRequestBuilder } from './onlineMeetingsWithJoinWebUrl/';
import { PresencesRequestBuilderNavigationMetadata, PresencesRequestBuilderRequestsMetadata, PresencesRequestBuilderUriTemplate, type PresencesRequestBuilder } from './presences/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the cloudCommunications singleton.
 */
export interface CommunicationsRequestBuilder extends BaseRequestBuilder<CommunicationsRequestBuilder> {
    /**
     * Provides operations to manage the callRecords property of the microsoft.graph.cloudCommunications entity.
     */
    get callRecords(): CallRecordsRequestBuilder;
    /**
     * Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity.
     */
    get calls(): CallsRequestBuilder;
    /**
     * Provides operations to call the getPresencesByUserId method.
     */
    get getPresencesByUserId(): GetPresencesByUserIdRequestBuilder;
    /**
     * Provides operations to manage the onlineMeetings property of the microsoft.graph.cloudCommunications entity.
     */
    get onlineMeetings(): OnlineMeetingsRequestBuilder;
    /**
     * Provides operations to manage the presences property of the microsoft.graph.cloudCommunications entity.
     */
    get presences(): PresencesRequestBuilder;
    /**
     * Get communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CloudCommunications
     */
     get(requestConfiguration?: RequestConfiguration<CommunicationsRequestBuilderGetQueryParameters> | undefined) : Promise<CloudCommunications | undefined>;
    /**
     * Provides operations to manage the onlineMeetings property of the microsoft.graph.cloudCommunications entity.
     * @param joinWebUrl Alternate key of onlineMeeting
     * @returns a onlineMeetingsWithJoinWebUrlRequestBuilder
     */
     onlineMeetingsWithJoinWebUrl(joinWebUrl: string | undefined) : OnlineMeetingsWithJoinWebUrlRequestBuilder;
    /**
     * Update communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CloudCommunications
     */
     patch(body: CloudCommunications, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudCommunications | undefined>;
    /**
     * Get communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CommunicationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: CloudCommunications, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get communications
 */
export interface CommunicationsRequestBuilderGetQueryParameters {
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
const CommunicationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CommunicationsRequestBuilderNavigationMetadata: Record<Exclude<keyof CommunicationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    onlineMeetingsWithJoinWebUrl: {
        uriTemplate: OnlineMeetingsWithJoinWebUrlRequestBuilderUriTemplate,
        requestsMetadata: OnlineMeetingsWithJoinWebUrlRequestBuilderRequestsMetadata,
        navigationMetadata: OnlineMeetingsWithJoinWebUrlRequestBuilderNavigationMetadata,
    },
    callRecords: {
        uriTemplate: CallRecordsRequestBuilderUriTemplate,
        requestsMetadata: CallRecordsRequestBuilderRequestsMetadata,
        navigationMetadata: CallRecordsRequestBuilderNavigationMetadata,
    },
    calls: {
        uriTemplate: CallsRequestBuilderUriTemplate,
        requestsMetadata: CallsRequestBuilderRequestsMetadata,
        navigationMetadata: CallsRequestBuilderNavigationMetadata,
    },
    getPresencesByUserId: {
        uriTemplate: GetPresencesByUserIdRequestBuilderUriTemplate,
        requestsMetadata: GetPresencesByUserIdRequestBuilderRequestsMetadata,
    },
    onlineMeetings: {
        uriTemplate: OnlineMeetingsRequestBuilderUriTemplate,
        requestsMetadata: OnlineMeetingsRequestBuilderRequestsMetadata,
        navigationMetadata: OnlineMeetingsRequestBuilderNavigationMetadata,
    },
    presences: {
        uriTemplate: PresencesRequestBuilderUriTemplate,
        requestsMetadata: PresencesRequestBuilderRequestsMetadata,
        navigationMetadata: PresencesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CommunicationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCloudCommunicationsFromDiscriminatorValue,
        queryParametersMapper: CommunicationsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCloudCommunicationsFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCloudCommunications,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CommunicationsRequestBuilderUriTemplate = "{+baseurl}/communications{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */