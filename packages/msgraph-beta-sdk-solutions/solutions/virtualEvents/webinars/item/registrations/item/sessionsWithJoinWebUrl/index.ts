/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createVirtualEventSessionFromDiscriminatorValue, type VirtualEventSession } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sessions property of the microsoft.graph.virtualEventRegistration entity.
 */
export interface SessionsWithJoinWebUrlRequestBuilder extends BaseRequestBuilder<SessionsWithJoinWebUrlRequestBuilder> {
    /**
     * Get sessions from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VirtualEventSession
     */
     get(requestConfiguration?: RequestConfiguration<SessionsWithJoinWebUrlRequestBuilderGetQueryParameters> | undefined) : Promise<VirtualEventSession | undefined>;
    /**
     * Get sessions from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SessionsWithJoinWebUrlRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get sessions from solutions
 */
export interface SessionsWithJoinWebUrlRequestBuilderGetQueryParameters {
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
const SessionsWithJoinWebUrlRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SessionsWithJoinWebUrlRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createVirtualEventSessionFromDiscriminatorValue,
        queryParametersMapper: SessionsWithJoinWebUrlRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const SessionsWithJoinWebUrlRequestBuilderUriTemplate = "{+baseurl}/solutions/virtualEvents/webinars/{virtualEventWebinar%2Did}/registrations/{virtualEventRegistration%2Did}/sessions(joinWebUrl='{joinWebUrl}'){?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */