/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagedDeviceWindowsOperatingSystemImageCollectionResponseFromDiscriminatorValue, createManagedDeviceWindowsOperatingSystemImageFromDiscriminatorValue, serializeManagedDeviceWindowsOperatingSystemImage, type ManagedDeviceWindowsOperatingSystemImage, type ManagedDeviceWindowsOperatingSystemImageCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ManagedDeviceWindowsOperatingSystemImageItemRequestBuilderNavigationMetadata, ManagedDeviceWindowsOperatingSystemImageItemRequestBuilderRequestsMetadata, type ManagedDeviceWindowsOperatingSystemImageItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedDeviceWindowsOSImages property of the microsoft.graph.deviceManagement entity.
 */
export interface ManagedDeviceWindowsOSImagesRequestBuilder extends BaseRequestBuilder<ManagedDeviceWindowsOSImagesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the managedDeviceWindowsOSImages property of the microsoft.graph.deviceManagement entity.
     * @param managedDeviceWindowsOperatingSystemImageId The unique identifier of managedDeviceWindowsOperatingSystemImage
     * @returns {ManagedDeviceWindowsOperatingSystemImageItemRequestBuilder}
     */
     byManagedDeviceWindowsOperatingSystemImageId(managedDeviceWindowsOperatingSystemImageId: string) : ManagedDeviceWindowsOperatingSystemImageItemRequestBuilder;
    /**
     * A list of ManagedDeviceWindowsOperatingSystemImages
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedDeviceWindowsOperatingSystemImageCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ManagedDeviceWindowsOSImagesRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedDeviceWindowsOperatingSystemImageCollectionResponse | undefined>;
    /**
     * Create new navigation property to managedDeviceWindowsOSImages for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedDeviceWindowsOperatingSystemImage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ManagedDeviceWindowsOperatingSystemImage, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedDeviceWindowsOperatingSystemImage | undefined>;
    /**
     * A list of ManagedDeviceWindowsOperatingSystemImages
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedDeviceWindowsOSImagesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to managedDeviceWindowsOSImages for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ManagedDeviceWindowsOperatingSystemImage, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A list of ManagedDeviceWindowsOperatingSystemImages
 */
export interface ManagedDeviceWindowsOSImagesRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const ManagedDeviceWindowsOSImagesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/managedDeviceWindowsOSImages{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ManagedDeviceWindowsOSImagesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ManagedDeviceWindowsOSImagesRequestBuilderNavigationMetadata: Record<Exclude<keyof ManagedDeviceWindowsOSImagesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byManagedDeviceWindowsOperatingSystemImageId: {
        requestsMetadata: ManagedDeviceWindowsOperatingSystemImageItemRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedDeviceWindowsOperatingSystemImageItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["managedDeviceWindowsOperatingSystemImage%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedDeviceWindowsOSImagesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ManagedDeviceWindowsOSImagesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedDeviceWindowsOperatingSystemImageCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ManagedDeviceWindowsOSImagesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ManagedDeviceWindowsOSImagesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedDeviceWindowsOperatingSystemImageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedDeviceWindowsOperatingSystemImage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */