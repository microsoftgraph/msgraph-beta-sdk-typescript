/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createInternetExplorerModeFromDiscriminatorValue, serializeInternetExplorerMode, type InternetExplorerMode } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { SiteListsRequestBuilderNavigationMetadata, SiteListsRequestBuilderRequestsMetadata, SiteListsRequestBuilderUriTemplate, type SiteListsRequestBuilder } from './siteLists/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the internetExplorerMode property of the microsoft.graph.edge entity.
 */
export interface InternetExplorerModeRequestBuilder extends BaseRequestBuilder<InternetExplorerModeRequestBuilder> {
    /**
     * Provides operations to manage the siteLists property of the microsoft.graph.internetExplorerMode entity.
     */
    get siteLists(): SiteListsRequestBuilder;
    /**
     * Delete navigation property internetExplorerMode for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A container for Internet Explorer mode resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InternetExplorerMode
     */
     get(requestConfiguration?: RequestConfiguration<InternetExplorerModeRequestBuilderGetQueryParameters> | undefined) : Promise<InternetExplorerMode | undefined>;
    /**
     * Update the navigation property internetExplorerMode in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InternetExplorerMode
     */
     patch(body: InternetExplorerMode, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<InternetExplorerMode | undefined>;
    /**
     * Delete navigation property internetExplorerMode for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A container for Internet Explorer mode resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<InternetExplorerModeRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property internetExplorerMode in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: InternetExplorerMode, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A container for Internet Explorer mode resources.
 */
export interface InternetExplorerModeRequestBuilderGetQueryParameters {
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
const InternetExplorerModeRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const InternetExplorerModeRequestBuilderNavigationMetadata: Record<Exclude<keyof InternetExplorerModeRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    siteLists: {
        uriTemplate: SiteListsRequestBuilderUriTemplate,
        requestsMetadata: SiteListsRequestBuilderRequestsMetadata,
        navigationMetadata: SiteListsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const InternetExplorerModeRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createInternetExplorerModeFromDiscriminatorValue,
        queryParametersMapper: InternetExplorerModeRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createInternetExplorerModeFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeInternetExplorerMode,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const InternetExplorerModeRequestBuilderUriTemplate = "{+baseurl}/admin/edge/internetExplorerMode{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */