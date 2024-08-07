/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createApplicationFromDiscriminatorValue, type Application } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the applications property of the microsoft.graph.connectorGroup entity.
 */
export interface ApplicationsWithAppIdRequestBuilder extends BaseRequestBuilder<ApplicationsWithAppIdRequestBuilder> {
    /**
     * Get applications from onPremisesPublishingProfiles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Application>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ApplicationsWithAppIdRequestBuilderGetQueryParameters> | undefined) : Promise<Application | undefined>;
    /**
     * Get applications from onPremisesPublishingProfiles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ApplicationsWithAppIdRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get applications from onPremisesPublishingProfiles
 */
export interface ApplicationsWithAppIdRequestBuilderGetQueryParameters {
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
export const ApplicationsWithAppIdRequestBuilderUriTemplate = "{+baseurl}/onPremisesPublishingProfiles/{onPremisesPublishingProfile%2Did}/connectorGroups/{connectorGroup%2Did}/applications(appId='{appId}'){?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ApplicationsWithAppIdRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ApplicationsWithAppIdRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ApplicationsWithAppIdRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createApplicationFromDiscriminatorValue,
        queryParametersMapper: ApplicationsWithAppIdRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
