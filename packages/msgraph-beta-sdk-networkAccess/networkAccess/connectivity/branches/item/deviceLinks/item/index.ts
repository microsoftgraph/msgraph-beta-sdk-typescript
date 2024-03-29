/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceLinkFromDiscriminatorValue, serializeDeviceLink, type DeviceLink } from '@microsoft/msgraph-beta-sdk/models/networkaccess/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceLinks property of the microsoft.graph.networkaccess.branchSite entity.
 */
export interface DeviceLinkItemRequestBuilder extends BaseRequestBuilder<DeviceLinkItemRequestBuilder> {
    /**
     * Removes the link between the branch and the CPE device, effectively removing the connection and associated configuration between them.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
     * @see {@link https://learn.microsoft.com/graph/api/networkaccess-branchsite-delete-devicelinks?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the device link associated with a specific branch.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceLink>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
     * @see {@link https://learn.microsoft.com/graph/api/networkaccess-devicelink-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DeviceLinkItemRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceLink | undefined>;
    /**
     * Update the device link associated with a specific branch.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceLink>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
     * @see {@link https://learn.microsoft.com/graph/api/networkaccess-devicelink-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: DeviceLink, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceLink | undefined>;
    /**
     * Removes the link between the branch and the CPE device, effectively removing the connection and associated configuration between them.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the device link associated with a specific branch.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceLinkItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the device link associated with a specific branch.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Branches API is deprecated and will stop returning data on March 20, 2024. Please use the new Remote Network API. as of 2022-06/PrivatePreview:NetworkAccess
     */
     toPatchRequestInformation(body: DeviceLink, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the device link associated with a specific branch.
 */
export interface DeviceLinkItemRequestBuilderGetQueryParameters {
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
export const DeviceLinkItemRequestBuilderUriTemplate = "{+baseurl}/networkAccess/connectivity/branches/{branchSite%2Did}/deviceLinks/{deviceLink%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceLinkItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceLinkItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DeviceLinkItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DeviceLinkItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceLinkFromDiscriminatorValue,
        queryParametersMapper: DeviceLinkItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DeviceLinkItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceLinkFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceLink,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
