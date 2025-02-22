/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDirectoryObjectFromDiscriminatorValue, type DirectoryObject } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the invitedBy property of the microsoft.graph.user entity.
 */
export interface InvitedByRequestBuilder extends BaseRequestBuilder<InvitedByRequestBuilder> {
    /**
     * Get the user or servicePrincipal that invited the specified user into the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DirectoryObject>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/user-list-invitedby?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<InvitedByRequestBuilderGetQueryParameters> | undefined) : Promise<DirectoryObject | undefined>;
    /**
     * Get the user or servicePrincipal that invited the specified user into the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<InvitedByRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the user or servicePrincipal that invited the specified user into the tenant.
 */
export interface InvitedByRequestBuilderGetQueryParameters {
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
export const InvitedByRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/invitedBy{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const InvitedByRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const InvitedByRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: InvitedByRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDirectoryObjectFromDiscriminatorValue,
        queryParametersMapper: InvitedByRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
