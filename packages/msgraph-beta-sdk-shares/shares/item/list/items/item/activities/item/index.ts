/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createItemActivityOLDFromDiscriminatorValue, serializeItemActivityOLD, type ItemActivityOLD } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { DriveItemRequestBuilderNavigationMetadata, DriveItemRequestBuilderRequestsMetadata, DriveItemRequestBuilderUriTemplate, type DriveItemRequestBuilder } from './driveItem/';
import { ListItemRequestBuilderRequestsMetadata, ListItemRequestBuilderUriTemplate, type ListItemRequestBuilder } from './listItem/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the activities property of the microsoft.graph.listItem entity.
 */
export interface ItemActivityOLDItemRequestBuilder extends BaseRequestBuilder<ItemActivityOLDItemRequestBuilder> {
    /**
     * Provides operations to manage the driveItem property of the microsoft.graph.itemActivityOLD entity.
     */
    get driveItem(): DriveItemRequestBuilder;
    /**
     * Provides operations to manage the listItem property of the microsoft.graph.itemActivityOLD entity.
     */
    get listItem(): ListItemRequestBuilder;
    /**
     * Delete navigation property activities for shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The list of recent activities that took place on this item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ItemActivityOLD
     */
     get(requestConfiguration?: RequestConfiguration<ItemActivityOLDItemRequestBuilderGetQueryParameters> | undefined) : Promise<ItemActivityOLD | undefined>;
    /**
     * Update the navigation property activities in shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ItemActivityOLD
     */
     patch(body: ItemActivityOLD, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ItemActivityOLD | undefined>;
    /**
     * Delete navigation property activities for shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The list of recent activities that took place on this item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ItemActivityOLDItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property activities in shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ItemActivityOLD, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of recent activities that took place on this item.
 */
export interface ItemActivityOLDItemRequestBuilderGetQueryParameters {
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
const ItemActivityOLDItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ItemActivityOLDItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ItemActivityOLDItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    driveItem: {
        uriTemplate: DriveItemRequestBuilderUriTemplate,
        requestsMetadata: DriveItemRequestBuilderRequestsMetadata,
        navigationMetadata: DriveItemRequestBuilderNavigationMetadata,
    },
    listItem: {
        uriTemplate: ListItemRequestBuilderUriTemplate,
        requestsMetadata: ListItemRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ItemActivityOLDItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createItemActivityOLDFromDiscriminatorValue,
        queryParametersMapper: ItemActivityOLDItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createItemActivityOLDFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeItemActivityOLD,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ItemActivityOLDItemRequestBuilderUriTemplate = "{+baseurl}/shares/{sharedDriveItem%2Did}/list/items/{listItem%2Did}/activities/{itemActivityOLD%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */