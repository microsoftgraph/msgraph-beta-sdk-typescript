/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createVirtualEventRegistrationFromDiscriminatorValue, type VirtualEventRegistration } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the registrations property of the microsoft.graph.virtualEventSession entity.
 */
export interface VirtualEventRegistrationItemRequestBuilder extends BaseRequestBuilder<VirtualEventRegistrationItemRequestBuilder> {
    /**
     * Get registrations from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VirtualEventRegistration
     */
     get(requestConfiguration?: RequestConfiguration<VirtualEventRegistrationItemRequestBuilderGetQueryParameters> | undefined) : Promise<VirtualEventRegistration | undefined>;
    /**
     * Get registrations from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<VirtualEventRegistrationItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get registrations from solutions
 */
export interface VirtualEventRegistrationItemRequestBuilderGetQueryParameters {
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
const VirtualEventRegistrationItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const VirtualEventRegistrationItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createVirtualEventRegistrationFromDiscriminatorValue,
        queryParametersMapper: VirtualEventRegistrationItemRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const VirtualEventRegistrationItemRequestBuilderUriTemplate = "{+baseurl}/solutions/virtualEvents/events/{virtualEvent%2Did}/sessions/{virtualEventSession%2Did}/registrations/{virtualEventRegistration%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */