/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createHostCookieFromDiscriminatorValue, type HostCookie } from '@microsoft/msgraph-beta-sdk/models/security/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the cookies property of the microsoft.graph.security.host entity.
 */
export interface HostCookieItemRequestBuilder extends BaseRequestBuilder<HostCookieItemRequestBuilder> {
    /**
     * The hostCookies that are associated with this host.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostCookie
     */
     get(requestConfiguration?: RequestConfiguration<HostCookieItemRequestBuilderGetQueryParameters> | undefined) : Promise<HostCookie | undefined>;
    /**
     * The hostCookies that are associated with this host.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HostCookieItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The hostCookies that are associated with this host.
 */
export interface HostCookieItemRequestBuilderGetQueryParameters {
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
const HostCookieItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HostCookieItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createHostCookieFromDiscriminatorValue,
        queryParametersMapper: HostCookieItemRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const HostCookieItemRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/hosts/{host%2Did}/cookies/{hostCookie%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */