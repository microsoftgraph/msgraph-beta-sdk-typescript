/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPendingExternalUserProfileFromDiscriminatorValue, serializePendingExternalUserProfile, type PendingExternalUserProfile } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the pendingExternalUserProfiles property of the microsoft.graph.directory entity.
 */
export interface PendingExternalUserProfileItemRequestBuilder extends BaseRequestBuilder<PendingExternalUserProfileItemRequestBuilder> {
    /**
     * Delete a pendingExternalUserProfile object. Note: To permanently delete the pendingExternalUserProfile, follow permanently delete an item. To restore a pendingExternalUserProfile, follow restore a deleted item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/directory-delete-pendingexternaluserprofiles?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties of a specific pendingExternalUserProfile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PendingExternalUserProfile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/pendingexternaluserprofile-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<PendingExternalUserProfileItemRequestBuilderGetQueryParameters> | undefined) : Promise<PendingExternalUserProfile | undefined>;
    /**
     * Update the properties of a pendingExternalUserProfile object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PendingExternalUserProfile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/pendingexternaluserprofile-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: PendingExternalUserProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PendingExternalUserProfile | undefined>;
    /**
     * Delete a pendingExternalUserProfile object. Note: To permanently delete the pendingExternalUserProfile, follow permanently delete an item. To restore a pendingExternalUserProfile, follow restore a deleted item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties of a specific pendingExternalUserProfile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PendingExternalUserProfileItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a pendingExternalUserProfile object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: PendingExternalUserProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties of a specific pendingExternalUserProfile.
 */
export interface PendingExternalUserProfileItemRequestBuilderGetQueryParameters {
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
export const PendingExternalUserProfileItemRequestBuilderUriTemplate = "{+baseurl}/directory/pendingExternalUserProfiles/{pendingExternalUserProfile%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PendingExternalUserProfileItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PendingExternalUserProfileItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: PendingExternalUserProfileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: PendingExternalUserProfileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPendingExternalUserProfileFromDiscriminatorValue,
        queryParametersMapper: PendingExternalUserProfileItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: PendingExternalUserProfileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPendingExternalUserProfileFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePendingExternalUserProfile,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */