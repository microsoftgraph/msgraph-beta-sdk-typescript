/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceManagementPartnerCollectionResponseFromDiscriminatorValue, createDeviceManagementPartnerFromDiscriminatorValue, serializeDeviceManagementPartner, type DeviceManagementPartner, type DeviceManagementPartnerCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DeviceManagementPartnerItemRequestBuilderNavigationMetadata, DeviceManagementPartnerItemRequestBuilderRequestsMetadata, DeviceManagementPartnerItemRequestBuilderUriTemplate, type DeviceManagementPartnerItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceManagementPartners property of the microsoft.graph.deviceManagement entity.
 */
export interface DeviceManagementPartnersRequestBuilder extends BaseRequestBuilder<DeviceManagementPartnersRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the deviceManagementPartners property of the microsoft.graph.deviceManagement entity.
     * @param deviceManagementPartnerId The unique identifier of deviceManagementPartner
     * @returns a DeviceManagementPartnerItemRequestBuilder
     */
     byDeviceManagementPartnerId(deviceManagementPartnerId: string) : DeviceManagementPartnerItemRequestBuilder;
    /**
     * The list of Device Management Partners configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementPartnerCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<DeviceManagementPartnersRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceManagementPartnerCollectionResponse | undefined>;
    /**
     * Create new navigation property to deviceManagementPartners for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementPartner
     */
     post(body: DeviceManagementPartner, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceManagementPartner | undefined>;
    /**
     * The list of Device Management Partners configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceManagementPartnersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to deviceManagementPartners for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: DeviceManagementPartner, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of Device Management Partners configured by the tenant.
 */
export interface DeviceManagementPartnersRequestBuilderGetQueryParameters {
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
const DeviceManagementPartnersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DeviceManagementPartnersRequestBuilderNavigationMetadata: Record<Exclude<keyof DeviceManagementPartnersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDeviceManagementPartnerId: {
        uriTemplate: DeviceManagementPartnerItemRequestBuilderUriTemplate,
        requestsMetadata: DeviceManagementPartnerItemRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceManagementPartnerItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["deviceManagementPartner%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceManagementPartnersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceManagementPartnerCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DeviceManagementPartnersRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceManagementPartnerFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceManagementPartner,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DeviceManagementPartnersRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceManagementPartners{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */