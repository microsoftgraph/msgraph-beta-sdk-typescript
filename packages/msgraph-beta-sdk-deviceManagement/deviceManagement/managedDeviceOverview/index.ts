/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createManagedDeviceOverviewFromDiscriminatorValue, type ManagedDeviceOverview } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedDeviceOverview property of the microsoft.graph.deviceManagement entity.
 */
export interface ManagedDeviceOverviewRequestBuilder extends BaseRequestBuilder<ManagedDeviceOverviewRequestBuilder> {
    /**
     * Device overview
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedDeviceOverview
     */
     get(requestConfiguration?: RequestConfiguration<ManagedDeviceOverviewRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedDeviceOverview | undefined>;
    /**
     * Device overview
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
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
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagedDeviceOverviewFromDiscriminatorValue,
        queryParametersMapper: ManagedDeviceOverviewRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const ManagedDeviceOverviewRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/managedDeviceOverview{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */