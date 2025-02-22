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
import { DirectoryObjectItemRequestBuilderRequestsMetadata, type DirectoryObjectItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the invitedUserSponsors property of the microsoft.graph.invitation entity.
 */
export interface InvitedUserSponsorsRequestBuilder extends BaseRequestBuilder<InvitedUserSponsorsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the invitedUserSponsors property of the microsoft.graph.invitation entity.
     * @param directoryObjectId The unique identifier of directoryObject
     * @returns {DirectoryObjectItemRequestBuilder}
     */
     byDirectoryObjectId(directoryObjectId: string) : DirectoryObjectItemRequestBuilder;
    /**
     * The users or groups who are sponsors of the invited user. Sponsors are users and groups that are responsible for guest users' privileges in the tenant and for keeping the guest users' information and access up to date.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DirectoryObjectCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<InvitedUserSponsorsRequestBuilderGetQueryParameters> | undefined) : Promise<DirectoryObjectCollectionResponse | undefined>;
    /**
     * The users or groups who are sponsors of the invited user. Sponsors are users and groups that are responsible for guest users' privileges in the tenant and for keeping the guest users' information and access up to date.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<InvitedUserSponsorsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The users or groups who are sponsors of the invited user. Sponsors are users and groups that are responsible for guest users' privileges in the tenant and for keeping the guest users' information and access up to date.
 */
export interface InvitedUserSponsorsRequestBuilderGetQueryParameters {
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
export const InvitedUserSponsorsRequestBuilderUriTemplate = "{+baseurl}/invitations/invitedUserSponsors{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const InvitedUserSponsorsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const InvitedUserSponsorsRequestBuilderNavigationMetadata: Record<Exclude<keyof InvitedUserSponsorsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDirectoryObjectId: {
        requestsMetadata: DirectoryObjectItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["directoryObject%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const InvitedUserSponsorsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: InvitedUserSponsorsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDirectoryObjectCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: InvitedUserSponsorsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
