/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAppCredentialSignInActivityFromDiscriminatorValue, serializeAppCredentialSignInActivity, type AppCredentialSignInActivity } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appCredentialSignInActivities property of the microsoft.graph.reportRoot entity.
 */
export interface AppCredentialSignInActivityItemRequestBuilder extends BaseRequestBuilder<AppCredentialSignInActivityItemRequestBuilder> {
    /**
     * Delete navigation property appCredentialSignInActivities for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get an appCredentialSignInActivity object that contains recent activity of an application credential.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AppCredentialSignInActivity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/appcredentialsigninactivity-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AppCredentialSignInActivityItemRequestBuilderGetQueryParameters> | undefined) : Promise<AppCredentialSignInActivity | undefined>;
    /**
     * Update the navigation property appCredentialSignInActivities in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AppCredentialSignInActivity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: AppCredentialSignInActivity, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AppCredentialSignInActivity | undefined>;
    /**
     * Delete navigation property appCredentialSignInActivities for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get an appCredentialSignInActivity object that contains recent activity of an application credential.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AppCredentialSignInActivityItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property appCredentialSignInActivities in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AppCredentialSignInActivity, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get an appCredentialSignInActivity object that contains recent activity of an application credential.
 */
export interface AppCredentialSignInActivityItemRequestBuilderGetQueryParameters {
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
export const AppCredentialSignInActivityItemRequestBuilderUriTemplate = "{+baseurl}/reports/appCredentialSignInActivities/{appCredentialSignInActivity%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AppCredentialSignInActivityItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AppCredentialSignInActivityItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AppCredentialSignInActivityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AppCredentialSignInActivityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAppCredentialSignInActivityFromDiscriminatorValue,
        queryParametersMapper: AppCredentialSignInActivityItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AppCredentialSignInActivityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAppCredentialSignInActivityFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAppCredentialSignInActivity,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
