/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createWindowsInformationProtectionWipeActionCollectionResponseFromDiscriminatorValue, createWindowsInformationProtectionWipeActionFromDiscriminatorValue, serializeWindowsInformationProtectionWipeAction, type WindowsInformationProtectionWipeAction, type WindowsInformationProtectionWipeActionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { type WindowsInformationProtectionWipeActionItemRequestBuilder, WindowsInformationProtectionWipeActionItemRequestBuilderRequestsMetadata, WindowsInformationProtectionWipeActionItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsInformationProtectionWipeActions property of the microsoft.graph.deviceAppManagement entity.
 */
export interface WindowsInformationProtectionWipeActionsRequestBuilder extends BaseRequestBuilder<WindowsInformationProtectionWipeActionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the windowsInformationProtectionWipeActions property of the microsoft.graph.deviceAppManagement entity.
     * @param windowsInformationProtectionWipeActionId The unique identifier of windowsInformationProtectionWipeAction
     * @returns a WindowsInformationProtectionWipeActionItemRequestBuilder
     */
     byWindowsInformationProtectionWipeActionId(windowsInformationProtectionWipeActionId: string) : WindowsInformationProtectionWipeActionItemRequestBuilder;
    /**
     * Windows information protection wipe actions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionWipeActionCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<WindowsInformationProtectionWipeActionsRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsInformationProtectionWipeActionCollectionResponse | undefined>;
    /**
     * Create new navigation property to windowsInformationProtectionWipeActions for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionWipeAction
     */
     post(body: WindowsInformationProtectionWipeAction, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WindowsInformationProtectionWipeAction | undefined>;
    /**
     * Windows information protection wipe actions.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WindowsInformationProtectionWipeActionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to windowsInformationProtectionWipeActions for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: WindowsInformationProtectionWipeAction, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Windows information protection wipe actions.
 */
export interface WindowsInformationProtectionWipeActionsRequestBuilderGetQueryParameters {
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
const WindowsInformationProtectionWipeActionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const WindowsInformationProtectionWipeActionsRequestBuilderNavigationMetadata: Record<Exclude<keyof WindowsInformationProtectionWipeActionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byWindowsInformationProtectionWipeActionId: {
        uriTemplate: WindowsInformationProtectionWipeActionItemRequestBuilderUriTemplate,
        requestsMetadata: WindowsInformationProtectionWipeActionItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["windowsInformationProtectionWipeAction%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WindowsInformationProtectionWipeActionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWindowsInformationProtectionWipeActionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: WindowsInformationProtectionWipeActionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWindowsInformationProtectionWipeActionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWindowsInformationProtectionWipeAction,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const WindowsInformationProtectionWipeActionsRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/windowsInformationProtectionWipeActions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */