/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagedDeviceOverviewFromDiscriminatorValue, type ManagedDeviceOverview } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedDeviceOverview property of the microsoft.graph.deviceManagement entity.
 */
export interface ManagedDeviceOverviewRequestBuilder extends BaseRequestBuilder<ManagedDeviceOverviewRequestBuilder> {
    /**
     * Device overview
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedDeviceOverview>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ManagedDeviceOverviewRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedDeviceOverview | undefined>;
    /**
     * Device overview
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedDeviceOverviewRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Device overview
 */
export interface ManagedDeviceOverviewRequestBuilderGetQueryParameters {
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
export const ManagedDeviceOverviewRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/managedDeviceOverview{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ManagedDeviceOverviewRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedDeviceOverviewRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ManagedDeviceOverviewRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedDeviceOverviewFromDiscriminatorValue,
        queryParametersMapper: ManagedDeviceOverviewRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
