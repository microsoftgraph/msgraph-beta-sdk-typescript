/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTemporaryAccessPassAuthenticationMethodCollectionResponseFromDiscriminatorValue, createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue, serializeTemporaryAccessPassAuthenticationMethod, type TemporaryAccessPassAuthenticationMethod, type TemporaryAccessPassAuthenticationMethodCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { TemporaryAccessPassAuthenticationMethodItemRequestBuilderRequestsMetadata, type TemporaryAccessPassAuthenticationMethodItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the temporaryAccessPassMethods property of the microsoft.graph.authentication entity.
 */
export interface TemporaryAccessPassMethodsRequestBuilder extends BaseRequestBuilder<TemporaryAccessPassMethodsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the temporaryAccessPassMethods property of the microsoft.graph.authentication entity.
     * @param temporaryAccessPassAuthenticationMethodId The unique identifier of temporaryAccessPassAuthenticationMethod
     * @returns {TemporaryAccessPassAuthenticationMethodItemRequestBuilder}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     byTemporaryAccessPassAuthenticationMethodId(temporaryAccessPassAuthenticationMethodId: string) : TemporaryAccessPassAuthenticationMethodItemRequestBuilder;
    /**
     * Retrieve a list of a user's temporaryAccessPassAuthenticationMethod objects and their properties. This API will only return a single object in the collection as a user can have only one Temporary Access Pass (TAP) method.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TemporaryAccessPassAuthenticationMethodCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     * @see {@link https://learn.microsoft.com/graph/api/authentication-list-temporaryaccesspassmethods?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TemporaryAccessPassMethodsRequestBuilderGetQueryParameters> | undefined) : Promise<TemporaryAccessPassAuthenticationMethodCollectionResponse | undefined>;
    /**
     * Create a new temporaryAccessPassAuthenticationMethod object on a user. A user can only have one Temporary Access Pass that's usable within its specified lifetime. If the user requires a new Temporary Access Pass while the current Temporary Access Pass is valid, the admin can create a new Temporary Access Pass for the user, the previous Temporary Access Pass will be deleted, and a new Temporary Access Pass will be created.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TemporaryAccessPassAuthenticationMethod>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     * @see {@link https://learn.microsoft.com/graph/api/authentication-post-temporaryaccesspassmethods?view=graph-rest-beta|Find more info here}
     */
     post(body: TemporaryAccessPassAuthenticationMethod, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TemporaryAccessPassAuthenticationMethod | undefined>;
    /**
     * Retrieve a list of a user's temporaryAccessPassAuthenticationMethod objects and their properties. This API will only return a single object in the collection as a user can have only one Temporary Access Pass (TAP) method.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TemporaryAccessPassMethodsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new temporaryAccessPassAuthenticationMethod object on a user. A user can only have one Temporary Access Pass that's usable within its specified lifetime. If the user requires a new Temporary Access Pass while the current Temporary Access Pass is valid, the admin can create a new Temporary Access Pass for the user, the previous Temporary Access Pass will be deleted, and a new Temporary Access Pass will be created.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toPostRequestInformation(body: TemporaryAccessPassAuthenticationMethod, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of a user's temporaryAccessPassAuthenticationMethod objects and their properties. This API will only return a single object in the collection as a user can have only one Temporary Access Pass (TAP) method.
 */
export interface TemporaryAccessPassMethodsRequestBuilderGetQueryParameters {
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
export const TemporaryAccessPassMethodsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/authentication/temporaryAccessPassMethods{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TemporaryAccessPassMethodsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const TemporaryAccessPassMethodsRequestBuilderNavigationMetadata: Record<Exclude<keyof TemporaryAccessPassMethodsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byTemporaryAccessPassAuthenticationMethodId: {
        requestsMetadata: TemporaryAccessPassAuthenticationMethodItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["temporaryAccessPassAuthenticationMethod%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TemporaryAccessPassMethodsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TemporaryAccessPassMethodsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTemporaryAccessPassAuthenticationMethodCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TemporaryAccessPassMethodsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: TemporaryAccessPassMethodsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTemporaryAccessPassAuthenticationMethod,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
