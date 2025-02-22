/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createVirtualEventRegistrationFromDiscriminatorValue, type VirtualEventRegistration } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the registrations property of the microsoft.graph.virtualEventSession entity.
 */
export interface VirtualEventRegistrationItemRequestBuilder extends BaseRequestBuilder<VirtualEventRegistrationItemRequestBuilder> {
    /**
     * Get registrations from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VirtualEventRegistration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<VirtualEventRegistrationItemRequestBuilderGetQueryParameters> | undefined) : Promise<VirtualEventRegistration | undefined>;
    /**
     * Get registrations from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
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
 * Uri template for the request builder.
 */
export const VirtualEventRegistrationItemRequestBuilderUriTemplate = "{+baseurl}/solutions/virtualEvents/events/{virtualEvent%2Did}/sessions/{virtualEventSession%2Did}/registrations/{virtualEventRegistration%2Did}{?%24expand,%24select}";
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
        uriTemplate: VirtualEventRegistrationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createVirtualEventRegistrationFromDiscriminatorValue,
        queryParametersMapper: VirtualEventRegistrationItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
