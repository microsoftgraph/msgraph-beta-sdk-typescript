/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createExtensionPropertyCollectionResponseFromDiscriminatorValue, createExtensionPropertyFromDiscriminatorValue, serializeExtensionProperty, type ExtensionProperty, type ExtensionPropertyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ExtensionPropertyItemRequestBuilderRequestsMetadata, ExtensionPropertyItemRequestBuilderUriTemplate, type ExtensionPropertyItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the extensionProperties property of the microsoft.graph.application entity.
 */
export interface ExtensionPropertiesRequestBuilder extends BaseRequestBuilder<ExtensionPropertiesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the extensionProperties property of the microsoft.graph.application entity.
     * @param extensionPropertyId The unique identifier of extensionProperty
     * @returns a ExtensionPropertyItemRequestBuilder
     */
     byExtensionPropertyId(extensionPropertyId: string) : ExtensionPropertyItemRequestBuilder;
    /**
     * Retrieve the list of directory extension definitions, represented by extensionProperty objects on an application.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExtensionPropertyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/application-list-extensionproperty?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ExtensionPropertiesRequestBuilderGetQueryParameters> | undefined) : Promise<ExtensionPropertyCollectionResponse | undefined>;
    /**
     * Create a new directory extension definition, represented by an extensionProperty object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExtensionProperty
     * @see {@link https://learn.microsoft.com/graph/api/application-post-extensionproperty?view=graph-rest-1.0|Find more info here}
     */
     post(body: ExtensionProperty, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ExtensionProperty | undefined>;
    /**
     * Retrieve the list of directory extension definitions, represented by extensionProperty objects on an application.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ExtensionPropertiesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new directory extension definition, represented by an extensionProperty object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ExtensionProperty, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the list of directory extension definitions, represented by extensionProperty objects on an application.
 */
export interface ExtensionPropertiesRequestBuilderGetQueryParameters {
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
const ExtensionPropertiesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ExtensionPropertiesRequestBuilderNavigationMetadata: Record<Exclude<keyof ExtensionPropertiesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byExtensionPropertyId: {
        uriTemplate: ExtensionPropertyItemRequestBuilderUriTemplate,
        requestsMetadata: ExtensionPropertyItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["extensionProperty%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ExtensionPropertiesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createExtensionPropertyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ExtensionPropertiesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createExtensionPropertyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeExtensionProperty,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ExtensionPropertiesRequestBuilderUriTemplate = "{+baseurl}/applications/{application%2Did}/extensionProperties{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */