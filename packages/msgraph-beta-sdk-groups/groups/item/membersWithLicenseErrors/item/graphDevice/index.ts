/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceFromDiscriminatorValue, type Device } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to device.
 */
export interface GraphDeviceRequestBuilder extends BaseRequestBuilder<GraphDeviceRequestBuilder> {
    /**
     * Get the item of type microsoft.graph.directoryObject as microsoft.graph.device
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Device
     */
     get(requestConfiguration?: RequestConfiguration<GraphDeviceRequestBuilderGetQueryParameters> | undefined) : Promise<Device | undefined>;
    /**
     * Get the item of type microsoft.graph.directoryObject as microsoft.graph.device
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GraphDeviceRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the item of type microsoft.graph.directoryObject as microsoft.graph.device
 */
export interface GraphDeviceRequestBuilderGetQueryParameters {
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
const GraphDeviceRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GraphDeviceRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceFromDiscriminatorValue,
        queryParametersMapper: GraphDeviceRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const GraphDeviceRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/membersWithLicenseErrors/{directoryObject%2Did}/graph.device{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */