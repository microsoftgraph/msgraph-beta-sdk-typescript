/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDirectoryObjectCollectionResponseFromDiscriminatorValue, type DirectoryObjectCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { GraphApplicationRequestBuilderNavigationMetadata, GraphApplicationRequestBuilderRequestsMetadata, type GraphApplicationRequestBuilder } from './graphApplication/index.js';
// @ts-ignore
import { GraphDeviceRequestBuilderNavigationMetadata, GraphDeviceRequestBuilderRequestsMetadata, type GraphDeviceRequestBuilder } from './graphDevice/index.js';
// @ts-ignore
import { GraphGroupRequestBuilderNavigationMetadata, GraphGroupRequestBuilderRequestsMetadata, type GraphGroupRequestBuilder } from './graphGroup/index.js';
// @ts-ignore
import { GraphOrgContactRequestBuilderNavigationMetadata, GraphOrgContactRequestBuilderRequestsMetadata, type GraphOrgContactRequestBuilder } from './graphOrgContact/index.js';
// @ts-ignore
import { GraphServicePrincipalRequestBuilderNavigationMetadata, GraphServicePrincipalRequestBuilderRequestsMetadata, type GraphServicePrincipalRequestBuilder } from './graphServicePrincipal/index.js';
// @ts-ignore
import { GraphUserRequestBuilderNavigationMetadata, GraphUserRequestBuilderRequestsMetadata, type GraphUserRequestBuilder } from './graphUser/index.js';
// @ts-ignore
import { DirectoryObjectItemRequestBuilderNavigationMetadata, DirectoryObjectItemRequestBuilderRequestsMetadata, type DirectoryObjectItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the transitiveMembers property of the microsoft.graph.group entity.
 */
export interface TransitiveMembersRequestBuilder extends BaseRequestBuilder<TransitiveMembersRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Casts the previous resource to application.
     */
    get graphApplication(): GraphApplicationRequestBuilder;
    /**
     * Casts the previous resource to device.
     */
    get graphDevice(): GraphDeviceRequestBuilder;
    /**
     * Casts the previous resource to group.
     */
    get graphGroup(): GraphGroupRequestBuilder;
    /**
     * Casts the previous resource to orgContact.
     */
    get graphOrgContact(): GraphOrgContactRequestBuilder;
    /**
     * Casts the previous resource to servicePrincipal.
     */
    get graphServicePrincipal(): GraphServicePrincipalRequestBuilder;
    /**
     * Casts the previous resource to user.
     */
    get graphUser(): GraphUserRequestBuilder;
    /**
     * Provides operations to manage the transitiveMembers property of the microsoft.graph.group entity.
     * @param directoryObjectId The unique identifier of directoryObject
     * @returns {DirectoryObjectItemRequestBuilder}
     */
     byDirectoryObjectId(directoryObjectId: string) : DirectoryObjectItemRequestBuilder;
    /**
     * Get a list of a group's members. A group can have different object types as members. For more information about supported member types for different groups, see Group membership. This operation is transitive and returns a flat list of all nested members. An attempt to filter by an OData cast that represents an unsupported member type returns a 400 Bad Request error with the Request_UnsupportedQuery code.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DirectoryObjectCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/group-list-transitivemembers?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TransitiveMembersRequestBuilderGetQueryParameters> | undefined) : Promise<DirectoryObjectCollectionResponse | undefined>;
    /**
     * Get a list of a group's members. A group can have different object types as members. For more information about supported member types for different groups, see Group membership. This operation is transitive and returns a flat list of all nested members. An attempt to filter by an OData cast that represents an unsupported member type returns a 400 Bad Request error with the Request_UnsupportedQuery code.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TransitiveMembersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a list of a group's members. A group can have different object types as members. For more information about supported member types for different groups, see Group membership. This operation is transitive and returns a flat list of all nested members. An attempt to filter by an OData cast that represents an unsupported member type returns a 400 Bad Request error with the Request_UnsupportedQuery code.
 */
export interface TransitiveMembersRequestBuilderGetQueryParameters {
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
export const TransitiveMembersRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/transitiveMembers{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TransitiveMembersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const TransitiveMembersRequestBuilderNavigationMetadata: Record<Exclude<keyof TransitiveMembersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDirectoryObjectId: {
        requestsMetadata: DirectoryObjectItemRequestBuilderRequestsMetadata,
        navigationMetadata: DirectoryObjectItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["directoryObject%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    graphApplication: {
        requestsMetadata: GraphApplicationRequestBuilderRequestsMetadata,
        navigationMetadata: GraphApplicationRequestBuilderNavigationMetadata,
    },
    graphDevice: {
        requestsMetadata: GraphDeviceRequestBuilderRequestsMetadata,
        navigationMetadata: GraphDeviceRequestBuilderNavigationMetadata,
    },
    graphGroup: {
        requestsMetadata: GraphGroupRequestBuilderRequestsMetadata,
        navigationMetadata: GraphGroupRequestBuilderNavigationMetadata,
    },
    graphOrgContact: {
        requestsMetadata: GraphOrgContactRequestBuilderRequestsMetadata,
        navigationMetadata: GraphOrgContactRequestBuilderNavigationMetadata,
    },
    graphServicePrincipal: {
        requestsMetadata: GraphServicePrincipalRequestBuilderRequestsMetadata,
        navigationMetadata: GraphServicePrincipalRequestBuilderNavigationMetadata,
    },
    graphUser: {
        requestsMetadata: GraphUserRequestBuilderRequestsMetadata,
        navigationMetadata: GraphUserRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TransitiveMembersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TransitiveMembersRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDirectoryObjectCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TransitiveMembersRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
